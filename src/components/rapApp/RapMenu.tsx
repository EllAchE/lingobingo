import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { FRAGMENT_SHADER, VERTEX_SHADER } from './shaders';
import SceneInit from './SceneInit';
import { useDispatch, useSelector } from 'react-redux';
import { changeWords, setRapping } from '../../store/cardSlice';
import TimerCircle from '../TimerCircle';
import { BEAT_PATHS } from './constants';
import BeatDropdown from './BeatDropdown';

export default function RapMenu({ animationRef }: { animationRef: any }) {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  function timeoutWordChange() {
    dis(changeWords(undefined));
    const id = setInterval(() => {
      if (state.rapping) {
        dis(changeWords(undefined));
      }
    }, 6000);
    setIntervalId(id);
  }

  const setupAudioContext = () => {
    const audioContext = new window.AudioContext();
    const audioElement: any = document.getElementById('myAudio');
    const source = audioContext.createMediaElementSource(audioElement);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 1024;
    return { dataArray: new Uint8Array(analyser.frequencyBinCount), analyser };
  };

  useEffect(() => {
    const { dataArray, analyser } = setupAudioContext();
    const uniforms = {
      u_time: {
        type: 'f',
        value: 1.0,
      },
      u_amplitude: {
        type: 'f',
        value: 3,
      },
      u_data_arr: {
        type: 'float[64]',
        value: dataArray,
      },
    };

    // note: set up plane mesh and add it to the scene
    const planeGeometry = new THREE.PlaneGeometry(64, 64, 64, 64);
    const planeCustomMaterial = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      wireframe: true,
    });

    const planeMesh = new THREE.Mesh(planeGeometry, planeCustomMaterial);
    planeMesh.rotation.x = -Math.PI / 2 + Math.PI / 4;
    planeMesh.scale.x = 1.7;
    planeMesh.scale.y = 1.7;
    planeMesh.scale.z = 1.7;
    planeMesh.position.y = 8;

    let test = new SceneInit('cv');
    test.initScene();
    test.scene.add(planeMesh);
    test.animate();

    const render = (time) => {
      // note: update audio data
      analyser.getByteFrequencyData(dataArray);

      // note: update uniforms
      uniforms.u_time.value = time;
      uniforms.u_data_arr.value = dataArray;

      //   If refresh should rotate the plane
      //   planeMesh.rotation.x += 0.01;
      //   planeMesh.rotation.y += 0.01;
      //   planeMesh.rotation.z += 0.01;

      // note: call render function on every animation frame
      requestAnimationFrame(render);
    };
    render(0);
  }, []);

  return (
    <>
      <audio
        id="myAudio"
        className="w-80"
        src={BEAT_PATHS[0].path}
        controls
        autoPlay
        onPlay={() => {
          dis(setRapping(true));
          animationRef.current.play();
          timeoutWordChange();
        }}
        onPause={() => {
          dis(setRapping(false));
          animationRef.current.pause();
          clearInterval(intervalId);
        }}
      ></audio>
      {!state.rapping && <BeatDropdown />}
      {state.rapping && <TimerCircle />}
    </>
  );
}

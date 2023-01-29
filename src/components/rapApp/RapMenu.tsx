import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { BEAT_PATHS } from '../../constants';
import BeatButton from './BeatButton';
import * as THREE from 'three';
import { FRAGMENT_SHADER, VERTEX_SHADER } from './shaders';
import SceneInit from './SceneInit';
import { useDispatch, useSelector } from 'react-redux';
import { changeWords } from '../../store/cardSlice';

export default function RapMenu({
  rapping,
  setRapping,
}: {
  rapping: boolean;
  setRapping: any;
}) {
  const [beatIndex, setBeatIndex] = useState(0);
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  // function timeoutWordChange() {
  //   if (rapping) {
  //     setTimeout(() => {
  //       dis(changeWords(undefined));
  //       timeoutWordChange();
  //     }, 8000);
  //   }
  // }

  // function beginNewRap() {
  //   setRapping(true);
  //   timeoutWordChange();
  // }

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
    planeMesh.scale.x = 2;
    planeMesh.scale.y = 2;
    planeMesh.scale.z = 2;
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
    console.log('rend');
    render(0);
  }, []);

  function chooseBeat(index: number) {
    index = index % BEAT_PATHS.length;
    const source: any = document.getElementById('myAudio');
    source.src = BEAT_PATHS[index];
    setBeatIndex(index);
  }

  return (
    <>
      <audio
        id="myAudio"
        className="w-80"
        controls
        autoPlay
        onPlay={() => setRapping(true)}
        onPause={() => {
          setRapping(false);
        }}
      ></audio>
      {!rapping && (
        <Grid container alignItems={'spaceAround'}>
          {BEAT_PATHS.map((val, index) => {
            return (
              <BeatButton
                rapping={rapping}
                key={index}
                index={index}
                chooseBeat={chooseBeat}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
}

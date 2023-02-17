import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { FRAGMENT_SHADER, VERTEX_SHADER } from './shaders';
import SceneInit from './SceneInit';
import { useDispatch, useSelector } from 'react-redux';
import TimerCircle from '../TimerCircle';
import BeatDropdown from './BeatDropdown';
import { Button, Grid } from '@mui/material';
import { popPushRandomWord, setRapping } from '../../store/rapSlice';
import PresetsDropdown from './PresetsDropdown';

export default function RapMenu({ animationRef }: { animationRef: any }) {
  const dis = useDispatch();
  const rapState = useSelector((state: any) => state.rap);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [pKey, setPKey] = useState(0);
  const duration = 6;

  function timeoutWordChange() {
    setPKey((pKey + 1) % 30);
    dis(popPushRandomWord(undefined));
    const id = setInterval(() => {
      if (rapState.rapping) {
        console.log(pKey);
        setPKey((pKey + 1) % 30);
        dis(popPushRandomWord(undefined));
      }
      console.log('not rap');
      console.log(pKey);
    }, duration * 1000);
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
    const planeGeometry = new THREE.PlaneGeometry(64, 64, 64, 128);
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
    planeMesh.position.z = -16;

    // const torusGeometry = new THREE.SphereGeometry(10, 20, 20);
    // const torusCustomMaterial = new THREE.MeshBasicMaterial({
    //   color: 0xff0000,
    //   wireframe: true,
    // });

    // const torusMesh = new THREE.Mesh(torusGeometry, torusCustomMaterial);
    // torusMesh.position.z = 16;

    let test = new SceneInit('cv');
    test.initScene();
    test.scene.add(planeMesh);
    // test.scene.add(torusMesh);
    test.animate();

    const render = (time) => {
      // note: update audio data
      analyser.getByteFrequencyData(dataArray);

      // note: update uniforms
      uniforms.u_time.value = time;
      uniforms.u_data_arr.value = dataArray;

      //   If refresh should rotate the plane
      // torusMesh.rotation.x += 0.01;
      // torusMesh.rotation.y += 0.01;
      // torusMesh.rotation.z += 0.01;

      // note: call render function on every animation frame
      requestAnimationFrame(render);
    };
    render(0);
  }, []);

  return (
    <>
      {rapState.rapping && (
        <Grid container direction="column" alignContent={'center'} spacing={1}>
          {/* <Grid>
            <TimerCircle pKey={pKey} setPKey={setPKey} duration={duration} />
            // {Hacky spacing fix}
            <br></br>
          </Grid> */}
          <Grid>
            <Button
              className="py-4"
              variant="contained"
              size="small"
              onClick={() => {
                clearInterval(intervalId);
                // timeoutWordChange();
              }}
            >
              Next Pair
            </Button>
          </Grid>
        </Grid>
      )}
      {!rapState.rapping && <BeatDropdown />}
      {/* {!rapState.rapping && <PresetsDropdown />} */}
      <audio
        id="myAudio"
        className="w-80 pb-4"
        src={''}
        controls
        autoPlay
        onPlay={() => {
          dis(setRapping(true));
          animationRef.current.play();
          // timeoutWordChange();
        }}
        onPause={() => {
          dis(setRapping(false));
          animationRef.current.pause();
          clearInterval(intervalId);
        }}
      ></audio>
    </>
  );
}

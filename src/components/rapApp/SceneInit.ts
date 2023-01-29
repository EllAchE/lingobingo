import * as THREE from 'three';

export default class SceneInit {
  fov: number;
  scene: any;
  camera: any;
  renderer: any;
  canvasID: any;
  clock: THREE.Clock;
  uniforms: {
    u_time: { type: string; value: number };
    colorB: { type: string; value: THREE.Color };
    colorA: { type: string; value: THREE.Color };
  };

  constructor(canvasID, fov = 36) {
    this.fov = fov;
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.canvasID = canvasID;
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 196;

    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();

    this.uniforms = {
      u_time: { type: 'f', value: 1.0 },
      colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
      colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    };

    // specify a canvas which is already created in the HTML file and tagged by an id
    // aliasing enabled
    const canvas = document.getElementById(this.canvasID);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff, 0);
    document.body.appendChild(this.renderer.domElement);

    // ambient light which is for the whole scene
    let ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    ambientLight.castShadow = false;
    this.scene.add(ambientLight);

    // spot light which is illuminating the chart directly
    let spotLight = new THREE.SpotLight(0xffffff, 0.55);
    spotLight.castShadow = true;
    spotLight.position.set(0, 80, 10);
    this.scene.add(spotLight);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

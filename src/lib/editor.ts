import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
export class Editor {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private animateId: number | null = null;
  private element: HTMLElement | null = null;

  constructor(element: HTMLDivElement) {
    this.element = element;

    const { clientWidth, clientHeight } = this.element;

    // Renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(clientWidth, clientHeight);
    this.element.appendChild(this.renderer.domElement);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.GridHelper(5, 10, 0x888888, 0x444444));

    // ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(ambientLight);

    // directional light
    const light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(1, 1, 1);
    this.scene.add(light);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      clientWidth / clientHeight,
      0.1,
      1000,
    );
    this.camera.position.set(5, 2.5, 5);

    // Cube
    const texture = new THREE.TextureLoader().load(
      "/static/textures/pattern.png",
    );
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshLambertMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);

    // orbit control
    const orbit = new OrbitControls(this.camera, this.renderer.domElement);
    orbit.update();

    // cube transform control
    const control = new TransformControls(
      this.camera,
      this.renderer.domElement,
    );
    control.addEventListener("dragging-changed", function (event) {
      orbit.enabled = !event.value;
    });
    control.attach(mesh);
    this.scene.add(control);

    // Bind the animate method to the correct 'this' context
    this.animate = this.animate.bind(this);

    // Start animation
    this.animate();

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  private onWindowResize(): void {
    const { clientWidth, clientHeight } = this.element!;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(clientWidth, clientHeight);
  }

  private render(): void {
    // Rotation logic
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  }

  private animate(): void {
    this.animateId = requestAnimationFrame(this.animate);
    this.render();
  }

  public clear(): void {
    // Cancel animation frame
    if (this.animateId !== null) {
      cancelAnimationFrame(this.animateId);
      this.animateId = null;
    }

    // Remove resize event listener
    window.removeEventListener("resize", this.onWindowResize.bind(this));

    // Dispose of renderer
    this.renderer.dispose();

    // Remove the renderer's canvas element from the DOM
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(
        this.renderer.domElement,
      );
    }
  }
}

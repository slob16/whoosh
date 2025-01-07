<script type="module">
  import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js";
  import { OBJLoader } from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/loaders/OBJLoader.min.js";

  // Setup Scene, Camera, and Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("threejs-container").appendChild(renderer.domElement);

  // Lighting
  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  // Position the camera
  camera.position.z = 5;

  // Load the OBJ Model with Texture
  const objLoader = new OBJLoader();
  const textureLoader = new THREE.TextureLoader();

  const NUM_BALLOONS = 5; // Number of balloons
  const balloons = []; // Array to store balloon meshes

  function loadBalloon() {
    return new Promise((resolve) => {
      objLoader.load("path-to-your-model.obj", (object) => {
        const texture = textureLoader.load("path-to-your-texture.jpg");
        object.traverse((child) => {
          if (child.isMesh) {
            child.material.map = texture;
          }
        });
        resolve(object);
      });
    });
  }

  async function createBalloons() {
    const model = await loadBalloon();

    for (let i = 0; i < NUM_BALLOONS; i++) {
      const balloon = model.clone();
      balloon.position.set(
        Math.random() * 10 - 5, // Random X position
        -5 - Math.random() * 5, // Start below the screen
        Math.random() * 2 - 1  // Random Z position
      );
      balloons.push(balloon);
      scene.add(balloon);
    }
  }

  createBalloons();

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    // Move balloons upwards
    balloons.forEach((balloon) => {
      balloon.position.y += 0.01; // Speed of upward movement
      if (balloon.position.y > 5) {
        balloon.position.y = -5 - Math.random() * 5; // Reset position below the screen
      }
    });

    renderer.render(scene, camera);
  }
  animate();

  // Handle Resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
</script>

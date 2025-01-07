// JavaScript for creating a 3D object with a texture overlay using Three.js
// Ensure to include Three.js library in your HTML

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry and add a texture overlay
const geometry = new THREE.BoxGeometry();
const texture = new THREE.TextureLoader().load('assets/images/test/wtf.png');
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the cube to fit within the .hero structure
cube.position.set(0, 0, -5);

// Responsive adjustments
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Add rotation for dynamic effect
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

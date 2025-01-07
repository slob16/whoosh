// Basic scene setup
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Add a basic light
var light = new THREE.PointLight(0xFFFFFF, 1, 1000);
light.position.set(50, 50, 50);
scene.add(light);

// Load the OBJ model and the texture
var loader = new THREE.OBJLoader();
var textureLoader = new THREE.TextureLoader();

// Replace with your actual file paths
var texture = textureLoader.load('assets/images/test/hab.jpg'); // Path to your JPG texture

loader.load('assets/images/test/balloon.obj', function (obj) {
  obj.traverse(function (child) {
    if (child.isMesh) {
      child.material.map = texture; // Apply texture to the 3D model
    }
  });
  scene.add(obj);
});

// Set camera position
camera.position.z = 5;

// Animation function to render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // Optional: Add rotation or movement to the object
  scene.rotation.y += 0.01; // Rotate the entire scene for effect
}

// Start animation loop
animate();

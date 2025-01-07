// Basic Three.js scene setup
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Add a basic light to the scene
var light = new THREE.PointLight(0xFFFFFF, 1, 1000);
light.position.set(50, 50, 50);
scene.add(light);

// Load the OBJ model and apply texture
var loader = new THREE.OBJLoader();
var textureLoader = new THREE.TextureLoader();

// Path to your texture file (JPG)
var texture = textureLoader.load('assets/images/test/wtf.png'); // Ensure correct path

// Load your OBJ model
loader.load('assets/images/test/model/balloon.obj', function (obj) {
  obj.traverse(function (child) {
    if (child.isMesh) {
      child.material.map = texture; // Apply texture to the 3D model
    }
  });
  scene.add(obj);
});

// Set camera position
camera.position.z = 5;

// Animation function for rendering the scene and rotating the model
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // Optionally add rotation to the scene or model
  scene.rotation.y += 0.01; // Rotate the entire scene for effect
}

// Start the animation loop
animate();

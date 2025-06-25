let role = null;
let scene, camera, renderer;

function selectRole(selectedRole) {
  role = selectedRole;
  document.getElementById('role-select').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  initScene();
  animate();
}

function initScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('game-canvas') });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  const ambient = new THREE.AmbientLight(0x404040);
  scene.add(ambient);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: role === 'host' ? 0xff0000 : 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.z = -5;

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import {initCamera} from './other-js/camera.js'
import {initCube} from './other-js/cube.js'
import {initRender} from './other-js/render.js'
import {initGrid} from './other-js/grid.js'
import {initLight} from './other-js/light.js'
import { moveForward, rotateLeft, rotateRight } from './other-js/movement.js';
import { initGround } from './other-js/ground.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const scene = new THREE.Scene();

const gamegrid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const camera = initCamera();
const sprite = initCube(0.5, 0.5, 0.5, 0, 0);
const renderer = initRender();
const gridHelper = initGrid();
const pointLight = initLight();
const house = initCube(3, 0.01, 3, 3, -3);
const pillar1 = initCube(1, 100, 1, -9, -9);
const pillar2 = initCube(1, 100, 1, -9, 9);
const pillar3 = initCube(1, 100, 1, 9, 9);
const pillar4 = initCube(1, 100, 1, 9, -9);
const ground = initGround();


scene.add(sprite);
scene.add(gridHelper);
scene.add(pointLight);
scene.add(house);
scene.add(pillar1);
scene.add(pillar2);
scene.add(pillar3);
scene.add(pillar4);
scene.add(ground);

// Add a starfield ----------------------------------------------------------------------------
const starsGeometry = new THREE.BufferGeometry();
const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.05 });

const starsVertices = [];
for (let i = 0; i < 5000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starsVertices.push(x, y, z);
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// -----------------------------------------------------------------------------------------


// Initializing important variables
let orientation = "N";
let game_positions = [10, 10];

// Keyboard event listener
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      moveForward(orientation, game_positions, gamegrid, sprite, camera);
      break;
    case 'ArrowDown':
      // sprite.position.z += movementSpeed; // Move down
      // camera.position.z += movementSpeed;
      break;
    case 'ArrowLeft':
      // Rotate the camera or sprite left (counter-clockwise) by 90 degrees
      camera.rotation.y += Math.PI / 2;
      sprite.rotation.y += Math.PI / 2;
      orientation = rotateLeft(orientation, camera);
      break;
    case 'ArrowRight':
      // Rotate the camera or sprite right (clockwise) by 90 degrees
      camera.rotation.y -= Math.PI / 2;
      sprite.rotation.y -= Math.PI / 2;
      orientation = rotateRight(orientation, camera);
        
        break;
      break;
  }
  console.log(`Current Position: x=${sprite.position.x}, y=${sprite.position.y}, z=${sprite.position.z}`);
  console.log(`gamex=${game_positions[0]}, gamey=${game_positions[1]}`);
  console.log(`Orientation=${orientation}`);
});

// Add OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);

function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();

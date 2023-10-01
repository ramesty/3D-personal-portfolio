import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import {initCamera} from './other-js/camera.js'
import {initCube} from './other-js/cube.js'
import {initRender} from './other-js/render.js'
import {initGrid} from './other-js/grid.js'
import {initLight} from './other-js/light.js'
import { moveForward, rotateLeft, rotateRight } from './other-js/movement.js';
import { initGround } from './other-js/ground.js';

const scene = new THREE.Scene();

const gamegrid = [
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 0
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const camera = initCamera();
const sprite = initCube(0.5, 0.5, 0.5, 0, 0);
const renderer = initRender();
const gridHelper = initGrid();
const pointLight = initLight();
const house = initCube(3, 3, 3, 3, -3)
const ground = initGround();


scene.add(sprite);
scene.add(gridHelper);
scene.add(pointLight);
scene.add(house);
scene.add(ground);

// Sand texture
// const sandTexture = new THREE.TextureLoader().load('./public/sand.jpg');
// sandTexture.wrapS = sandTexture.wrapT = THREE.RepeatWrapping;
// sandTexture.repeat.set(10, 10); // Adjust the number of times the texture repeats
// const sandMaterial = new THREE.MeshPhongMaterial({ map: sandTexture });
// ground.material = sandMaterial;
// scene.add(ground);

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

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();

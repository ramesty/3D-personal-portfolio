import * as THREE from 'three';
import {initCamera} from './other-js/camera.js'
import {initCube} from './other-js/cube.js'
import {initRender} from './other-js/render.js'
import {initGrid} from './other-js/grid.js'
import {initLight} from './other-js/light.js'
import { rotateRight } from './other-js/rotation.js';

const scene = new THREE.Scene();

const camera = initCamera();
const sprite = initCube(0.5, 0.5, 0.5, 0, 0);
const renderer = initRender();
const gridHelper = initGrid();
const pointLight = initLight();

const house = initCube(3, 3, 3, 5.6, 3.5)
const house1 = initCube(5, 3, 3, -4.6, -2.3)

scene.add(sprite);
scene.add(gridHelper);
scene.add(pointLight);
scene.add(house);
scene.add(house1);


let movementSpeed = 0.5;
let orientation = "N";

// Keyboard event listener
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      sprite.position.z -= movementSpeed; // Move up
      camera.position.z -= movementSpeed;
      break;
    case 'ArrowDown':
      sprite.position.z += movementSpeed; // Move down
      camera.position.z += movementSpeed;
      break;
      case 'ArrowLeft':
        // Rotate the camera or sprite left (counter-clockwise) by 90 degrees
        camera.rotation.y -= Math.PI / 2;
        sprite.rotation.y -= Math.PI / 2;
        break;
      case 'ArrowRight':
        // Rotate the camera or sprite right (clockwise) by 90 degrees
        camera.rotation.y -= Math.PI / 2;
        sprite.rotation.y -= Math.PI / 2;
        orientation = rotateRight(orientation, camera);
          
        break;
      break;
  }
});

function animate() {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

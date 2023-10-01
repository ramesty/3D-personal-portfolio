import * as THREE from 'three';

// Function to initialize the camera
export function initGround() {

    const groundGeometry = new THREE.PlaneGeometry(20, 20); // Adjust sizes as needed
    const groundMaterial = new THREE.MeshPhongMaterial(); // You can use a texture or custom material
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.position.set(0, 0, 0); // Adjust the value as needed
    ground.rotation.x = -Math.PI / 2;
    ground.renderOrder = 1;
    return ground;
  }

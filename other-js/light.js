import * as THREE from 'three';

// Function to initialize the camera
export function initLight() {

    const pointLight = new THREE.PointLight(0xffffff, 20); // White light with intensity 2
    pointLight.position.set(5, 5, 10); // Position of the light

    return pointLight;
  }
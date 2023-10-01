import * as THREE from 'three';

// Function to initialize the camera
export function initLight() {

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 10); // White light with intensity 2
    hemisphereLight.position.set(100, 100, 0); // Position of the light

    return hemisphereLight;
  }
import * as THREE from 'three';

// Function to initialize the camera
export function initCamera() {

    // Set up camera
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const cameraDistance = 5; // Initial distance between camera and cube
    const cameraHeight = 2;   // Height of the camera relative to the cube
    camera.position.set(0, cameraHeight, cameraDistance);
    
    return camera;
  }
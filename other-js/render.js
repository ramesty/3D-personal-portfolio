import * as THREE from 'three';

// Function to initialize the camera
export function initRender() {

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true; // Enable shadow mapping
    document.body.appendChild( renderer.domElement );

    return renderer;
  }
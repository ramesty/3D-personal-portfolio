import * as THREE from 'three';

// Function to initialize the camera
export function initRender() {

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    return renderer;
  }
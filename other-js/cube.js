import * as THREE from 'three';

// Function to initialize the camera
export function initCube(xlen, ylen, zlen, xpos, zpos) {

    // Create cube
    const geometry = new THREE.BoxGeometry( xlen, ylen, zlen );
    const phongMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
    const cube = new THREE.Mesh( geometry, phongMaterial );
    cube.position.set(xpos, ylen/2, zpos)
    
    return cube;
  }
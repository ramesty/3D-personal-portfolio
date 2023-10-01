import * as THREE from 'three';

// Function to initialize the camera
export function initGrid() {

    // Create and add a grid helper
    const gridHelper = new THREE.GridHelper(50, 50);  // Size and divisions can be adjusted
    gridHelper.position.y = 0;                        // Position the grid at the desired height
    const gridMaterial = new THREE.LineBasicMaterial({ color: 0x808080, opacity: 0.5 });
    gridHelper.material = gridMaterial;

    return gridHelper;
  }
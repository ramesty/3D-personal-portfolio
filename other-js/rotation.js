
export function rotateRight(orientation, camera){

    if(orientation == 'N'){
        camera.position.x -= 5;
        camera.position.z -= 5;
        orientation = 'W';
      }
      else if (orientation == 'W'){
        camera.position.x += 5;
        camera.position.z -= 5;
        orientation = 'S';
      }
      else if (orientation == 'S'){
        camera.position.x += 5;
        camera.position.z += 5;
        orientation = 'E';
      }
      else if (orientation == 'E'){
          camera.position.x -= 5;
          camera.position.z += 5;
          orientation = 'N';
      }
      
    return orientation;
}

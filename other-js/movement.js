
export function rotateRight(orientation, camera){

    if(orientation == 'N'){
        camera.position.x -= 5;
        camera.position.z -= 5;
        orientation = 'E';
      }
      else if (orientation == 'E'){
        camera.position.x += 5;
        camera.position.z -= 5;
        orientation = 'S';
      }
      else if (orientation == 'S'){
        camera.position.x += 5;
        camera.position.z += 5;
        orientation = 'W';
      }
      else if (orientation == 'W'){
          camera.position.x -= 5;
          camera.position.z += 5;
          orientation = 'N';
      }
      
    return orientation;
}

export function rotateLeft(orientation, camera){

  if(orientation == 'N'){
      camera.position.x += 5;
      camera.position.z -= 5;
      orientation = 'W';
    }
    else if (orientation == 'W'){
      camera.position.x -= 5;
      camera.position.z -= 5;
      orientation = 'S';
    }
    else if (orientation == 'S'){
      camera.position.x -= 5;
      camera.position.z += 5;
      orientation = 'E';
    }
    else if (orientation == 'E'){
        camera.position.x += 5;
        camera.position.z += 5;
        orientation = 'N';
    }
    
  return orientation;
}

export function moveForward(orientation, game_positions, gamegrid, sprite, camera){

  let x = game_positions[0];
  let y = game_positions[1];

  if(orientation == 'N'){

    if(gamegrid[x - 1][y] == 1) return;
    game_positions[0] -= 1;

    sprite.position.z -= 1; // Move north
    camera.position.z -= 1;
  }
  else if (orientation == 'W'){

    if(gamegrid[x][y - 1] == 1) return;
    game_positions[1] -= 1;

    sprite.position.x -= 1; // Move west
    camera.position.x -= 1;
  }
  else if (orientation == 'S'){

    if(gamegrid[x + 1][y] == 1) return;
    game_positions[0] += 1;

    sprite.position.z += 1; // Move south
    camera.position.z += 1;
  }
  else if (orientation == 'E'){

    if(gamegrid[x][y + 1] == 1) return;
    game_positions[1] += 1;

    sprite.position.x += 1; // Move east
    camera.position.x += 1;
  }
    
  return;
}


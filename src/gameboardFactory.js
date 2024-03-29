import shipFactory from "./shipFactory.js";

function gameboardFactory(inputSize) {
  //board cell states: -1-miss 0-default 1-hit 2-isSunk
  let board = [];
  let shipsPlaced = [];
  const gridSize = inputSize || 10;
  for (let i = 0; i < gridSize; i++) {
    //initialize board in the default state of 0
    board.push([]);
    for (let j = 0; j < gridSize; j++) {
      board[i].push({
        state: 0,
      });
    }
  }
  const receiveDamage = (x, y) => {
    let cell = board[x][y];
    let cellBefore = Object.assign({}, cell);
    console.log(cellBefore.state); //DELETE
    cellHit(cell);
    update(); //=====================================================================
    console.log(cell.state); //DELETE
    console.log(cellBefore.state != cell.state); //DELETE
    return cellBefore.state != cell.state;
  };
  const update = () => {
    board.forEach((column) => column.forEach((cell) => updateCell(cell)));
    return board;
  };
  const placeShip = (x, y, axis, length) => {
    let coll = checkCollision(x, y, axis, length);
    let ship;
    if (!coll) {
      ship = shipFactory(length);
      axis = axis == "x"; //if axis is X, it will be neutral to i, otherwise it will nullify it. It's opposite will do the opposite.
      for (let i = 0; i < length; i++) {
        board[x + i * axis][y + i * !axis].hit = () => {
          return ship.hit(i);
        };
        board[x + i * axis][y + i * !axis].isSunk = ship.isSunk;
      }
      shipsPlaced.push(ship);
    }
    return !coll;
  };
  const checkCollision = (x, y, axis, length) => {
    //returns true if there is a collision detected, false otherwise
    let collision = false;
    if (axis == "x") {
      collision = x + length > board.length ? true : false; //check if out of bounds
      for (let i = 0; i < length && !collision; i++) {
        //if there is a hit function there is a ship, so it would collide, also check if out of bounds
        if (board[x + i][y].hit) {
          collision = true;
        }
      }
    } else {
      collision = y + length > board[x].length ? true : false; //check if out of bounds
      for (let i = 0; i < length && !collision; i++) {
        //if there is a hit function there is a ship, so it would collide
        if (board[x][y + i].hit) {
          collision = true;
        }
      }
    }
    return collision;
  };
  const endOfGame = () => {
    return shipsPlaced.every((placed) => placed.isSunk());
  };

  return {
    receiveDamage,
    update,
    placeShip,
    endOfGame,
    checkCollision,
  };

  /* {
        board[][]
        receiveDamage()
        updateBoard();
        shipsPlaced[]
            end of game?
            placeship
                overlap?
    } */
}

function updateCell(cell) {
  //if the state is 1, the ship might have been sunk, otherwise it cannot change during the update
  cell.state = cell.state == 1 ? cell.hit() + cell.isSunk() : cell.state;
  return cell;
}
function cellHit(cell) {
  if (cell.hit) {
    console.log(`pre calc:${cell.state}`);
    //if there is a hit function there is a ship
    cell.state = cell.hit() /* + cell.isSunk() */;
  } else {
    //otherwise it's a miss
    cell.state = -1;
  }
  return cell;
}

export { updateCell, cellHit };
export default gameboardFactory;

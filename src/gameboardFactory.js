const { shipFactory } = require("./shipFactory");

function gameboardFactory(){
    //board cell states: -1-miss 0-default 1-hit 2-isSunk
    let board = [];
    let shipsPlaced = [];
    const gridSize = 10;
    for(let i=0; i<gridSize; i++){
        //initialize board in the default state of 0
        board.push([]);
        for(let j=0; j<gridSize; j++){
            board[i].push({
                state: 0;
            });
        }
    }
    const receiveDamage = (x, y) => {
        if(board[x][y].hit){
            //if there is a hit function there is a ship
            board[x][y].state = board[x][y].hit();
        }else{
            //otherwise it's a miss
            board[x][y].state = -1;
        }
        update(); //=====================================================================
    }
    const update = ()=>{
        board.forEach(column => column.forEach(cell => {
            //if the state is 1, the ship might have been sunk, otherwise it cannot change during the update
            cell.state = cell.state == 1 ? cell.hit()+cell.isSunk() : cell.state;
            return board;
        }))
    }
    const placeShip = (x, y, axis, length) => {
        let coll = checkCollision(x, y, axis, length);
        let ship;
        if(!coll){
            ship = shipFactory(length);
            axis = (axis == "x"); //if axis is X, it will be neutral to i, otherwise it will nullify it. It's opposite will do the opposite.
            for(let i=0; i<length; i++){
                board[x+i*axis][y+i*!axis].hit = () => {ship.hit(i)};
                board[x+i*axis][y+i*!axis].isSunk = ship.isSunk;
            }
            shipsPlaced.push(ship);
        }
    }
    const checkCollision = (x, y, axis, length) => {
        //returns true if there is a collision detected, false otherwise
        let collision = false;
        if(axis == "x"){
            for(let i=0; i<length; i++){
                //if there is a hit function there is a ship, so it would collide
                if(board[x+i][y].hit){collision = true}
            }
        } else{
            for(let i=0; i<length; i++){
                //if there is a hit function there is a ship, so it would collide
                if(board[x][y+1].hit){collision = true}
            }
        }
        return collision;
    }
    const endOfGame = () => {
        return shipsPlaced.every(placed => placed.isSunk())
    }


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
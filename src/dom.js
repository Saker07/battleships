import gameboardFactory from "./gameboardFactory";

function showHidden(anch, gb){
    //makes gameboard GB on screen by replacing content of ANCH, hidden means it is the "enemy's" board, so you don't see the ships
    let board = gb.update();
    let table = document.createElement("div");
    board.forEach(column => column.forEach(cell => {
        let hiddenC = document.createElement("div");
        addClassToCell(cell, hiddenC, "hiddenCell");
        table.appendChild(hiddenC);
    }))
    anch.innerHTML = table.innerHTML;
}

function showWhole(anch, gb){
    //makes gameboard GB on screen by replacing content of ANCH, whole means it is the your board, so you see the ships
    let board = gb.update();
    let table = document.createElement("div");
    board.forEach(column => column.forEach(cell => {
        let shownC = document.createElement("div");
        addClassToCell(cell, shownC, "shownCell");
        if(cell.hit){
            shownC.textContent = "⬤";
            shownC.classList.add("placedShown")
        }
        table.appendChild(shownC);
    }))
    anch.innerHTML = table.innerHTML;
}

function addClassToCell(cell, elem, showType){    //add the right class to the cell based on its state
    let stateClass;
    elem.classList.add(showType);
    if(cell.state == 0){stateClass = "notHit"}
    else if(cell.state == -1){stateClass = "miss"}
    else if(cell.state == 1){stateClass = "hit"}
    else if(cell.state == 2){stateClass = "sunk"}
    elem.classList.add(stateClass);
}

/* function addEventHitCell(elem, x, y){ //add the handler for the hit to the element
    elem.addEventListener("click", e => {
        if (nextP.gb.receiveDamage(x, y)){
            //if mode is AI then call AI, otherwise call game with opposites.
            if(window.AIMode == true){AITurn()}
            else{game(nextP, currP)} //not complete since there is no way to manage local multiplayer yet.
        }
    })
} */
const timer = (milliseconds)=>{
    return new Promise(
        (toCall)=>{setTimeout(toCall, milliseconds)});
}
function AI(){
    const selectRandomCell= function (board){
        //returns a random x,y pair in a square board.
        let max = board.length;
        let x, y;
        x = max * Math.random();
        y = max * Math.random();
        x = Math.floor(x);
        y = Math.floor(y);
        return {x, y};
    }

    const hitRandom = function (user, playerAI){
        let board = playerAI.gb.update();
        let x, y;
        let flag = false;
        while(flag==false){
            ({x, y} = selectRandomCell(board));
            flag = user.gb.receiveDamage(x, y); //hit returns true if it hit something, false if it doesn't
        }
    }

    const placeRandom = function (AIgb, shipLength){
        let flag = false;
        while(flag == false){
            let {x, y} = selectRandomCell(AIgb.update());
            let axis = Math.random() > 0.5 ? "x" : "y";
            flag = !!(
                AIgb.placeShip(x, y, axis, shipLength)
            );
            console.log("PROBLEM=====")
        }
    }
    const placeAllRandomShips = function (AIgb){
        window.allShips.forEach(item => {
            placeRandom(AIgb, item.length)
        })
    }

    

    const AITurn = function (user, playerAI){
        hitRandom(user, playerAI);
        timer(500).then(()=>{
            if(alertOnGameEnd(user, playerAI)){
                return;
            } else {
                game(user, playerAI); //again the AI is always p2 and so the user is always p1
            }
        });
    }
    return {hitRandom, AITurn, placeAllRandomShips}
}

function alertOnGameEnd(loser, winner){
    if (loser.gb.endOfGame()) {
        timer(500).then(()=>{
            alert(`
            ${winner.name} won!
            The game will now be reset.`)
            resetGame();
        });
        return true;
    } else {
        return false
    }
}


function game(currP, nextP){
    //starts the game, the player board should already be ready with all ships placed when this is called.
    const {AITurn} = AI();
    showWhole(currP.anch, currP.gb);
    showHidden(nextP.anch, nextP.gb);
    nextP.gb.update().forEach((column, x) => column.forEach((cell, y) => { //for every cell in the board
        //add event to trigger the hit
        let elem = nextP.anch.childNodes[x*10+y];
        addEventHitCell(elem, x, y);
    }))




    function addEventHitCell(elem, x, y){ //add the handler for the hit to the element
        elem.addEventListener("click", e => {
            if (nextP.gb.receiveDamage(x, y)){
                //Call showHiden again just to get rid of event listeners so that the user can't hit multiple times.
                showHidden(nextP.anch, nextP.gb);
                if(alertOnGameEnd(nextP, currP)){

                } else if(window.AIMode == true){
                    //if mode is AI then call AI, otherwise call game with opposites.
                    AITurn(currP, nextP);
                } else {
                    //not complete since multiplayer is not implemented yet.
                    game(nextP, currP);
                }
            }
        })
    }
};

function resetGame(){
    window.p1.gb = gameboardFactory();
    window.p2.gb = gameboardFactory();
    shipSetter(p1);
}


function shipSetter(player){
    const allShips = window.allShips || [{length: 3}, {length: 3}, {length: 3}];
    let ships = Array.from(allShips);
    let axis = "x";

    let frame = document.createElement("div");
    frame.classList.add("frame");              //
    document.body.appendChild(frame);

    let divv = document.createElement("div");
    divv.classList.add("placeShipsDiv");                //
    frame.appendChild(divv);

    let title = document.createElement("h5");
    title.textContent = "Place your ships!";
    divv.appendChild(title);

    let axisText = document.createElement("p");
    axisText.textContent = "Current axis: ";
    divv.appendChild(axisText);
    let axisBtn = document.createElement("button");
    console.log(axis);
    axisBtn.addEventListener("click", e => {
        console.log(axis);
        axis = axis == "x" ? "y" : "x";
        console.log(axis);
        axisBtn.textContent = `${axis.toUpperCase()}`
        showWhole(grid, player.gb);
        addEventPlaceShipToCells(grid, player, ships, axis);
    });
    axisBtn.textContent = `${axis.toUpperCase()}`;
    axisText.appendChild(axisBtn);

    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", e => {
        p1.gb = gameboardFactory();
        ships = Array.from(allShips);
        console.log(ships.length)
        showWhole(grid, player.gb);
        addEventPlaceShipToCells(grid, player, ships, axis);
    })
    divv.appendChild(resetBtn);

    let grid = document.createElement("div");
    grid.classList.add("shipPlaceGrid");
    showWhole(grid, player.gb);
    addEventPlaceShipToCells(grid, player, ships, axis);
    divv.appendChild(grid);

    let shipComment = document.createElement("p");
    shipComment.classList.add("shipsPlaced");
    shipComment.textContent = `${ships.length}x ships left to place!`;
    divv.appendChild(shipComment);
}


function updateShipComment(shipComment, inp){
    shipComment.textContent = `${inp}x ships left to place!`;
}
function addEventPlaceShipToCells(anch, player, ships, axis){
    //take anch, player, shipsArray and the current axis, makes every cell in the anchored grid have the event to place a ship and get that ship out of the array, update the comment, if ships are finished remove the shipSetter div.
    player.gb.update().forEach((column, x) => column.forEach((cell, y) => {
        let currIndex = x*10+y;
        let elem = anch.childNodes[currIndex];
        elem.addEventListener("click", e => {
            let placed = player.gb.placeShip(x, y, axis, ships[0].length);
            if(placed){
                ships.shift();
            }
            updateShipComment(document.querySelector(".shipsPlaced"), ships.length);
            if(ships.length == 0){
                removeShipSetter();
            }
            //once you add the ship you have to refresh the grid and add the eventListeners again
            showWhole(anch, player.gb);
            addEventPlaceShipToCells(anch, player, ships, axis);
        });
        elem.addEventListener("mouseover", e => {
            //check collision on cell corrisponding to this div, if no collision detected, show hover!
            let coll = player.gb.checkCollision(x, y, axis, ships[0].length);
            if(!coll){
                let i, j;
                for(i = 0, j = 0; i<ships[0].length; i++){
                    anch.childNodes[currIndex+j].style.backgroundColor = "pink";
                    j = axis == "x" ? j+10 : i+1;
                }
            }
        });
        elem.addEventListener("mouseout", e => {
            //check collision on cell corrisponding to this div, if no collision detected, show hover!
            let i, j;
            if(elem.textContent != "⬤")
                for(i = 0, j = 0; i<ships[0].length; i++){
                    anch.childNodes[currIndex+j].style.backgroundColor = "";
                    j = axis == "x" ? j+10 : i+1;
                }
        });
    }))
}

function removeShipSetter(){
    let elem = document.querySelector(".frame");
    if(elem && elem!=null){
        elem.remove();
    }
    if(window.AIMode == true){
        //if the mode is AI, populate the p2 board (p2 is always the AI)
        AI().placeAllRandomShips(p2.gb);
    }
    game(p1, p2);
}


export {showWhole, showHidden, game, shipSetter, resetGame}
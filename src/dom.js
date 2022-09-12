function showHidden(anch, gb){
    //makes gameboard GB on screen by replacing content of ANCH, hidden means it is the "enemy's" board, so you don't see the ships
    let board = gb.update();
    let table = document.createElement("div");
    board.forEach(column => column.forEach(cell => {
        let hiddenC = document.createElement("div");
        addClassToCell(cell, hiddenC);
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
        addClassToCell(cell, shownC);
        if(cell.hit){shownC.textContent = "*"}
        table.appendChild(shownC);
    }))
    anch.innerHTML = table.innerHTML;
}

function addClassToCell(cell, elem){
    let stateClass;
    elem.classList.add("hiddenCell");
    if(cell.state == 0){stateClass = "notHit"}
    else if(cell.state == -1){stateClass = "miss"}
    else if(cell.state == 1){stateClass = "hit"}
    else if(cell.state == 2){stateClass = "sunk"}
    elem.classList.add(stateClass);
}

function addEventHitCell(elem, cell){
    elem.addEventListener("click", e => {
        if (cell.hit()){
            //if mode is AI then call AI, otherwise call game with opposites.
            if(AIMode == true){AITurn()}
            else{game(nextP, currP)} //not complete since there is no way to manage local multiplayer yet.
        }
    })
}



function game(currP, nextP){
    /* 
        showWhole curr player
        show hidden next player
        add event to next player
            receive damage, if true and AImode=true, call AI, otherwhise, call game(inverso)
             */
        showWhole(currP.anchm, currP.gb);
        showHidden(nextP.anch, nextP.gb);
        nextP.gb.update().forEach(column => column.forEach())
        
    }

export {showWhole, showHidden}
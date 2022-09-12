/* import shipFactory from "./shipFactory.js"; */
import gameboardFactory from "./gameboardFactory.js"
import "./style.css"
import * as domStuff from "./dom.js"




/**/
let p1 = {
    gb: gameboardFactory(),
    anch: document.querySelector(".gameboardTest.playerOne")
}
let p2 = {
    gb: gameboardFactory();
    anch: document.querySelector(".gameboardTest.playerTwo")
}
p1.gb.placeShip(1, 1, "x", 4);
p1.gb.placeShip(9,9, "y", 1);
console.table(p1.gb.update().map(column => column.map(item=>{
    return item.hit;
})));

domStuff.showWhole(p1.anch, p1.gb);
/**/
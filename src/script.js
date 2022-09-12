/* import shipFactory from "./shipFactory.js"; */
import gameboardFactory from "./gameboardFactory.js"
import "./style.css"
import * as domStuff from "./dom.js"




/**/
let p1 = gameboardFactory();
let p2 = gameboardFactory();
p1.placeShip(1, 1, "x", 4);
p1.placeShip(9,9, "y", 1);
console.table(p1.update().map(column => column.map(item=>{
    return item.hit;
})));
let p1Anch = document.querySelector(".gameboardTest.playerOne")
let p2Anch = document.querySelector(".gameboardTest.playerTwo")

domStuff.showWhole(p1Anch, p1);
/**/
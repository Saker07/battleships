/* import shipFactory from "./shipFactory.js"; */
import gameboardFactory from "./gameboardFactory.js"
import "./style.css"




/**/
let bb = gameboardFactory();
bb.placeShip(1, 1, "x", 4);
console.table(bb.update().map(column => column.map(item=>{
    return item.hit;
})));
bb.placeShip(9,9, "y", 1);
console.table(bb.update().map(column => column.map(item=>{
    return item.hit;
})));
bb.update();
/**/
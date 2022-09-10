import shipFactory from "./shipFactory.js";
import gameboardFactory from "./gameboardFactory.js"
import "./style.css"




/**/
let bb = gameboardFactory();
bb.placeShip(3, 0, "x", 4);
console.table(bb.update().map(column => column.map(item=>{
    return item.hit;
})));
bb.placeShip(8,1, "x", 3);
console.table(bb.update().map(column => column.map(item=>{
    return item.hit;
})));

/**/
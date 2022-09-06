import shipFactory from "./shipFactory.js";
import gameboardFactory from "./gameboardFactory.js"
import "./style.css"




/**/
let bb = gameboardFactory();
bb.placeShip(3, 0, "x", 4);
console.table(bb.update());


/**/
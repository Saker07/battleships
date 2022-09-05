import shipFactory from "./shipFactory.js";
import gameboardFactory from "./gameboardFactory.js"




/**/
let bb = gameboardFactory();
bb.placeShip(3, 0, "x", 4);
console.table(bb.update());


/**/
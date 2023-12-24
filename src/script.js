/* import shipFactory from "./shipFactory.js"; */
import gameboardFactory from "./gameboardFactory.js";
import "./style.css";
import * as domStuff from "./dom.js";

window.p1 = {
  name: "Player 1",
  gb: gameboardFactory(),
  anch: document.querySelector(".gameboardTest.playerOne"),
};
window.p2 = {
  name: "Player 2",
  gb: gameboardFactory(),
  anch: document.querySelector(".gameboardTest.playerTwo"),
};
window.allShips = [
  { length: 5 },
  { length: 4 },
  { length: 3 },
  { length: 3 },
  { length: 2 },
  { length: 1 },
];
window.AIMode = true; //when multiplayer implemented this needs to be changed to false

const mainResetBtn = document.querySelector(".resetBtn.mainBtn");
mainResetBtn.addEventListener("click", domStuff.resetGame);

/**/
let p1 = window.p1;
let p2 = window.p2;
p1.gb.placeShip(1, 1, "x", 4);
p1.gb.placeShip(9, 9, "y", 1);
console.table(
  p1.gb.update().map((column) =>
    column.map((item) => {
      return item.hit;
    })
  )
);
/* domStuff.game(p1, p2); */ //not needed as i can start the game everytime the setter is done, instead of on load

/* domStuff.shipSetter(p1); */
domStuff.resetGame();

/* domStuff.showWhole(p1.anch, p1.gb); */
/**/

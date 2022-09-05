/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
                state: 0
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
        }))
        return board;
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

    return {
        receiveDamage,
        update,
        placeShip,
        endOfGame
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((module) => {

/* ship {
    length: ;
    hitpoints: [0, 0, 0];
    hit: function hit;
    isSunk: function return sunk true or false;
} */



function shipFactory(length){
    let hitpoints = [];
    for(i=0; i<length; i++){
        hitpoints.push(0);
    }
    const hit = (n) => {
        //registers the hit in hitpoints and returns 1.
        hitpoints[n] = 1;
        return 1;
    }
    const isSunk = () => {
        //returns true if the ship is sunk
        return hitpoints.every(point => point == 1);
    }
    return {
        length,
        hitpoints,
        hit,
        isSunk
    }
}

module.exports = {
shipFactory
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");






/**/
let bb = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
bb.placeShip(3, 0, "x", 4);
console.table(bb.update());


/**/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QixVQUFVO0FBQ25DLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQztBQUNBLHNDQUFzQztBQUN0QztBQUNBLFVBQVU7QUFDVix5QkFBeUIsVUFBVTtBQUNuQztBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQSxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7QUNsRi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7O0FBSUY7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNTOzs7OztBQUtwRDtBQUNBLFNBQVMsZ0VBQWdCO0FBQ3pCO0FBQ0E7OztBQUdBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoKXtcbiAgICAvL2JvYXJkIGNlbGwgc3RhdGVzOiAtMS1taXNzIDAtZGVmYXVsdCAxLWhpdCAyLWlzU3Vua1xuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGxldCBzaGlwc1BsYWNlZCA9IFtdO1xuICAgIGNvbnN0IGdyaWRTaXplID0gMTA7XG4gICAgZm9yKGxldCBpPTA7IGk8Z3JpZFNpemU7IGkrKyl7XG4gICAgICAgIC8vaW5pdGlhbGl6ZSBib2FyZCBpbiB0aGUgZGVmYXVsdCBzdGF0ZSBvZiAwXG4gICAgICAgIGJvYXJkLnB1c2goW10pO1xuICAgICAgICBmb3IobGV0IGo9MDsgajxncmlkU2l6ZTsgaisrKXtcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goe1xuICAgICAgICAgICAgICAgIHN0YXRlOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZWNlaXZlRGFtYWdlID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYoYm9hcmRbeF1beV0uaGl0KXtcbiAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBoaXQgZnVuY3Rpb24gdGhlcmUgaXMgYSBzaGlwXG4gICAgICAgICAgICBib2FyZFt4XVt5XS5zdGF0ZSA9IGJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vb3RoZXJ3aXNlIGl0J3MgYSBtaXNzXG4gICAgICAgICAgICBib2FyZFt4XVt5XS5zdGF0ZSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZSgpOyAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIH1cbiAgICBjb25zdCB1cGRhdGUgPSAoKT0+e1xuICAgICAgICBib2FyZC5mb3JFYWNoKGNvbHVtbiA9PiBjb2x1bW4uZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIC8vaWYgdGhlIHN0YXRlIGlzIDEsIHRoZSBzaGlwIG1pZ2h0IGhhdmUgYmVlbiBzdW5rLCBvdGhlcndpc2UgaXQgY2Fubm90IGNoYW5nZSBkdXJpbmcgdGhlIHVwZGF0ZVxuICAgICAgICAgICAgY2VsbC5zdGF0ZSA9IGNlbGwuc3RhdGUgPT0gMSA/IGNlbGwuaGl0KCkrY2VsbC5pc1N1bmsoKSA6IGNlbGwuc3RhdGU7XG4gICAgICAgIH0pKVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBheGlzLCBsZW5ndGgpID0+IHtcbiAgICAgICAgbGV0IGNvbGwgPSBjaGVja0NvbGxpc2lvbih4LCB5LCBheGlzLCBsZW5ndGgpO1xuICAgICAgICBsZXQgc2hpcDtcbiAgICAgICAgaWYoIWNvbGwpe1xuICAgICAgICAgICAgc2hpcCA9IHNoaXBGYWN0b3J5KGxlbmd0aCk7XG4gICAgICAgICAgICBheGlzID0gKGF4aXMgPT0gXCJ4XCIpOyAvL2lmIGF4aXMgaXMgWCwgaXQgd2lsbCBiZSBuZXV0cmFsIHRvIGksIG90aGVyd2lzZSBpdCB3aWxsIG51bGxpZnkgaXQuIEl0J3Mgb3Bwb3NpdGUgd2lsbCBkbyB0aGUgb3Bwb3NpdGUuXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgYm9hcmRbeCtpKmF4aXNdW3kraSohYXhpc10uaGl0ID0gKCkgPT4ge3NoaXAuaGl0KGkpfTtcbiAgICAgICAgICAgICAgICBib2FyZFt4K2kqYXhpc11beStpKiFheGlzXS5pc1N1bmsgPSBzaGlwLmlzU3VuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBzUGxhY2VkLnB1c2goc2hpcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2hlY2tDb2xsaXNpb24gPSAoeCwgeSwgYXhpcywgbGVuZ3RoKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGEgY29sbGlzaW9uIGRldGVjdGVkLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBpZihheGlzID09IFwieFwiKXtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgaGl0IGZ1bmN0aW9uIHRoZXJlIGlzIGEgc2hpcCwgc28gaXQgd291bGQgY29sbGlkZVxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3graV1beV0uaGl0KXtjb2xsaXNpb24gPSB0cnVlfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIGhpdCBmdW5jdGlvbiB0aGVyZSBpcyBhIHNoaXAsIHNvIGl0IHdvdWxkIGNvbGxpZGVcbiAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5KzFdLmhpdCl7Y29sbGlzaW9uID0gdHJ1ZX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cbiAgICBjb25zdCBlbmRPZkdhbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwc1BsYWNlZC5ldmVyeShwbGFjZWQgPT4gcGxhY2VkLmlzU3VuaygpKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlY2VpdmVEYW1hZ2UsXG4gICAgICAgIHVwZGF0ZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBlbmRPZkdhbWVcbiAgICB9XG5cbiAgICAvKiB7XG4gICAgICAgIGJvYXJkW11bXVxuICAgICAgICByZWNlaXZlRGFtYWdlKClcbiAgICAgICAgdXBkYXRlQm9hcmQoKTtcbiAgICAgICAgc2hpcHNQbGFjZWRbXVxuICAgICAgICAgICAgZW5kIG9mIGdhbWU/XG4gICAgICAgICAgICBwbGFjZXNoaXBcbiAgICAgICAgICAgICAgICBvdmVybGFwP1xuICAgIH0gKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeTsiLCIvKiBzaGlwIHtcbiAgICBsZW5ndGg6IDtcbiAgICBoaXRwb2ludHM6IFswLCAwLCAwXTtcbiAgICBoaXQ6IGZ1bmN0aW9uIGhpdDtcbiAgICBpc1N1bms6IGZ1bmN0aW9uIHJldHVybiBzdW5rIHRydWUgb3IgZmFsc2U7XG59ICovXG5cblxuXG5mdW5jdGlvbiBzaGlwRmFjdG9yeShsZW5ndGgpe1xuICAgIGxldCBoaXRwb2ludHMgPSBbXTtcbiAgICBmb3IoaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaGl0cG9pbnRzLnB1c2goMCk7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9IChuKSA9PiB7XG4gICAgICAgIC8vcmVnaXN0ZXJzIHRoZSBoaXQgaW4gaGl0cG9pbnRzIGFuZCByZXR1cm5zIDEuXG4gICAgICAgIGhpdHBvaW50c1tuXSA9IDE7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSBzaGlwIGlzIHN1bmtcbiAgICAgICAgcmV0dXJuIGhpdHBvaW50cy5ldmVyeShwb2ludCA9PiBwb2ludCA9PSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRwb2ludHMsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbnNoaXBGYWN0b3J5XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzaGlwRmFjdG9yeSBmcm9tIFwiLi9zaGlwRmFjdG9yeS5qc1wiO1xuaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeS5qc1wiXG5cblxuXG5cbi8qKi9cbmxldCBiYiA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbmJiLnBsYWNlU2hpcCgzLCAwLCBcInhcIiwgNCk7XG5jb25zb2xlLnRhYmxlKGJiLnVwZGF0ZSgpKTtcblxuXG4vKiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
(self["webpackChunkbattleships"] = self["webpackChunkbattleships"] || []).push([["main"],{

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
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
            hitpoints[n] = 1;
            return hitpoints;
        }
        const isSunk = () => {
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogc2hpcCB7XG4gICAgbGVuZ3RoOiA7XG4gICAgaGl0cG9pbnRzOiBbMCwgMCwgMF07XG4gICAgaGl0OiBmdW5jdGlvbiBoaXQ7XG4gICAgaXNTdW5rOiBmdW5jdGlvbiByZXR1cm4gc3VuayB0cnVlIG9yIGZhbHNlO1xufSAqL1xuXG5mdW5jdGlvbiBzaGlwRmFjdG9yeShsZW5ndGgpe1xuICAgICAgICBsZXQgaGl0cG9pbnRzID0gW107XG4gICAgICAgIGZvcihpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaGl0cG9pbnRzLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGl0ID0gKG4pID0+IHtcbiAgICAgICAgICAgIGhpdHBvaW50c1tuXSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gaGl0cG9pbnRzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoaXRwb2ludHMuZXZlcnkocG9pbnQgPT4gcG9pbnQgPT0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIGhpdHBvaW50cyxcbiAgICAgICAgICAgIGhpdCxcbiAgICAgICAgICAgIGlzU3Vua1xuICAgICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNoaXBGYWN0b3J5XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
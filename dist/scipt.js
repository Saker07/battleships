/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/*up until now its just mock elements */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  flex-direction: column;\n}\n\n.title{\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\nh1 {\n  margin-top: 1em;\n  font-size: 3rem;\n  font-weight: bolder;\n}\n\n.gameContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.gameHeader {\n  width: 100%;\n}\nh3 {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2rem;\n}\n\n.gameboardTest {\n  flex-shrink: 1;\n  background-color: red;\n  width: 40rem;\n  height: 40rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n.hiddenCell,.shownCell {\n/*   position: absolute; */\n  background-color: blue;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1rem;\n}\n.miss {\n  background-color: black;\n}\n.hit {\n  background-color: pink;\n}\n.sunk {\n  background-color: blueviolet;\n}\n\n/* align center is not align stretch */\n/*to use both wrap in div and stretch one and center the other?*/\n\n.frame {\n  position: absolute; \n  width: 100vw; \n  height: 100vh; \n  background-color: black; \n  opacity: 0.5; \n  top: 0; \n  left: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA,uCAAuC;AACvC;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,gDAAgD;AAClD;AACA;AACA,0BAA0B;EACxB,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,4BAA4B;AAC9B;;AAEA,sCAAsC;AACtC,gEAAgE;;AAEhE;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,MAAM;EACN,OAAO;AACT","sourcesContent":["\n\n/*up until now its just mock elements */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  flex-direction: column;\n}\n\n.title{\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\nh1 {\n  margin-top: 1em;\n  font-size: 3rem;\n  font-weight: bolder;\n}\n\n.gameContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.gameHeader {\n  width: 100%;\n}\nh3 {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2rem;\n}\n\n.gameboardTest {\n  flex-shrink: 1;\n  background-color: red;\n  width: 40rem;\n  height: 40rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n.hiddenCell,.shownCell {\n/*   position: absolute; */\n  background-color: blue;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1rem;\n}\n.miss {\n  background-color: black;\n}\n.hit {\n  background-color: pink;\n}\n.sunk {\n  background-color: blueviolet;\n}\n\n/* align center is not align stretch */\n/*to use both wrap in div and stretch one and center the other?*/\n\n.frame {\n  position: absolute; \n  width: 100vw; \n  height: 100vh; \n  background-color: black; \n  opacity: 0.5; \n  top: 0; \n  left: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "shipSetter": () => (/* binding */ shipSetter),
/* harmony export */   "showHidden": () => (/* binding */ showHidden),
/* harmony export */   "showWhole": () => (/* binding */ showWhole)
/* harmony export */ });
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

function addClassToCell(cell, elem){    //add the right class to the cell based on its state
    let stateClass;
    elem.classList.add("hiddenCell");
    if(cell.state == 0){stateClass = "notHit"}
    else if(cell.state == -1){stateClass = "miss"}
    else if(cell.state == 1){stateClass = "hit"}
    else if(cell.state == 2){stateClass = "sunk"}
    elem.classList.add(stateClass);
}

function addEventHitCell(elem, x, y){ //add the handler for the hit to the element
    elem.addEventListener("click", e => {
        if (nextP.gb.receiveDamage(x, y)){
            //if mode is AI then call AI, otherwise call game with opposites.
            if(AIMode == true){AITurn()}
            else{game(nextP, currP)} //not complete since there is no way to manage local multiplayer yet.
        }
    })
}
function AI(){
    const hitRandom = function (user, playerAI){
        let board = playerAI.gb.update();
        let x, y;
        let max = board.length;
        for(let f = false; f==false;){
            x = max * Math.random();
            y = max * Math.random();
            x = Math.floor(x);
            y = Math.floor(y);
            console.log(x);                                                                                                     //delete
            console.log(y);                                                                                                     //delete

            f = (user.gb.receiveDamage(x, y)); //hit returns true if it hit something, false if it doesn't
            console.log(`result: ${f}`)
        }
    }
    const AITurn = function (user, playerAI){
        //Call showHiden again just to get rid of event listeners so that the user can't hit.
        showHidden(playerAI.anch, playerAI.gb);
        hitRandom(user, playerAI);
        game(user, playerAI); //again the AI is always p2 and so the user is always p1
    }
    return {hitRandom, AITurn}
}



function game(currP, nextP){
/* 
    showWhole curr player
    show hidden next player
    add event to next player
        receive damage, if true and AImode=true, call AI, otherwhise, call game(inverso)
            */
    const AIMode = true;
    console.table(currP.gb.update().map(column => column.map(item=>{                                                            //delete
        return item.state;
    })))
    showWhole(currP.anch, currP.gb);
    showHidden(nextP.anch, nextP.gb);
    nextP.gb.update().forEach((column, x) => column.forEach((cell, y) => { //for every cell in the board
        let elem = nextP.anch.childNodes[x*10+y];
        addEventHitCell(elem, x, y);
    }))


    function addEventHitCell(elem, x, y){ //add the handler for the hit to the element
        elem.addEventListener("click", e => {
            if (nextP.gb.receiveDamage(x, y)){
                //if mode is AI then call AI, otherwise call game with opposites.
                if(AIMode == true){
                    AITurn(currP, nextP);
                }
                else{game(nextP, currP)} //not complete since there is no way to manage local multiplayer yet.
            }
        })
    }
    const {AITurn, hitRandom} = AI();
};


function shipSetter(player){
    const ships = [/*ships*/];
    let axis = "x";

    let frame = document.createElement("div");
    frame.classList.add("frame");              //
    document.body.appendChild(frame);

    let divv = document.createElement("div");
    divv.classList.add("placeShipsDiv");                //
    frame.appendChild(divv);

    let title = document.createElement("h5");
    title.textContent = "Place your ships!";
    divv.appendChild(title);

    let axisBtn = document.createElement("button");
    axisBtn.addEventListener("click", e => {axis = axis == "x" ? "y" : "x"});
    divv.appendChild(axisBtn);
    let resetBtn = document.createElement("button");
    divv.appendChild(resetBtn);

    let grid = document.createElement("div");
    showWhole(grid, player.gb);
    addEventPlaceShipToCells(grid, player, ships, axis);
    divv.appendChild(grid);

    let shipComment = document.createElement("p");
    shipComment.classList.add("shipsPlaced");
    divv.appendChild(shipComment);

}
function updateShipComment(shipComment, inp){
    shipComment.textContent = `${inp}x ships left to place!`;
}
function addEventPlaceShipToCells(anch, player, ships, axis){
    //take anch, player, shipsArray and the current axis, makes every cell in the anchored grid have the event to place a ship and get that ship out of the array, update the comment, if ships are finished remove the shipSetter div.
    player.gb.update().forEach((column, x) => column.forEach((cell, y) => {
        let elem = anch.childNodes[x*10+y];
        elem.addEventListener("click", e => {
            player.gb.placeShip(x, y, axis, ships[0].length);
            ships.shift();
            updateShipComment(document.querySelector(".shipsPlaced"));
            if(ships.length == 0){
                removeShipSetter();
            }
        })
    }))
}

function deleteShipSetter(){
    let elem = document.querySelector(".frame");
    if(elem && elem!=null){
        elem.remove();
    }
}




/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cellHit": () => (/* binding */ cellHit),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateCell": () => (/* binding */ updateCell)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");


function gameboardFactory(inputSize){
    //board cell states: -1-miss 0-default 1-hit 2-isSunk
    let board = [];
    let shipsPlaced = [];
    const gridSize = inputSize || 10;
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
        let cell = board[x][y];
        let cellBefore = Object.assign({}, cell);
        console.log(cellBefore.state);                                                                                //DELETE
        cellHit(cell);
        update(); //=====================================================================
        console.log(cell.state);                                                                                      //DELETE
        console.log(cellBefore.state != cell.state)                                                                   //DELETE
        return (cellBefore.state != cell.state);
    }
    const update = ()=>{
        board.forEach(column => column.forEach(cell => updateCell(cell)))
        return board;
    }
    const placeShip = (x, y, axis, length) => {
        let coll = checkCollision(x, y, axis, length);
        let ship;
        if(!coll){
            ship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
            axis = (axis == "x"); //if axis is X, it will be neutral to i, otherwise it will nullify it. It's opposite will do the opposite.
            for(let i=0; i<length; i++){
                board[x+i*axis][y+i*!axis].hit = () => {return ship.hit(i)};
                board[x+i*axis][y+i*!axis].isSunk = ship.isSunk;
            }
            shipsPlaced.push(ship);
        }
        return ship;
    }
    const checkCollision = (x, y, axis, length) => {
        //returns true if there is a collision detected, false otherwise
        let collision = false;
        if(axis == "x"){
            collision = (x+length) > board.length ? true : false;  //check if out of bounds
            for(let i=0; i<length && !collision; i++){
                //if there is a hit function there is a ship, so it would collide, also check if out of bounds
                if(board[x+i][y].hit){collision = true}
            }
        } else{
            collision = (y+length) > board[x].length ? true : false;  //check if out of bounds
            for(let i=0; i<length && !collision; i++){
                //if there is a hit function there is a ship, so it would collide
                if(board[x][y+i].hit){collision = true}
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

function updateCell(cell){
    //if the state is 1, the ship might have been sunk, otherwise it cannot change during the update
    cell.state = cell.state == 1 ? cell.hit()+cell.isSunk() : cell.state;
    return cell;
}
function cellHit(cell){
    if(cell.hit){
        console.log(`pre calc:${cell.state}`)
        //if there is a hit function there is a ship
        cell.state = cell.hit() /* + cell.isSunk() */;
    }else{
        //otherwise it's a miss
        cell.state = -1;
    }
    return cell;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipFactory),
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
/* ship {
    length: ;
    hitpoints: [0, 0, 0];
    hit: function hit;
    isSunk: function return sunk true or false;
} */



function shipFactory(length){
    let hitpoints = [];
    for(let i=0; i<length; i++){
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



/* module.exports = {
shipFactory
} */

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* import shipFactory from "./shipFactory.js"; */







/**/
let p1 = {
    gb: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    anch: document.querySelector(".gameboardTest.playerOne")
}
let p2 = {
    gb: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    anch: document.querySelector(".gameboardTest.playerTwo")
}
p1.gb.placeShip(1, 1, "x", 4);
p1.gb.placeShip(9,9, "y", 1);
console.table(p1.gb.update().map(column => column.map(item=>{
    return item.hit;
})));
_dom_js__WEBPACK_IMPORTED_MODULE_2__.game(p1, p2);

_dom_js__WEBPACK_IMPORTED_MODULE_2__.shipSetter(p1);

/* domStuff.showWhole(p1.anch, p1.gb); */
/**/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThCO0FBQzlCLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDdkcvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7OztBQUlhO0FBQ2Y7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOztBQUV0QjtBQUNBO0FBQ0EsRUFBRTs7Ozs7O1VDbkNGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBLCtDQUErQztBQUNLO0FBQ2hDO0FBQ2dCOzs7OztBQUtwQztBQUNBO0FBQ0EsUUFBUSxnRUFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHlDQUFhOztBQUViLCtDQUFtQjs7QUFFbkIsdUNBQXVDO0FBQ3ZDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4vKnVwIHVudGlsIG5vdyBpdHMganVzdCBtb2NrIGVsZW1lbnRzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZXtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5nYW1lQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbi5nYW1lSGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBsYXllckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5nYW1lYm9hcmRUZXN0IHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5oaWRkZW5DZWxsLC5zaG93bkNlbGwge1xcbi8qICAgcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcbi5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi8qIGFsaWduIGNlbnRlciBpcyBub3QgYWxpZ24gc3RyZXRjaCAqL1xcbi8qdG8gdXNlIGJvdGggd3JhcCBpbiBkaXYgYW5kIHN0cmV0Y2ggb25lIGFuZCBjZW50ZXIgdGhlIG90aGVyPyovXFxuXFxuLmZyYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICB3aWR0aDogMTAwdnc7IFxcbiAgaGVpZ2h0OiAxMDB2aDsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXFxuICBvcGFjaXR5OiAwLjU7IFxcbiAgdG9wOiAwOyBcXG4gIGxlZnQ6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixnREFBZ0Q7QUFDbEQ7QUFDQTtBQUNBLDBCQUEwQjtFQUN4QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsc0NBQXNDO0FBQ3RDLGdFQUFnRTs7QUFFaEU7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0FBQ1RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLyp1cCB1bnRpbCBub3cgaXRzIGp1c3QgbW9jayBlbGVtZW50cyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGV7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uZ2FtZUhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkVGVzdCB7XFxuICBmbGV4LXNocmluazogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIGhlaWdodDogNDByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uaGlkZGVuQ2VsbCwuc2hvd25DZWxsIHtcXG4vKiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC4xcmVtO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4vKiBhbGlnbiBjZW50ZXIgaXMgbm90IGFsaWduIHN0cmV0Y2ggKi9cXG4vKnRvIHVzZSBib3RoIHdyYXAgaW4gZGl2IGFuZCBzdHJldGNoIG9uZSBhbmQgY2VudGVyIHRoZSBvdGhlcj8qL1xcblxcbi5mcmFtZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgd2lkdGg6IDEwMHZ3OyBcXG4gIGhlaWdodDogMTAwdmg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcbiAgb3BhY2l0eTogMC41OyBcXG4gIHRvcDogMDsgXFxuICBsZWZ0OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHNob3dIaWRkZW4oYW5jaCwgZ2Ipe1xuICAgIC8vbWFrZXMgZ2FtZWJvYXJkIEdCIG9uIHNjcmVlbiBieSByZXBsYWNpbmcgY29udGVudCBvZiBBTkNILCBoaWRkZW4gbWVhbnMgaXQgaXMgdGhlIFwiZW5lbXknc1wiIGJvYXJkLCBzbyB5b3UgZG9uJ3Qgc2VlIHRoZSBzaGlwc1xuICAgIGxldCBib2FyZCA9IGdiLnVwZGF0ZSgpO1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuZm9yRWFjaChjb2x1bW4gPT4gY29sdW1uLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGxldCBoaWRkZW5DID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkQ2xhc3NUb0NlbGwoY2VsbCwgaGlkZGVuQyk7XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGhpZGRlbkMpO1xuICAgIH0pKVxuICAgIGFuY2guaW5uZXJIVE1MID0gdGFibGUuaW5uZXJIVE1MO1xufVxuXG5mdW5jdGlvbiBzaG93V2hvbGUoYW5jaCwgZ2Ipe1xuICAgIC8vbWFrZXMgZ2FtZWJvYXJkIEdCIG9uIHNjcmVlbiBieSByZXBsYWNpbmcgY29udGVudCBvZiBBTkNILCB3aG9sZSBtZWFucyBpdCBpcyB0aGUgeW91ciBib2FyZCwgc28geW91IHNlZSB0aGUgc2hpcHNcbiAgICBsZXQgYm9hcmQgPSBnYi51cGRhdGUoKTtcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkLmZvckVhY2goY29sdW1uID0+IGNvbHVtbi5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBsZXQgc2hvd25DID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkQ2xhc3NUb0NlbGwoY2VsbCwgc2hvd25DKTtcbiAgICAgICAgaWYoY2VsbC5oaXQpe3Nob3duQy50ZXh0Q29udGVudCA9IFwiKlwifVxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChzaG93bkMpO1xuICAgIH0pKVxuICAgIGFuY2guaW5uZXJIVE1MID0gdGFibGUuaW5uZXJIVE1MO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzc1RvQ2VsbChjZWxsLCBlbGVtKXsgICAgLy9hZGQgdGhlIHJpZ2h0IGNsYXNzIHRvIHRoZSBjZWxsIGJhc2VkIG9uIGl0cyBzdGF0ZVxuICAgIGxldCBzdGF0ZUNsYXNzO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGRlbkNlbGxcIik7XG4gICAgaWYoY2VsbC5zdGF0ZSA9PSAwKXtzdGF0ZUNsYXNzID0gXCJub3RIaXRcIn1cbiAgICBlbHNlIGlmKGNlbGwuc3RhdGUgPT0gLTEpe3N0YXRlQ2xhc3MgPSBcIm1pc3NcIn1cbiAgICBlbHNlIGlmKGNlbGwuc3RhdGUgPT0gMSl7c3RhdGVDbGFzcyA9IFwiaGl0XCJ9XG4gICAgZWxzZSBpZihjZWxsLnN0YXRlID09IDIpe3N0YXRlQ2xhc3MgPSBcInN1bmtcIn1cbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoc3RhdGVDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50SGl0Q2VsbChlbGVtLCB4LCB5KXsgLy9hZGQgdGhlIGhhbmRsZXIgZm9yIHRoZSBoaXQgdG8gdGhlIGVsZW1lbnRcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKG5leHRQLmdiLnJlY2VpdmVEYW1hZ2UoeCwgeSkpe1xuICAgICAgICAgICAgLy9pZiBtb2RlIGlzIEFJIHRoZW4gY2FsbCBBSSwgb3RoZXJ3aXNlIGNhbGwgZ2FtZSB3aXRoIG9wcG9zaXRlcy5cbiAgICAgICAgICAgIGlmKEFJTW9kZSA9PSB0cnVlKXtBSVR1cm4oKX1cbiAgICAgICAgICAgIGVsc2V7Z2FtZShuZXh0UCwgY3VyclApfSAvL25vdCBjb21wbGV0ZSBzaW5jZSB0aGVyZSBpcyBubyB3YXkgdG8gbWFuYWdlIGxvY2FsIG11bHRpcGxheWVyIHlldC5cbiAgICAgICAgfVxuICAgIH0pXG59XG5mdW5jdGlvbiBBSSgpe1xuICAgIGNvbnN0IGhpdFJhbmRvbSA9IGZ1bmN0aW9uICh1c2VyLCBwbGF5ZXJBSSl7XG4gICAgICAgIGxldCBib2FyZCA9IHBsYXllckFJLmdiLnVwZGF0ZSgpO1xuICAgICAgICBsZXQgeCwgeTtcbiAgICAgICAgbGV0IG1heCA9IGJvYXJkLmxlbmd0aDtcbiAgICAgICAgZm9yKGxldCBmID0gZmFsc2U7IGY9PWZhbHNlOyl7XG4gICAgICAgICAgICB4ID0gbWF4ICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHkgPSBtYXggKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kZWxldGVcblxuICAgICAgICAgICAgZiA9ICh1c2VyLmdiLnJlY2VpdmVEYW1hZ2UoeCwgeSkpOyAvL2hpdCByZXR1cm5zIHRydWUgaWYgaXQgaGl0IHNvbWV0aGluZywgZmFsc2UgaWYgaXQgZG9lc24ndFxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3VsdDogJHtmfWApXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgQUlUdXJuID0gZnVuY3Rpb24gKHVzZXIsIHBsYXllckFJKXtcbiAgICAgICAgLy9DYWxsIHNob3dIaWRlbiBhZ2FpbiBqdXN0IHRvIGdldCByaWQgb2YgZXZlbnQgbGlzdGVuZXJzIHNvIHRoYXQgdGhlIHVzZXIgY2FuJ3QgaGl0LlxuICAgICAgICBzaG93SGlkZGVuKHBsYXllckFJLmFuY2gsIHBsYXllckFJLmdiKTtcbiAgICAgICAgaGl0UmFuZG9tKHVzZXIsIHBsYXllckFJKTtcbiAgICAgICAgZ2FtZSh1c2VyLCBwbGF5ZXJBSSk7IC8vYWdhaW4gdGhlIEFJIGlzIGFsd2F5cyBwMiBhbmQgc28gdGhlIHVzZXIgaXMgYWx3YXlzIHAxXG4gICAgfVxuICAgIHJldHVybiB7aGl0UmFuZG9tLCBBSVR1cm59XG59XG5cblxuXG5mdW5jdGlvbiBnYW1lKGN1cnJQLCBuZXh0UCl7XG4vKiBcbiAgICBzaG93V2hvbGUgY3VyciBwbGF5ZXJcbiAgICBzaG93IGhpZGRlbiBuZXh0IHBsYXllclxuICAgIGFkZCBldmVudCB0byBuZXh0IHBsYXllclxuICAgICAgICByZWNlaXZlIGRhbWFnZSwgaWYgdHJ1ZSBhbmQgQUltb2RlPXRydWUsIGNhbGwgQUksIG90aGVyd2hpc2UsIGNhbGwgZ2FtZShpbnZlcnNvKVxuICAgICAgICAgICAgKi9cbiAgICBjb25zdCBBSU1vZGUgPSB0cnVlO1xuICAgIGNvbnNvbGUudGFibGUoY3VyclAuZ2IudXBkYXRlKCkubWFwKGNvbHVtbiA9PiBjb2x1bW4ubWFwKGl0ZW09PnsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZVxuICAgICAgICByZXR1cm4gaXRlbS5zdGF0ZTtcbiAgICB9KSkpXG4gICAgc2hvd1dob2xlKGN1cnJQLmFuY2gsIGN1cnJQLmdiKTtcbiAgICBzaG93SGlkZGVuKG5leHRQLmFuY2gsIG5leHRQLmdiKTtcbiAgICBuZXh0UC5nYi51cGRhdGUoKS5mb3JFYWNoKChjb2x1bW4sIHgpID0+IGNvbHVtbi5mb3JFYWNoKChjZWxsLCB5KSA9PiB7IC8vZm9yIGV2ZXJ5IGNlbGwgaW4gdGhlIGJvYXJkXG4gICAgICAgIGxldCBlbGVtID0gbmV4dFAuYW5jaC5jaGlsZE5vZGVzW3gqMTAreV07XG4gICAgICAgIGFkZEV2ZW50SGl0Q2VsbChlbGVtLCB4LCB5KTtcbiAgICB9KSlcblxuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRIaXRDZWxsKGVsZW0sIHgsIHkpeyAvL2FkZCB0aGUgaGFuZGxlciBmb3IgdGhlIGhpdCB0byB0aGUgZWxlbWVudFxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChuZXh0UC5nYi5yZWNlaXZlRGFtYWdlKHgsIHkpKXtcbiAgICAgICAgICAgICAgICAvL2lmIG1vZGUgaXMgQUkgdGhlbiBjYWxsIEFJLCBvdGhlcndpc2UgY2FsbCBnYW1lIHdpdGggb3Bwb3NpdGVzLlxuICAgICAgICAgICAgICAgIGlmKEFJTW9kZSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgQUlUdXJuKGN1cnJQLCBuZXh0UCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7Z2FtZShuZXh0UCwgY3VyclApfSAvL25vdCBjb21wbGV0ZSBzaW5jZSB0aGVyZSBpcyBubyB3YXkgdG8gbWFuYWdlIGxvY2FsIG11bHRpcGxheWVyIHlldC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3Qge0FJVHVybiwgaGl0UmFuZG9tfSA9IEFJKCk7XG59O1xuXG5cbmZ1bmN0aW9uIHNoaXBTZXR0ZXIocGxheWVyKXtcbiAgICBjb25zdCBzaGlwcyA9IFsvKnNoaXBzKi9dO1xuICAgIGxldCBheGlzID0gXCJ4XCI7XG5cbiAgICBsZXQgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoXCJmcmFtZVwiKTsgICAgICAgICAgICAgIC8vXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmcmFtZSk7XG5cbiAgICBsZXQgZGl2diA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2di5jbGFzc0xpc3QuYWRkKFwicGxhY2VTaGlwc0RpdlwiKTsgICAgICAgICAgICAgICAgLy9cbiAgICBmcmFtZS5hcHBlbmRDaGlsZChkaXZ2KTtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBzaGlwcyFcIjtcbiAgICBkaXZ2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGxldCBheGlzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBheGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtheGlzID0gYXhpcyA9PSBcInhcIiA/IFwieVwiIDogXCJ4XCJ9KTtcbiAgICBkaXZ2LmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuICAgIGxldCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGl2di5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG5cbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hvd1dob2xlKGdyaWQsIHBsYXllci5nYik7XG4gICAgYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGdyaWQsIHBsYXllciwgc2hpcHMsIGF4aXMpO1xuICAgIGRpdnYuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICBsZXQgc2hpcENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzaGlwQ29tbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcHNQbGFjZWRcIik7XG4gICAgZGl2di5hcHBlbmRDaGlsZChzaGlwQ29tbWVudCk7XG5cbn1cbmZ1bmN0aW9uIHVwZGF0ZVNoaXBDb21tZW50KHNoaXBDb21tZW50LCBpbnApe1xuICAgIHNoaXBDb21tZW50LnRleHRDb250ZW50ID0gYCR7aW5wfXggc2hpcHMgbGVmdCB0byBwbGFjZSFgO1xufVxuZnVuY3Rpb24gYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGFuY2gsIHBsYXllciwgc2hpcHMsIGF4aXMpe1xuICAgIC8vdGFrZSBhbmNoLCBwbGF5ZXIsIHNoaXBzQXJyYXkgYW5kIHRoZSBjdXJyZW50IGF4aXMsIG1ha2VzIGV2ZXJ5IGNlbGwgaW4gdGhlIGFuY2hvcmVkIGdyaWQgaGF2ZSB0aGUgZXZlbnQgdG8gcGxhY2UgYSBzaGlwIGFuZCBnZXQgdGhhdCBzaGlwIG91dCBvZiB0aGUgYXJyYXksIHVwZGF0ZSB0aGUgY29tbWVudCwgaWYgc2hpcHMgYXJlIGZpbmlzaGVkIHJlbW92ZSB0aGUgc2hpcFNldHRlciBkaXYuXG4gICAgcGxheWVyLmdiLnVwZGF0ZSgpLmZvckVhY2goKGNvbHVtbiwgeCkgPT4gY29sdW1uLmZvckVhY2goKGNlbGwsIHkpID0+IHtcbiAgICAgICAgbGV0IGVsZW0gPSBhbmNoLmNoaWxkTm9kZXNbeCoxMCt5XTtcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIuZ2IucGxhY2VTaGlwKHgsIHksIGF4aXMsIHNoaXBzWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICBzaGlwcy5zaGlmdCgpO1xuICAgICAgICAgICAgdXBkYXRlU2hpcENvbW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwc1BsYWNlZFwiKSk7XG4gICAgICAgICAgICBpZihzaGlwcy5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICAgICAgcmVtb3ZlU2hpcFNldHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pKVxufVxuXG5mdW5jdGlvbiBkZWxldGVTaGlwU2V0dGVyKCl7XG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyYW1lXCIpO1xuICAgIGlmKGVsZW0gJiYgZWxlbSE9bnVsbCl7XG4gICAgICAgIGVsZW0ucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7c2hvd1dob2xlLCBzaG93SGlkZGVuLCBnYW1lLCBzaGlwU2V0dGVyfSIsImltcG9ydCBzaGlwRmFjdG9yeSBmcm9tIFwiLi9zaGlwRmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KGlucHV0U2l6ZSl7XG4gICAgLy9ib2FyZCBjZWxsIHN0YXRlczogLTEtbWlzcyAwLWRlZmF1bHQgMS1oaXQgMi1pc1N1bmtcbiAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICBsZXQgc2hpcHNQbGFjZWQgPSBbXTtcbiAgICBjb25zdCBncmlkU2l6ZSA9IGlucHV0U2l6ZSB8fCAxMDtcbiAgICBmb3IobGV0IGk9MDsgaTxncmlkU2l6ZTsgaSsrKXtcbiAgICAgICAgLy9pbml0aWFsaXplIGJvYXJkIGluIHRoZSBkZWZhdWx0IHN0YXRlIG9mIDBcbiAgICAgICAgYm9hcmQucHVzaChbXSk7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPGdyaWRTaXplOyBqKyspe1xuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgc3RhdGU6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlY2VpdmVEYW1hZ2UgPSAoeCwgeSkgPT4ge1xuICAgICAgICBsZXQgY2VsbCA9IGJvYXJkW3hdW3ldO1xuICAgICAgICBsZXQgY2VsbEJlZm9yZSA9IE9iamVjdC5hc3NpZ24oe30sIGNlbGwpO1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsQmVmb3JlLnN0YXRlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vREVMRVRFXG4gICAgICAgIGNlbGxIaXQoY2VsbCk7XG4gICAgICAgIHVwZGF0ZSgpOyAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBjb25zb2xlLmxvZyhjZWxsLnN0YXRlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vREVMRVRFXG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGxCZWZvcmUuc3RhdGUgIT0gY2VsbC5zdGF0ZSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ERUxFVEVcbiAgICAgICAgcmV0dXJuIChjZWxsQmVmb3JlLnN0YXRlICE9IGNlbGwuc3RhdGUpO1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGUgPSAoKT0+e1xuICAgICAgICBib2FyZC5mb3JFYWNoKGNvbHVtbiA9PiBjb2x1bW4uZm9yRWFjaChjZWxsID0+IHVwZGF0ZUNlbGwoY2VsbCkpKVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBheGlzLCBsZW5ndGgpID0+IHtcbiAgICAgICAgbGV0IGNvbGwgPSBjaGVja0NvbGxpc2lvbih4LCB5LCBheGlzLCBsZW5ndGgpO1xuICAgICAgICBsZXQgc2hpcDtcbiAgICAgICAgaWYoIWNvbGwpe1xuICAgICAgICAgICAgc2hpcCA9IHNoaXBGYWN0b3J5KGxlbmd0aCk7XG4gICAgICAgICAgICBheGlzID0gKGF4aXMgPT0gXCJ4XCIpOyAvL2lmIGF4aXMgaXMgWCwgaXQgd2lsbCBiZSBuZXV0cmFsIHRvIGksIG90aGVyd2lzZSBpdCB3aWxsIG51bGxpZnkgaXQuIEl0J3Mgb3Bwb3NpdGUgd2lsbCBkbyB0aGUgb3Bwb3NpdGUuXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgYm9hcmRbeCtpKmF4aXNdW3kraSohYXhpc10uaGl0ID0gKCkgPT4ge3JldHVybiBzaGlwLmhpdChpKX07XG4gICAgICAgICAgICAgICAgYm9hcmRbeCtpKmF4aXNdW3kraSohYXhpc10uaXNTdW5rID0gc2hpcC5pc1N1bms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwc1BsYWNlZC5wdXNoKHNoaXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwO1xuICAgIH1cbiAgICBjb25zdCBjaGVja0NvbGxpc2lvbiA9ICh4LCB5LCBheGlzLCBsZW5ndGgpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYSBjb2xsaXNpb24gZGV0ZWN0ZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmKGF4aXMgPT0gXCJ4XCIpe1xuICAgICAgICAgICAgY29sbGlzaW9uID0gKHgrbGVuZ3RoKSA+IGJvYXJkLmxlbmd0aCA/IHRydWUgOiBmYWxzZTsgIC8vY2hlY2sgaWYgb3V0IG9mIGJvdW5kc1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoICYmICFjb2xsaXNpb247IGkrKyl7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIGhpdCBmdW5jdGlvbiB0aGVyZSBpcyBhIHNoaXAsIHNvIGl0IHdvdWxkIGNvbGxpZGUsIGFsc28gY2hlY2sgaWYgb3V0IG9mIGJvdW5kc1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3graV1beV0uaGl0KXtjb2xsaXNpb24gPSB0cnVlfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSAoeStsZW5ndGgpID4gYm9hcmRbeF0ubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlOyAgLy9jaGVjayBpZiBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGggJiYgIWNvbGxpc2lvbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgaGl0IGZ1bmN0aW9uIHRoZXJlIGlzIGEgc2hpcCwgc28gaXQgd291bGQgY29sbGlkZVxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3hdW3kraV0uaGl0KXtjb2xsaXNpb24gPSB0cnVlfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG4gICAgY29uc3QgZW5kT2ZHYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHNQbGFjZWQuZXZlcnkocGxhY2VkID0+IHBsYWNlZC5pc1N1bmsoKSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZWNlaXZlRGFtYWdlLFxuICAgICAgICB1cGRhdGUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgZW5kT2ZHYW1lXG4gICAgfVxuXG4gICAgLyoge1xuICAgICAgICBib2FyZFtdW11cbiAgICAgICAgcmVjZWl2ZURhbWFnZSgpXG4gICAgICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgICAgIHNoaXBzUGxhY2VkW11cbiAgICAgICAgICAgIGVuZCBvZiBnYW1lP1xuICAgICAgICAgICAgcGxhY2VzaGlwXG4gICAgICAgICAgICAgICAgb3ZlcmxhcD9cbiAgICB9ICovXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNlbGwoY2VsbCl7XG4gICAgLy9pZiB0aGUgc3RhdGUgaXMgMSwgdGhlIHNoaXAgbWlnaHQgaGF2ZSBiZWVuIHN1bmssIG90aGVyd2lzZSBpdCBjYW5ub3QgY2hhbmdlIGR1cmluZyB0aGUgdXBkYXRlXG4gICAgY2VsbC5zdGF0ZSA9IGNlbGwuc3RhdGUgPT0gMSA/IGNlbGwuaGl0KCkrY2VsbC5pc1N1bmsoKSA6IGNlbGwuc3RhdGU7XG4gICAgcmV0dXJuIGNlbGw7XG59XG5mdW5jdGlvbiBjZWxsSGl0KGNlbGwpe1xuICAgIGlmKGNlbGwuaGl0KXtcbiAgICAgICAgY29uc29sZS5sb2coYHByZSBjYWxjOiR7Y2VsbC5zdGF0ZX1gKVxuICAgICAgICAvL2lmIHRoZXJlIGlzIGEgaGl0IGZ1bmN0aW9uIHRoZXJlIGlzIGEgc2hpcFxuICAgICAgICBjZWxsLnN0YXRlID0gY2VsbC5oaXQoKSAvKiArIGNlbGwuaXNTdW5rKCkgKi87XG4gICAgfWVsc2V7XG4gICAgICAgIC8vb3RoZXJ3aXNlIGl0J3MgYSBtaXNzXG4gICAgICAgIGNlbGwuc3RhdGUgPSAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGNlbGw7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUNlbGwsIGNlbGxIaXQgfVxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeTsiLCIvKiBzaGlwIHtcbiAgICBsZW5ndGg6IDtcbiAgICBoaXRwb2ludHM6IFswLCAwLCAwXTtcbiAgICBoaXQ6IGZ1bmN0aW9uIGhpdDtcbiAgICBpc1N1bms6IGZ1bmN0aW9uIHJldHVybiBzdW5rIHRydWUgb3IgZmFsc2U7XG59ICovXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwRmFjdG9yeShsZW5ndGgpe1xuICAgIGxldCBoaXRwb2ludHMgPSBbXTtcbiAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGhpdHBvaW50cy5wdXNoKDApO1xuICAgIH1cbiAgICBjb25zdCBoaXQgPSAobikgPT4ge1xuICAgICAgICAvL3JlZ2lzdGVycyB0aGUgaGl0IGluIGhpdHBvaW50cyBhbmQgcmV0dXJucyAxLlxuICAgICAgICBoaXRwb2ludHNbbl0gPSAxO1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgc2hpcCBpcyBzdW5rXG4gICAgICAgIHJldHVybiBoaXRwb2ludHMuZXZlcnkocG9pbnQgPT4gcG9pbnQgPT0gMSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0cG9pbnRzLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfVxuXG4vKiBtb2R1bGUuZXhwb3J0cyA9IHtcbnNoaXBGYWN0b3J5XG59ICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBGYWN0b3J5LmpzXCI7ICovXG5pbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tIFwiLi9nYW1lYm9hcmRGYWN0b3J5LmpzXCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCAqIGFzIGRvbVN0dWZmIGZyb20gXCIuL2RvbS5qc1wiXG5cblxuXG5cbi8qKi9cbmxldCBwMSA9IHtcbiAgICBnYjogZ2FtZWJvYXJkRmFjdG9yeSgpLFxuICAgIGFuY2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkVGVzdC5wbGF5ZXJPbmVcIilcbn1cbmxldCBwMiA9IHtcbiAgICBnYjogZ2FtZWJvYXJkRmFjdG9yeSgpLFxuICAgIGFuY2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkVGVzdC5wbGF5ZXJUd29cIilcbn1cbnAxLmdiLnBsYWNlU2hpcCgxLCAxLCBcInhcIiwgNCk7XG5wMS5nYi5wbGFjZVNoaXAoOSw5LCBcInlcIiwgMSk7XG5jb25zb2xlLnRhYmxlKHAxLmdiLnVwZGF0ZSgpLm1hcChjb2x1bW4gPT4gY29sdW1uLm1hcChpdGVtPT57XG4gICAgcmV0dXJuIGl0ZW0uaGl0O1xufSkpKTtcbmRvbVN0dWZmLmdhbWUocDEsIHAyKTtcblxuZG9tU3R1ZmYuc2hpcFNldHRlcihwMSk7XG5cbi8qIGRvbVN0dWZmLnNob3dXaG9sZShwMS5hbmNoLCBwMS5nYik7ICovXG4vKiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
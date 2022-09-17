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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/*up until now its just mock elements */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  flex-direction: column;\n}\n\n.title{\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\nh1 {\n  margin-top: 1em;\n  font-size: 3rem;\n  font-weight: bolder;\n}\n\n.gameContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.gameHeader {\n  width: 100%;\n}\nh3 {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2rem;\n}\n\n.gameboardTest,.frame .shipPlaceGrid {\n  flex-shrink: 1;\n  background-color: red;\n  width: 40rem;\n  height: 40rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n.hiddenCell,.shownCell {\n/*   position: absolute; */\n  background-color: blue;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1rem;\n}\n.miss {\n  background-color: black;\n}\n.hit {\n  background-color: pink;\n}\n.sunk {\n  background-color: blueviolet;\n}\n\n/* align center is not align stretch */\n/*to use both wrap in div and stretch one and center the other?*/\n\n.frame {\n  position: absolute; \n  width: 100vw; \n  height: 100vh; \n  background-color: rgba(0, 0, 0, 0.5); \n  top: 0; \n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.frame>.placeShipsDiv {\n  background-color: white;\n  opacity: 1;\n  padding: 1rem;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA,uCAAuC;AACvC;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,gDAAgD;AAClD;AACA;AACA,0BAA0B;EACxB,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,4BAA4B;AAC9B;;AAEA,sCAAsC;AACtC,gEAAgE;;AAEhE;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,MAAM;EACN,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB","sourcesContent":["\n\n/*up until now its just mock elements */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  flex-direction: column;\n}\n\n.title{\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\nh1 {\n  margin-top: 1em;\n  font-size: 3rem;\n  font-weight: bolder;\n}\n\n.gameContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.gameHeader {\n  width: 100%;\n}\nh3 {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2rem;\n}\n\n.gameboardTest,.frame .shipPlaceGrid {\n  flex-shrink: 1;\n  background-color: red;\n  width: 40rem;\n  height: 40rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n.hiddenCell,.shownCell {\n/*   position: absolute; */\n  background-color: blue;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1rem;\n}\n.miss {\n  background-color: black;\n}\n.hit {\n  background-color: pink;\n}\n.sunk {\n  background-color: blueviolet;\n}\n\n/* align center is not align stretch */\n/*to use both wrap in div and stretch one and center the other?*/\n\n.frame {\n  position: absolute; \n  width: 100vw; \n  height: 100vh; \n  background-color: rgba(0, 0, 0, 0.5); \n  top: 0; \n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.frame>.placeShipsDiv {\n  background-color: white;\n  opacity: 1;\n  padding: 1rem;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}"],"sourceRoot":""}]);
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
    const ships = [{length: 3}, {length: 3}, {length: 3}];
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

    let axisText = document.createElement("h5");
    axisText.textContent = "Current axis: ";
    divv.appendChild(axisText);
    let axisBtn = document.createElement("button");
    axisBtn.addEventListener("click", e => {
        axis = axis == "x" ? "y" : "x";
        axisBtn.textContent = `${axis.toUpperCase()}`
    });
    axisBtn.textContent = `${axis.toUpperCase()}`;
    axisText.appendChild(axisBtn);

    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    divv.appendChild(resetBtn);

    let grid = document.createElement("div");
    grid.classList.add("shipPlaceGrid");
    showWhole(grid, player.gb);
    addEventPlaceShipToCells(grid, player, ships, axis);
    divv.appendChild(grid);

    let shipComment = document.createElement("p");
    shipComment.classList.add("shipsPlaced");
    shipComment.textContent = `${ships.length}x ships left to place!`;
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
            let placed = player.gb.placeShip(x, y, axis, ships[0].length);
            if(placed){
                ships.shift();
            }
            updateShipComment(document.querySelector(".shipsPlaced"), ships.length);
            if(ships.length == 0){
                removeShipSetter();
            }
            //once you add the ship you have to refresh the grid and add the eventListeners again
            showWhole(anch, player.gb);
            addEventPlaceShipToCells(anch, player, ships, axis);
        })
    }))
}

function removeShipSetter(){
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
        return !coll;
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
        return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQSwrQ0FBK0M7QUFDSztBQUNoQztBQUNnQjs7Ozs7QUFLcEM7QUFDQTtBQUNBLFFBQVEsZ0VBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx5Q0FBYTs7QUFFYiwrQ0FBbUI7O0FBRW5CLHVDQUF1QztBQUN2QyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLyp1cCB1bnRpbCBub3cgaXRzIGp1c3QgbW9jayBlbGVtZW50cyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGV7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uZ2FtZUhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkVGVzdCwuZnJhbWUgLnNoaXBQbGFjZUdyaWQge1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNDByZW07XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmhpZGRlbkNlbGwsLnNob3duQ2VsbCB7XFxuLyogICBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLyogYWxpZ24gY2VudGVyIGlzIG5vdCBhbGlnbiBzdHJldGNoICovXFxuLyp0byB1c2UgYm90aCB3cmFwIGluIGRpdiBhbmQgc3RyZXRjaCBvbmUgYW5kIGNlbnRlciB0aGUgb3RoZXI/Ki9cXG5cXG4uZnJhbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gIHdpZHRoOiAxMDB2dzsgXFxuICBoZWlnaHQ6IDEwMHZoOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgXFxuICB0b3A6IDA7IFxcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mcmFtZT4ucGxhY2VTaGlwc0RpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdEQUFnRDtBQUNsRDtBQUNBO0FBQ0EsMEJBQTBCO0VBQ3hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSxzQ0FBc0M7QUFDdEMsZ0VBQWdFOztBQUVoRTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLyp1cCB1bnRpbCBub3cgaXRzIGp1c3QgbW9jayBlbGVtZW50cyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGV7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uZ2FtZUhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkVGVzdCwuZnJhbWUgLnNoaXBQbGFjZUdyaWQge1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNDByZW07XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmhpZGRlbkNlbGwsLnNob3duQ2VsbCB7XFxuLyogICBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLyogYWxpZ24gY2VudGVyIGlzIG5vdCBhbGlnbiBzdHJldGNoICovXFxuLyp0byB1c2UgYm90aCB3cmFwIGluIGRpdiBhbmQgc3RyZXRjaCBvbmUgYW5kIGNlbnRlciB0aGUgb3RoZXI/Ki9cXG5cXG4uZnJhbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gIHdpZHRoOiAxMDB2dzsgXFxuICBoZWlnaHQ6IDEwMHZoOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgXFxuICB0b3A6IDA7IFxcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mcmFtZT4ucGxhY2VTaGlwc0RpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBzaG93SGlkZGVuKGFuY2gsIGdiKXtcbiAgICAvL21ha2VzIGdhbWVib2FyZCBHQiBvbiBzY3JlZW4gYnkgcmVwbGFjaW5nIGNvbnRlbnQgb2YgQU5DSCwgaGlkZGVuIG1lYW5zIGl0IGlzIHRoZSBcImVuZW15J3NcIiBib2FyZCwgc28geW91IGRvbid0IHNlZSB0aGUgc2hpcHNcbiAgICBsZXQgYm9hcmQgPSBnYi51cGRhdGUoKTtcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkLmZvckVhY2goY29sdW1uID0+IGNvbHVtbi5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBsZXQgaGlkZGVuQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZENsYXNzVG9DZWxsKGNlbGwsIGhpZGRlbkMpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChoaWRkZW5DKTtcbiAgICB9KSlcbiAgICBhbmNoLmlubmVySFRNTCA9IHRhYmxlLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gc2hvd1dob2xlKGFuY2gsIGdiKXtcbiAgICAvL21ha2VzIGdhbWVib2FyZCBHQiBvbiBzY3JlZW4gYnkgcmVwbGFjaW5nIGNvbnRlbnQgb2YgQU5DSCwgd2hvbGUgbWVhbnMgaXQgaXMgdGhlIHlvdXIgYm9hcmQsIHNvIHlvdSBzZWUgdGhlIHNoaXBzXG4gICAgbGV0IGJvYXJkID0gZ2IudXBkYXRlKCk7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5mb3JFYWNoKGNvbHVtbiA9PiBjb2x1bW4uZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgbGV0IHNob3duQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZENsYXNzVG9DZWxsKGNlbGwsIHNob3duQyk7XG4gICAgICAgIGlmKGNlbGwuaGl0KXtzaG93bkMudGV4dENvbnRlbnQgPSBcIipcIn1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoc2hvd25DKTtcbiAgICB9KSlcbiAgICBhbmNoLmlubmVySFRNTCA9IHRhYmxlLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3NUb0NlbGwoY2VsbCwgZWxlbSl7ICAgIC8vYWRkIHRoZSByaWdodCBjbGFzcyB0byB0aGUgY2VsbCBiYXNlZCBvbiBpdHMgc3RhdGVcbiAgICBsZXQgc3RhdGVDbGFzcztcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5DZWxsXCIpO1xuICAgIGlmKGNlbGwuc3RhdGUgPT0gMCl7c3RhdGVDbGFzcyA9IFwibm90SGl0XCJ9XG4gICAgZWxzZSBpZihjZWxsLnN0YXRlID09IC0xKXtzdGF0ZUNsYXNzID0gXCJtaXNzXCJ9XG4gICAgZWxzZSBpZihjZWxsLnN0YXRlID09IDEpe3N0YXRlQ2xhc3MgPSBcImhpdFwifVxuICAgIGVsc2UgaWYoY2VsbC5zdGF0ZSA9PSAyKXtzdGF0ZUNsYXNzID0gXCJzdW5rXCJ9XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKHN0YXRlQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudEhpdENlbGwoZWxlbSwgeCwgeSl7IC8vYWRkIHRoZSBoYW5kbGVyIGZvciB0aGUgaGl0IHRvIHRoZSBlbGVtZW50XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChuZXh0UC5nYi5yZWNlaXZlRGFtYWdlKHgsIHkpKXtcbiAgICAgICAgICAgIC8vaWYgbW9kZSBpcyBBSSB0aGVuIGNhbGwgQUksIG90aGVyd2lzZSBjYWxsIGdhbWUgd2l0aCBvcHBvc2l0ZXMuXG4gICAgICAgICAgICBpZihBSU1vZGUgPT0gdHJ1ZSl7QUlUdXJuKCl9XG4gICAgICAgICAgICBlbHNle2dhbWUobmV4dFAsIGN1cnJQKX0gLy9ub3QgY29tcGxldGUgc2luY2UgdGhlcmUgaXMgbm8gd2F5IHRvIG1hbmFnZSBsb2NhbCBtdWx0aXBsYXllciB5ZXQuXG4gICAgICAgIH1cbiAgICB9KVxufVxuZnVuY3Rpb24gQUkoKXtcbiAgICBjb25zdCBoaXRSYW5kb20gPSBmdW5jdGlvbiAodXNlciwgcGxheWVyQUkpe1xuICAgICAgICBsZXQgYm9hcmQgPSBwbGF5ZXJBSS5nYi51cGRhdGUoKTtcbiAgICAgICAgbGV0IHgsIHk7XG4gICAgICAgIGxldCBtYXggPSBib2FyZC5sZW5ndGg7XG4gICAgICAgIGZvcihsZXQgZiA9IGZhbHNlOyBmPT1mYWxzZTspe1xuICAgICAgICAgICAgeCA9IG1heCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB5ID0gbWF4ICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlXG5cbiAgICAgICAgICAgIGYgPSAodXNlci5nYi5yZWNlaXZlRGFtYWdlKHgsIHkpKTsgLy9oaXQgcmV0dXJucyB0cnVlIGlmIGl0IGhpdCBzb21ldGhpbmcsIGZhbHNlIGlmIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXN1bHQ6ICR7Zn1gKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IEFJVHVybiA9IGZ1bmN0aW9uICh1c2VyLCBwbGF5ZXJBSSl7XG4gICAgICAgIC8vQ2FsbCBzaG93SGlkZW4gYWdhaW4ganVzdCB0byBnZXQgcmlkIG9mIGV2ZW50IGxpc3RlbmVycyBzbyB0aGF0IHRoZSB1c2VyIGNhbid0IGhpdC5cbiAgICAgICAgc2hvd0hpZGRlbihwbGF5ZXJBSS5hbmNoLCBwbGF5ZXJBSS5nYik7XG4gICAgICAgIGhpdFJhbmRvbSh1c2VyLCBwbGF5ZXJBSSk7XG4gICAgICAgIGdhbWUodXNlciwgcGxheWVyQUkpOyAvL2FnYWluIHRoZSBBSSBpcyBhbHdheXMgcDIgYW5kIHNvIHRoZSB1c2VyIGlzIGFsd2F5cyBwMVxuICAgIH1cbiAgICByZXR1cm4ge2hpdFJhbmRvbSwgQUlUdXJufVxufVxuXG5cblxuZnVuY3Rpb24gZ2FtZShjdXJyUCwgbmV4dFApe1xuLyogXG4gICAgc2hvd1dob2xlIGN1cnIgcGxheWVyXG4gICAgc2hvdyBoaWRkZW4gbmV4dCBwbGF5ZXJcbiAgICBhZGQgZXZlbnQgdG8gbmV4dCBwbGF5ZXJcbiAgICAgICAgcmVjZWl2ZSBkYW1hZ2UsIGlmIHRydWUgYW5kIEFJbW9kZT10cnVlLCBjYWxsIEFJLCBvdGhlcndoaXNlLCBjYWxsIGdhbWUoaW52ZXJzbylcbiAgICAgICAgICAgICovXG4gICAgY29uc3QgQUlNb2RlID0gdHJ1ZTtcbiAgICBjb25zb2xlLnRhYmxlKGN1cnJQLmdiLnVwZGF0ZSgpLm1hcChjb2x1bW4gPT4gY29sdW1uLm1hcChpdGVtPT57ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3RhdGU7XG4gICAgfSkpKVxuICAgIHNob3dXaG9sZShjdXJyUC5hbmNoLCBjdXJyUC5nYik7XG4gICAgc2hvd0hpZGRlbihuZXh0UC5hbmNoLCBuZXh0UC5nYik7XG4gICAgbmV4dFAuZ2IudXBkYXRlKCkuZm9yRWFjaCgoY29sdW1uLCB4KSA9PiBjb2x1bW4uZm9yRWFjaCgoY2VsbCwgeSkgPT4geyAvL2ZvciBldmVyeSBjZWxsIGluIHRoZSBib2FyZFxuICAgICAgICBsZXQgZWxlbSA9IG5leHRQLmFuY2guY2hpbGROb2Rlc1t4KjEwK3ldO1xuICAgICAgICBhZGRFdmVudEhpdENlbGwoZWxlbSwgeCwgeSk7XG4gICAgfSkpXG5cblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50SGl0Q2VsbChlbGVtLCB4LCB5KXsgLy9hZGQgdGhlIGhhbmRsZXIgZm9yIHRoZSBoaXQgdG8gdGhlIGVsZW1lbnRcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBpZiAobmV4dFAuZ2IucmVjZWl2ZURhbWFnZSh4LCB5KSl7XG4gICAgICAgICAgICAgICAgLy9pZiBtb2RlIGlzIEFJIHRoZW4gY2FsbCBBSSwgb3RoZXJ3aXNlIGNhbGwgZ2FtZSB3aXRoIG9wcG9zaXRlcy5cbiAgICAgICAgICAgICAgICBpZihBSU1vZGUgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIEFJVHVybihjdXJyUCwgbmV4dFApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle2dhbWUobmV4dFAsIGN1cnJQKX0gLy9ub3QgY29tcGxldGUgc2luY2UgdGhlcmUgaXMgbm8gd2F5IHRvIG1hbmFnZSBsb2NhbCBtdWx0aXBsYXllciB5ZXQuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IHtBSVR1cm4sIGhpdFJhbmRvbX0gPSBBSSgpO1xufTtcblxuXG5mdW5jdGlvbiBzaGlwU2V0dGVyKHBsYXllcil7XG4gICAgY29uc3Qgc2hpcHMgPSBbe2xlbmd0aDogM30sIHtsZW5ndGg6IDN9LCB7bGVuZ3RoOiAzfV07XG4gICAgbGV0IGF4aXMgPSBcInhcIjtcblxuICAgIGxldCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJhbWUuY2xhc3NMaXN0LmFkZChcImZyYW1lXCIpOyAgICAgICAgICAgICAgLy9cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZyYW1lKTtcblxuICAgIGxldCBkaXZ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZ2LmNsYXNzTGlzdC5hZGQoXCJwbGFjZVNoaXBzRGl2XCIpOyAgICAgICAgICAgICAgICAvL1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKGRpdnYpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHNoaXBzIVwiO1xuICAgIGRpdnYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbGV0IGF4aXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgIGF4aXNUZXh0LnRleHRDb250ZW50ID0gXCJDdXJyZW50IGF4aXM6IFwiO1xuICAgIGRpdnYuYXBwZW5kQ2hpbGQoYXhpc1RleHQpO1xuICAgIGxldCBheGlzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBheGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgYXhpcyA9IGF4aXMgPT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xuICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYCR7YXhpcy50b1VwcGVyQ2FzZSgpfWBcbiAgICB9KTtcbiAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYCR7YXhpcy50b1VwcGVyQ2FzZSgpfWA7XG4gICAgYXhpc1RleHQuYXBwZW5kQ2hpbGQoYXhpc0J0bik7XG5cbiAgICBsZXQgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICAgIGRpdnYuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInNoaXBQbGFjZUdyaWRcIik7XG4gICAgc2hvd1dob2xlKGdyaWQsIHBsYXllci5nYik7XG4gICAgYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGdyaWQsIHBsYXllciwgc2hpcHMsIGF4aXMpO1xuICAgIGRpdnYuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICBsZXQgc2hpcENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzaGlwQ29tbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcHNQbGFjZWRcIik7XG4gICAgc2hpcENvbW1lbnQudGV4dENvbnRlbnQgPSBgJHtzaGlwcy5sZW5ndGh9eCBzaGlwcyBsZWZ0IHRvIHBsYWNlIWA7XG4gICAgZGl2di5hcHBlbmRDaGlsZChzaGlwQ29tbWVudCk7XG5cbn1cbmZ1bmN0aW9uIHVwZGF0ZVNoaXBDb21tZW50KHNoaXBDb21tZW50LCBpbnApe1xuICAgIHNoaXBDb21tZW50LnRleHRDb250ZW50ID0gYCR7aW5wfXggc2hpcHMgbGVmdCB0byBwbGFjZSFgO1xufVxuZnVuY3Rpb24gYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGFuY2gsIHBsYXllciwgc2hpcHMsIGF4aXMpe1xuICAgIC8vdGFrZSBhbmNoLCBwbGF5ZXIsIHNoaXBzQXJyYXkgYW5kIHRoZSBjdXJyZW50IGF4aXMsIG1ha2VzIGV2ZXJ5IGNlbGwgaW4gdGhlIGFuY2hvcmVkIGdyaWQgaGF2ZSB0aGUgZXZlbnQgdG8gcGxhY2UgYSBzaGlwIGFuZCBnZXQgdGhhdCBzaGlwIG91dCBvZiB0aGUgYXJyYXksIHVwZGF0ZSB0aGUgY29tbWVudCwgaWYgc2hpcHMgYXJlIGZpbmlzaGVkIHJlbW92ZSB0aGUgc2hpcFNldHRlciBkaXYuXG4gICAgcGxheWVyLmdiLnVwZGF0ZSgpLmZvckVhY2goKGNvbHVtbiwgeCkgPT4gY29sdW1uLmZvckVhY2goKGNlbGwsIHkpID0+IHtcbiAgICAgICAgbGV0IGVsZW0gPSBhbmNoLmNoaWxkTm9kZXNbeCoxMCt5XTtcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gcGxheWVyLmdiLnBsYWNlU2hpcCh4LCB5LCBheGlzLCBzaGlwc1swXS5sZW5ndGgpO1xuICAgICAgICAgICAgaWYocGxhY2VkKXtcbiAgICAgICAgICAgICAgICBzaGlwcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlU2hpcENvbW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwc1BsYWNlZFwiKSwgc2hpcHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmKHNoaXBzLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICByZW1vdmVTaGlwU2V0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL29uY2UgeW91IGFkZCB0aGUgc2hpcCB5b3UgaGF2ZSB0byByZWZyZXNoIHRoZSBncmlkIGFuZCBhZGQgdGhlIGV2ZW50TGlzdGVuZXJzIGFnYWluXG4gICAgICAgICAgICBzaG93V2hvbGUoYW5jaCwgcGxheWVyLmdiKTtcbiAgICAgICAgICAgIGFkZEV2ZW50UGxhY2VTaGlwVG9DZWxscyhhbmNoLCBwbGF5ZXIsIHNoaXBzLCBheGlzKTtcbiAgICAgICAgfSlcbiAgICB9KSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcFNldHRlcigpe1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mcmFtZVwiKTtcbiAgICBpZihlbGVtICYmIGVsZW0hPW51bGwpe1xuICAgICAgICBlbGVtLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuXG5leHBvcnQge3Nob3dXaG9sZSwgc2hvd0hpZGRlbiwgZ2FtZSwgc2hpcFNldHRlcn0iLCJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnkuanNcIjtcblxuZnVuY3Rpb24gZ2FtZWJvYXJkRmFjdG9yeShpbnB1dFNpemUpe1xuICAgIC8vYm9hcmQgY2VsbCBzdGF0ZXM6IC0xLW1pc3MgMC1kZWZhdWx0IDEtaGl0IDItaXNTdW5rXG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgbGV0IHNoaXBzUGxhY2VkID0gW107XG4gICAgY29uc3QgZ3JpZFNpemUgPSBpbnB1dFNpemUgfHwgMTA7XG4gICAgZm9yKGxldCBpPTA7IGk8Z3JpZFNpemU7IGkrKyl7XG4gICAgICAgIC8vaW5pdGlhbGl6ZSBib2FyZCBpbiB0aGUgZGVmYXVsdCBzdGF0ZSBvZiAwXG4gICAgICAgIGJvYXJkLnB1c2goW10pO1xuICAgICAgICBmb3IobGV0IGo9MDsgajxncmlkU2l6ZTsgaisrKXtcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goe1xuICAgICAgICAgICAgICAgIHN0YXRlOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZWNlaXZlRGFtYWdlID0gKHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGNlbGwgPSBib2FyZFt4XVt5XTtcbiAgICAgICAgbGV0IGNlbGxCZWZvcmUgPSBPYmplY3QuYXNzaWduKHt9LCBjZWxsKTtcbiAgICAgICAgY29uc29sZS5sb2coY2VsbEJlZm9yZS5zdGF0ZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RFTEVURVxuICAgICAgICBjZWxsSGl0KGNlbGwpO1xuICAgICAgICB1cGRhdGUoKTsgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgY29uc29sZS5sb2coY2VsbC5zdGF0ZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RFTEVURVxuICAgICAgICBjb25zb2xlLmxvZyhjZWxsQmVmb3JlLnN0YXRlICE9IGNlbGwuc3RhdGUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vREVMRVRFXG4gICAgICAgIHJldHVybiAoY2VsbEJlZm9yZS5zdGF0ZSAhPSBjZWxsLnN0YXRlKTtcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlID0gKCk9PntcbiAgICAgICAgYm9hcmQuZm9yRWFjaChjb2x1bW4gPT4gY29sdW1uLmZvckVhY2goY2VsbCA9PiB1cGRhdGVDZWxsKGNlbGwpKSlcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgYXhpcywgbGVuZ3RoKSA9PiB7XG4gICAgICAgIGxldCBjb2xsID0gY2hlY2tDb2xsaXNpb24oeCwgeSwgYXhpcywgbGVuZ3RoKTtcbiAgICAgICAgbGV0IHNoaXA7XG4gICAgICAgIGlmKCFjb2xsKXtcbiAgICAgICAgICAgIHNoaXAgPSBzaGlwRmFjdG9yeShsZW5ndGgpO1xuICAgICAgICAgICAgYXhpcyA9IChheGlzID09IFwieFwiKTsgLy9pZiBheGlzIGlzIFgsIGl0IHdpbGwgYmUgbmV1dHJhbCB0byBpLCBvdGhlcndpc2UgaXQgd2lsbCBudWxsaWZ5IGl0LiBJdCdzIG9wcG9zaXRlIHdpbGwgZG8gdGhlIG9wcG9zaXRlLlxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGJvYXJkW3graSpheGlzXVt5K2kqIWF4aXNdLmhpdCA9ICgpID0+IHtyZXR1cm4gc2hpcC5oaXQoaSl9O1xuICAgICAgICAgICAgICAgIGJvYXJkW3graSpheGlzXVt5K2kqIWF4aXNdLmlzU3VuayA9IHNoaXAuaXNTdW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcHNQbGFjZWQucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWNvbGw7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrQ29sbGlzaW9uID0gKHgsIHksIGF4aXMsIGxlbmd0aCkgPT4ge1xuICAgICAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhIGNvbGxpc2lvbiBkZXRlY3RlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgaWYoYXhpcyA9PSBcInhcIil7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSAoeCtsZW5ndGgpID4gYm9hcmQubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlOyAgLy9jaGVjayBpZiBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGggJiYgIWNvbGxpc2lvbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgaGl0IGZ1bmN0aW9uIHRoZXJlIGlzIGEgc2hpcCwgc28gaXQgd291bGQgY29sbGlkZSwgYWxzbyBjaGVjayBpZiBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeCtpXVt5XS5oaXQpe2NvbGxpc2lvbiA9IHRydWV9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9ICh5K2xlbmd0aCkgPiBib2FyZFt4XS5sZW5ndGggPyB0cnVlIDogZmFsc2U7ICAvL2NoZWNrIGlmIG91dCBvZiBib3VuZHNcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aCAmJiAhY29sbGlzaW9uOyBpKyspe1xuICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBoaXQgZnVuY3Rpb24gdGhlcmUgaXMgYSBzaGlwLCBzbyBpdCB3b3VsZCBjb2xsaWRlXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beStpXS5oaXQpe2NvbGxpc2lvbiA9IHRydWV9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cbiAgICBjb25zdCBlbmRPZkdhbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwc1BsYWNlZC5ldmVyeShwbGFjZWQgPT4gcGxhY2VkLmlzU3VuaygpKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlY2VpdmVEYW1hZ2UsXG4gICAgICAgIHVwZGF0ZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBlbmRPZkdhbWVcbiAgICB9XG5cbiAgICAvKiB7XG4gICAgICAgIGJvYXJkW11bXVxuICAgICAgICByZWNlaXZlRGFtYWdlKClcbiAgICAgICAgdXBkYXRlQm9hcmQoKTtcbiAgICAgICAgc2hpcHNQbGFjZWRbXVxuICAgICAgICAgICAgZW5kIG9mIGdhbWU/XG4gICAgICAgICAgICBwbGFjZXNoaXBcbiAgICAgICAgICAgICAgICBvdmVybGFwP1xuICAgIH0gKi9cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2VsbChjZWxsKXtcbiAgICAvL2lmIHRoZSBzdGF0ZSBpcyAxLCB0aGUgc2hpcCBtaWdodCBoYXZlIGJlZW4gc3Vuaywgb3RoZXJ3aXNlIGl0IGNhbm5vdCBjaGFuZ2UgZHVyaW5nIHRoZSB1cGRhdGVcbiAgICBjZWxsLnN0YXRlID0gY2VsbC5zdGF0ZSA9PSAxID8gY2VsbC5oaXQoKStjZWxsLmlzU3VuaygpIDogY2VsbC5zdGF0ZTtcbiAgICByZXR1cm4gY2VsbDtcbn1cbmZ1bmN0aW9uIGNlbGxIaXQoY2VsbCl7XG4gICAgaWYoY2VsbC5oaXQpe1xuICAgICAgICBjb25zb2xlLmxvZyhgcHJlIGNhbGM6JHtjZWxsLnN0YXRlfWApXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgYSBoaXQgZnVuY3Rpb24gdGhlcmUgaXMgYSBzaGlwXG4gICAgICAgIGNlbGwuc3RhdGUgPSBjZWxsLmhpdCgpIC8qICsgY2VsbC5pc1N1bmsoKSAqLztcbiAgICB9ZWxzZXtcbiAgICAgICAgLy9vdGhlcndpc2UgaXQncyBhIG1pc3NcbiAgICAgICAgY2VsbC5zdGF0ZSA9IC0xO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbn1cblxuZXhwb3J0IHsgdXBkYXRlQ2VsbCwgY2VsbEhpdCB9XG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmRGYWN0b3J5OyIsIi8qIHNoaXAge1xuICAgIGxlbmd0aDogO1xuICAgIGhpdHBvaW50czogWzAsIDAsIDBdO1xuICAgIGhpdDogZnVuY3Rpb24gaGl0O1xuICAgIGlzU3VuazogZnVuY3Rpb24gcmV0dXJuIHN1bmsgdHJ1ZSBvciBmYWxzZTtcbn0gKi9cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXBGYWN0b3J5KGxlbmd0aCl7XG4gICAgbGV0IGhpdHBvaW50cyA9IFtdO1xuICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaGl0cG9pbnRzLnB1c2goMCk7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9IChuKSA9PiB7XG4gICAgICAgIC8vcmVnaXN0ZXJzIHRoZSBoaXQgaW4gaGl0cG9pbnRzIGFuZCByZXR1cm5zIDEuXG4gICAgICAgIGhpdHBvaW50c1tuXSA9IDE7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSBzaGlwIGlzIHN1bmtcbiAgICAgICAgcmV0dXJuIGhpdHBvaW50cy5ldmVyeShwb2ludCA9PiBwb2ludCA9PSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRwb2ludHMsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfVxufVxuXG5leHBvcnQgeyBzaGlwRmFjdG9yeSB9XG5cbi8qIG1vZHVsZS5leHBvcnRzID0ge1xuc2hpcEZhY3Rvcnlcbn0gKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnkuanNcIjsgKi9cbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnkuanNcIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0ICogYXMgZG9tU3R1ZmYgZnJvbSBcIi4vZG9tLmpzXCJcblxuXG5cblxuLyoqL1xubGV0IHAxID0ge1xuICAgIGdiOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgYW5jaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRUZXN0LnBsYXllck9uZVwiKVxufVxubGV0IHAyID0ge1xuICAgIGdiOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgYW5jaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRUZXN0LnBsYXllclR3b1wiKVxufVxucDEuZ2IucGxhY2VTaGlwKDEsIDEsIFwieFwiLCA0KTtcbnAxLmdiLnBsYWNlU2hpcCg5LDksIFwieVwiLCAxKTtcbmNvbnNvbGUudGFibGUocDEuZ2IudXBkYXRlKCkubWFwKGNvbHVtbiA9PiBjb2x1bW4ubWFwKGl0ZW09PntcbiAgICByZXR1cm4gaXRlbS5oaXQ7XG59KSkpO1xuZG9tU3R1ZmYuZ2FtZShwMSwgcDIpO1xuXG5kb21TdHVmZi5zaGlwU2V0dGVyKHAxKTtcblxuLyogZG9tU3R1ZmYuc2hvd1dob2xlKHAxLmFuY2gsIHAxLmdiKTsgKi9cbi8qKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
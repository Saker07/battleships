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
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");


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


async function shipSetter(player){
    const allShips = [{length: 3}, {length: 3}, {length: 3}];
    let ships = Array.from(allShips);
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
    resetBtn.addEventListener("click", e => {
        p1.gb = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
        console.log(ships);
        console.log(allShips);
        ships = Array.from(allShips);
        console.log(ships.length)
        showWhole(grid, player.gb);
        addEventPlaceShipToCells(grid, player, ships, axis);
    })
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
    game(p1, p2);
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





window.p1 = {
    gb: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    anch: document.querySelector(".gameboardTest.playerOne")
}
window.p2 = {
    gb: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    anch: document.querySelector(".gameboardTest.playerTwo")
}

/**/
let p1 = window.p1;
let p2 = window.p2;
p1.gb.placeShip(1, 1, "x", 4);
p1.gb.placeShip(9,9, "y", 1);
console.table(p1.gb.update().map(column => column.map(item=>{
    return item.hit;
})));
/* domStuff.game(p1, p2); */ //not needed as i can start the game everytime the setter is done, instead of on load

_dom_js__WEBPACK_IMPORTED_MODULE_2__.shipSetter(p1);

/* domStuff.showWhole(p1.anch, p1.gb); */
/**/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQSwrQ0FBK0M7QUFDSztBQUNoQztBQUNnQjs7O0FBR3BDO0FBQ0EsUUFBUSxnRUFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBZ0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwwQkFBMEI7O0FBRTFCLCtDQUFtQjs7QUFFbkIsdUNBQXVDO0FBQ3ZDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4vKnVwIHVudGlsIG5vdyBpdHMganVzdCBtb2NrIGVsZW1lbnRzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZXtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5nYW1lQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbi5nYW1lSGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBsYXllckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5nYW1lYm9hcmRUZXN0LC5mcmFtZSAuc2hpcFBsYWNlR3JpZCB7XFxuICBmbGV4LXNocmluazogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIGhlaWdodDogNDByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uaGlkZGVuQ2VsbCwuc2hvd25DZWxsIHtcXG4vKiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC4xcmVtO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4vKiBhbGlnbiBjZW50ZXIgaXMgbm90IGFsaWduIHN0cmV0Y2ggKi9cXG4vKnRvIHVzZSBib3RoIHdyYXAgaW4gZGl2IGFuZCBzdHJldGNoIG9uZSBhbmQgY2VudGVyIHRoZSBvdGhlcj8qL1xcblxcbi5mcmFtZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgd2lkdGg6IDEwMHZ3OyBcXG4gIGhlaWdodDogMTAwdmg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyBcXG4gIHRvcDogMDsgXFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZyYW1lPi5wbGFjZVNoaXBzRGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0RBQWdEO0FBQ2xEO0FBQ0E7QUFDQSwwQkFBMEI7RUFDeEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBLHNDQUFzQztBQUN0QyxnRUFBZ0U7O0FBRWhFO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4vKnVwIHVudGlsIG5vdyBpdHMganVzdCBtb2NrIGVsZW1lbnRzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZXtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5nYW1lQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbi5nYW1lSGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBsYXllckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogODB2aDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5nYW1lYm9hcmRUZXN0LC5mcmFtZSAuc2hpcFBsYWNlR3JpZCB7XFxuICBmbGV4LXNocmluazogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIGhlaWdodDogNDByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uaGlkZGVuQ2VsbCwuc2hvd25DZWxsIHtcXG4vKiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMC4xcmVtO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4vKiBhbGlnbiBjZW50ZXIgaXMgbm90IGFsaWduIHN0cmV0Y2ggKi9cXG4vKnRvIHVzZSBib3RoIHdyYXAgaW4gZGl2IGFuZCBzdHJldGNoIG9uZSBhbmQgY2VudGVyIHRoZSBvdGhlcj8qL1xcblxcbi5mcmFtZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgd2lkdGg6IDEwMHZ3OyBcXG4gIGhlaWdodDogMTAwdmg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyBcXG4gIHRvcDogMDsgXFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZyYW1lPi5wbGFjZVNoaXBzRGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnlcIjtcblxuZnVuY3Rpb24gc2hvd0hpZGRlbihhbmNoLCBnYil7XG4gICAgLy9tYWtlcyBnYW1lYm9hcmQgR0Igb24gc2NyZWVuIGJ5IHJlcGxhY2luZyBjb250ZW50IG9mIEFOQ0gsIGhpZGRlbiBtZWFucyBpdCBpcyB0aGUgXCJlbmVteSdzXCIgYm9hcmQsIHNvIHlvdSBkb24ndCBzZWUgdGhlIHNoaXBzXG4gICAgbGV0IGJvYXJkID0gZ2IudXBkYXRlKCk7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5mb3JFYWNoKGNvbHVtbiA9PiBjb2x1bW4uZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgbGV0IGhpZGRlbkMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRDbGFzc1RvQ2VsbChjZWxsLCBoaWRkZW5DKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoaGlkZGVuQyk7XG4gICAgfSkpXG4gICAgYW5jaC5pbm5lckhUTUwgPSB0YWJsZS5pbm5lckhUTUw7XG59XG5cbmZ1bmN0aW9uIHNob3dXaG9sZShhbmNoLCBnYil7XG4gICAgLy9tYWtlcyBnYW1lYm9hcmQgR0Igb24gc2NyZWVuIGJ5IHJlcGxhY2luZyBjb250ZW50IG9mIEFOQ0gsIHdob2xlIG1lYW5zIGl0IGlzIHRoZSB5b3VyIGJvYXJkLCBzbyB5b3Ugc2VlIHRoZSBzaGlwc1xuICAgIGxldCBib2FyZCA9IGdiLnVwZGF0ZSgpO1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuZm9yRWFjaChjb2x1bW4gPT4gY29sdW1uLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGxldCBzaG93bkMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRDbGFzc1RvQ2VsbChjZWxsLCBzaG93bkMpO1xuICAgICAgICBpZihjZWxsLmhpdCl7c2hvd25DLnRleHRDb250ZW50ID0gXCIqXCJ9XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHNob3duQyk7XG4gICAgfSkpXG4gICAgYW5jaC5pbm5lckhUTUwgPSB0YWJsZS5pbm5lckhUTUw7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzVG9DZWxsKGNlbGwsIGVsZW0peyAgICAvL2FkZCB0aGUgcmlnaHQgY2xhc3MgdG8gdGhlIGNlbGwgYmFzZWQgb24gaXRzIHN0YXRlXG4gICAgbGV0IHN0YXRlQ2xhc3M7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuQ2VsbFwiKTtcbiAgICBpZihjZWxsLnN0YXRlID09IDApe3N0YXRlQ2xhc3MgPSBcIm5vdEhpdFwifVxuICAgIGVsc2UgaWYoY2VsbC5zdGF0ZSA9PSAtMSl7c3RhdGVDbGFzcyA9IFwibWlzc1wifVxuICAgIGVsc2UgaWYoY2VsbC5zdGF0ZSA9PSAxKXtzdGF0ZUNsYXNzID0gXCJoaXRcIn1cbiAgICBlbHNlIGlmKGNlbGwuc3RhdGUgPT0gMil7c3RhdGVDbGFzcyA9IFwic3Vua1wifVxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChzdGF0ZUNsYXNzKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRIaXRDZWxsKGVsZW0sIHgsIHkpeyAvL2FkZCB0aGUgaGFuZGxlciBmb3IgdGhlIGhpdCB0byB0aGUgZWxlbWVudFxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAobmV4dFAuZ2IucmVjZWl2ZURhbWFnZSh4LCB5KSl7XG4gICAgICAgICAgICAvL2lmIG1vZGUgaXMgQUkgdGhlbiBjYWxsIEFJLCBvdGhlcndpc2UgY2FsbCBnYW1lIHdpdGggb3Bwb3NpdGVzLlxuICAgICAgICAgICAgaWYoQUlNb2RlID09IHRydWUpe0FJVHVybigpfVxuICAgICAgICAgICAgZWxzZXtnYW1lKG5leHRQLCBjdXJyUCl9IC8vbm90IGNvbXBsZXRlIHNpbmNlIHRoZXJlIGlzIG5vIHdheSB0byBtYW5hZ2UgbG9jYWwgbXVsdGlwbGF5ZXIgeWV0LlxuICAgICAgICB9XG4gICAgfSlcbn1cbmZ1bmN0aW9uIEFJKCl7XG4gICAgY29uc3QgaGl0UmFuZG9tID0gZnVuY3Rpb24gKHVzZXIsIHBsYXllckFJKXtcbiAgICAgICAgbGV0IGJvYXJkID0gcGxheWVyQUkuZ2IudXBkYXRlKCk7XG4gICAgICAgIGxldCB4LCB5O1xuICAgICAgICBsZXQgbWF4ID0gYm9hcmQubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGYgPSBmYWxzZTsgZj09ZmFsc2U7KXtcbiAgICAgICAgICAgIHggPSBtYXggKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgeSA9IG1heCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coeCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coeSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZVxuXG4gICAgICAgICAgICBmID0gKHVzZXIuZ2IucmVjZWl2ZURhbWFnZSh4LCB5KSk7IC8vaGl0IHJldHVybnMgdHJ1ZSBpZiBpdCBoaXQgc29tZXRoaW5nLCBmYWxzZSBpZiBpdCBkb2Vzbid0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzdWx0OiAke2Z9YClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBBSVR1cm4gPSBmdW5jdGlvbiAodXNlciwgcGxheWVyQUkpe1xuICAgICAgICAvL0NhbGwgc2hvd0hpZGVuIGFnYWluIGp1c3QgdG8gZ2V0IHJpZCBvZiBldmVudCBsaXN0ZW5lcnMgc28gdGhhdCB0aGUgdXNlciBjYW4ndCBoaXQuXG4gICAgICAgIHNob3dIaWRkZW4ocGxheWVyQUkuYW5jaCwgcGxheWVyQUkuZ2IpO1xuICAgICAgICBoaXRSYW5kb20odXNlciwgcGxheWVyQUkpO1xuICAgICAgICBnYW1lKHVzZXIsIHBsYXllckFJKTsgLy9hZ2FpbiB0aGUgQUkgaXMgYWx3YXlzIHAyIGFuZCBzbyB0aGUgdXNlciBpcyBhbHdheXMgcDFcbiAgICB9XG4gICAgcmV0dXJuIHtoaXRSYW5kb20sIEFJVHVybn1cbn1cblxuXG5cbmZ1bmN0aW9uIGdhbWUoY3VyclAsIG5leHRQKXtcbi8qIFxuICAgIHNob3dXaG9sZSBjdXJyIHBsYXllclxuICAgIHNob3cgaGlkZGVuIG5leHQgcGxheWVyXG4gICAgYWRkIGV2ZW50IHRvIG5leHQgcGxheWVyXG4gICAgICAgIHJlY2VpdmUgZGFtYWdlLCBpZiB0cnVlIGFuZCBBSW1vZGU9dHJ1ZSwgY2FsbCBBSSwgb3RoZXJ3aGlzZSwgY2FsbCBnYW1lKGludmVyc28pXG4gICAgICAgICAgICAqL1xuICAgIGNvbnN0IEFJTW9kZSA9IHRydWU7XG4gICAgY29uc29sZS50YWJsZShjdXJyUC5nYi51cGRhdGUoKS5tYXAoY29sdW1uID0+IGNvbHVtbi5tYXAoaXRlbT0+eyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlXG4gICAgICAgIHJldHVybiBpdGVtLnN0YXRlO1xuICAgIH0pKSlcbiAgICBzaG93V2hvbGUoY3VyclAuYW5jaCwgY3VyclAuZ2IpO1xuICAgIHNob3dIaWRkZW4obmV4dFAuYW5jaCwgbmV4dFAuZ2IpO1xuICAgIG5leHRQLmdiLnVwZGF0ZSgpLmZvckVhY2goKGNvbHVtbiwgeCkgPT4gY29sdW1uLmZvckVhY2goKGNlbGwsIHkpID0+IHsgLy9mb3IgZXZlcnkgY2VsbCBpbiB0aGUgYm9hcmRcbiAgICAgICAgbGV0IGVsZW0gPSBuZXh0UC5hbmNoLmNoaWxkTm9kZXNbeCoxMCt5XTtcbiAgICAgICAgYWRkRXZlbnRIaXRDZWxsKGVsZW0sIHgsIHkpO1xuICAgIH0pKVxuXG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudEhpdENlbGwoZWxlbSwgeCwgeSl7IC8vYWRkIHRoZSBoYW5kbGVyIGZvciB0aGUgaGl0IHRvIHRoZSBlbGVtZW50XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKG5leHRQLmdiLnJlY2VpdmVEYW1hZ2UoeCwgeSkpe1xuICAgICAgICAgICAgICAgIC8vaWYgbW9kZSBpcyBBSSB0aGVuIGNhbGwgQUksIG90aGVyd2lzZSBjYWxsIGdhbWUgd2l0aCBvcHBvc2l0ZXMuXG4gICAgICAgICAgICAgICAgaWYoQUlNb2RlID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBBSVR1cm4oY3VyclAsIG5leHRQKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtnYW1lKG5leHRQLCBjdXJyUCl9IC8vbm90IGNvbXBsZXRlIHNpbmNlIHRoZXJlIGlzIG5vIHdheSB0byBtYW5hZ2UgbG9jYWwgbXVsdGlwbGF5ZXIgeWV0LlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCB7QUlUdXJuLCBoaXRSYW5kb219ID0gQUkoKTtcbn07XG5cblxuYXN5bmMgZnVuY3Rpb24gc2hpcFNldHRlcihwbGF5ZXIpe1xuICAgIGNvbnN0IGFsbFNoaXBzID0gW3tsZW5ndGg6IDN9LCB7bGVuZ3RoOiAzfSwge2xlbmd0aDogM31dO1xuICAgIGxldCBzaGlwcyA9IEFycmF5LmZyb20oYWxsU2hpcHMpO1xuICAgIGxldCBheGlzID0gXCJ4XCI7XG5cbiAgICBsZXQgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoXCJmcmFtZVwiKTsgICAgICAgICAgICAgIC8vXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmcmFtZSk7XG5cbiAgICBsZXQgZGl2diA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2di5jbGFzc0xpc3QuYWRkKFwicGxhY2VTaGlwc0RpdlwiKTsgICAgICAgICAgICAgICAgLy9cbiAgICBmcmFtZS5hcHBlbmRDaGlsZChkaXZ2KTtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBzaGlwcyFcIjtcbiAgICBkaXZ2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGxldCBheGlzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICBheGlzVGV4dC50ZXh0Q29udGVudCA9IFwiQ3VycmVudCBheGlzOiBcIjtcbiAgICBkaXZ2LmFwcGVuZENoaWxkKGF4aXNUZXh0KTtcbiAgICBsZXQgYXhpc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGF4aXMgPSBheGlzID09IFwieFwiID8gXCJ5XCIgOiBcInhcIjtcbiAgICAgICAgYXhpc0J0bi50ZXh0Q29udGVudCA9IGAke2F4aXMudG9VcHBlckNhc2UoKX1gXG4gICAgfSk7XG4gICAgYXhpc0J0bi50ZXh0Q29udGVudCA9IGAke2F4aXMudG9VcHBlckNhc2UoKX1gO1xuICAgIGF4aXNUZXh0LmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuXG4gICAgbGV0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIHAxLmdiID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFNoaXBzKTtcbiAgICAgICAgc2hpcHMgPSBBcnJheS5mcm9tKGFsbFNoaXBzKTtcbiAgICAgICAgY29uc29sZS5sb2coc2hpcHMubGVuZ3RoKVxuICAgICAgICBzaG93V2hvbGUoZ3JpZCwgcGxheWVyLmdiKTtcbiAgICAgICAgYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGdyaWQsIHBsYXllciwgc2hpcHMsIGF4aXMpO1xuICAgIH0pXG4gICAgZGl2di5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG5cbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwic2hpcFBsYWNlR3JpZFwiKTtcbiAgICBzaG93V2hvbGUoZ3JpZCwgcGxheWVyLmdiKTtcbiAgICBhZGRFdmVudFBsYWNlU2hpcFRvQ2VsbHMoZ3JpZCwgcGxheWVyLCBzaGlwcywgYXhpcyk7XG4gICAgZGl2di5hcHBlbmRDaGlsZChncmlkKTtcblxuICAgIGxldCBzaGlwQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNoaXBDb21tZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwc1BsYWNlZFwiKTtcbiAgICBzaGlwQ29tbWVudC50ZXh0Q29udGVudCA9IGAke3NoaXBzLmxlbmd0aH14IHNoaXBzIGxlZnQgdG8gcGxhY2UhYDtcbiAgICBkaXZ2LmFwcGVuZENoaWxkKHNoaXBDb21tZW50KTtcblxufVxuZnVuY3Rpb24gdXBkYXRlU2hpcENvbW1lbnQoc2hpcENvbW1lbnQsIGlucCl7XG4gICAgc2hpcENvbW1lbnQudGV4dENvbnRlbnQgPSBgJHtpbnB9eCBzaGlwcyBsZWZ0IHRvIHBsYWNlIWA7XG59XG5mdW5jdGlvbiBhZGRFdmVudFBsYWNlU2hpcFRvQ2VsbHMoYW5jaCwgcGxheWVyLCBzaGlwcywgYXhpcyl7XG4gICAgLy90YWtlIGFuY2gsIHBsYXllciwgc2hpcHNBcnJheSBhbmQgdGhlIGN1cnJlbnQgYXhpcywgbWFrZXMgZXZlcnkgY2VsbCBpbiB0aGUgYW5jaG9yZWQgZ3JpZCBoYXZlIHRoZSBldmVudCB0byBwbGFjZSBhIHNoaXAgYW5kIGdldCB0aGF0IHNoaXAgb3V0IG9mIHRoZSBhcnJheSwgdXBkYXRlIHRoZSBjb21tZW50LCBpZiBzaGlwcyBhcmUgZmluaXNoZWQgcmVtb3ZlIHRoZSBzaGlwU2V0dGVyIGRpdi5cbiAgICBwbGF5ZXIuZ2IudXBkYXRlKCkuZm9yRWFjaCgoY29sdW1uLCB4KSA9PiBjb2x1bW4uZm9yRWFjaCgoY2VsbCwgeSkgPT4ge1xuICAgICAgICBsZXQgZWxlbSA9IGFuY2guY2hpbGROb2Rlc1t4KjEwK3ldO1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBwbGF5ZXIuZ2IucGxhY2VTaGlwKHgsIHksIGF4aXMsIHNoaXBzWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICBpZihwbGFjZWQpe1xuICAgICAgICAgICAgICAgIHNoaXBzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVTaGlwQ29tbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzUGxhY2VkXCIpLCBzaGlwcy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYoc2hpcHMubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgIHJlbW92ZVNoaXBTZXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vb25jZSB5b3UgYWRkIHRoZSBzaGlwIHlvdSBoYXZlIHRvIHJlZnJlc2ggdGhlIGdyaWQgYW5kIGFkZCB0aGUgZXZlbnRMaXN0ZW5lcnMgYWdhaW5cbiAgICAgICAgICAgIHNob3dXaG9sZShhbmNoLCBwbGF5ZXIuZ2IpO1xuICAgICAgICAgICAgYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGFuY2gsIHBsYXllciwgc2hpcHMsIGF4aXMpO1xuICAgICAgICB9KVxuICAgIH0pKVxufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwU2V0dGVyKCl7XG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyYW1lXCIpO1xuICAgIGlmKGVsZW0gJiYgZWxlbSE9bnVsbCl7XG4gICAgICAgIGVsZW0ucmVtb3ZlKCk7XG4gICAgfVxuICAgIGdhbWUocDEsIHAyKTtcbn1cblxuXG5leHBvcnQge3Nob3dXaG9sZSwgc2hvd0hpZGRlbiwgZ2FtZSwgc2hpcFNldHRlcn0iLCJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnkuanNcIjtcblxuZnVuY3Rpb24gZ2FtZWJvYXJkRmFjdG9yeShpbnB1dFNpemUpe1xuICAgIC8vYm9hcmQgY2VsbCBzdGF0ZXM6IC0xLW1pc3MgMC1kZWZhdWx0IDEtaGl0IDItaXNTdW5rXG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgbGV0IHNoaXBzUGxhY2VkID0gW107XG4gICAgY29uc3QgZ3JpZFNpemUgPSBpbnB1dFNpemUgfHwgMTA7XG4gICAgZm9yKGxldCBpPTA7IGk8Z3JpZFNpemU7IGkrKyl7XG4gICAgICAgIC8vaW5pdGlhbGl6ZSBib2FyZCBpbiB0aGUgZGVmYXVsdCBzdGF0ZSBvZiAwXG4gICAgICAgIGJvYXJkLnB1c2goW10pO1xuICAgICAgICBmb3IobGV0IGo9MDsgajxncmlkU2l6ZTsgaisrKXtcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2goe1xuICAgICAgICAgICAgICAgIHN0YXRlOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZWNlaXZlRGFtYWdlID0gKHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGNlbGwgPSBib2FyZFt4XVt5XTtcbiAgICAgICAgbGV0IGNlbGxCZWZvcmUgPSBPYmplY3QuYXNzaWduKHt9LCBjZWxsKTtcbiAgICAgICAgY29uc29sZS5sb2coY2VsbEJlZm9yZS5zdGF0ZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RFTEVURVxuICAgICAgICBjZWxsSGl0KGNlbGwpO1xuICAgICAgICB1cGRhdGUoKTsgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgY29uc29sZS5sb2coY2VsbC5zdGF0ZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RFTEVURVxuICAgICAgICBjb25zb2xlLmxvZyhjZWxsQmVmb3JlLnN0YXRlICE9IGNlbGwuc3RhdGUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vREVMRVRFXG4gICAgICAgIHJldHVybiAoY2VsbEJlZm9yZS5zdGF0ZSAhPSBjZWxsLnN0YXRlKTtcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlID0gKCk9PntcbiAgICAgICAgYm9hcmQuZm9yRWFjaChjb2x1bW4gPT4gY29sdW1uLmZvckVhY2goY2VsbCA9PiB1cGRhdGVDZWxsKGNlbGwpKSlcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgYXhpcywgbGVuZ3RoKSA9PiB7XG4gICAgICAgIGxldCBjb2xsID0gY2hlY2tDb2xsaXNpb24oeCwgeSwgYXhpcywgbGVuZ3RoKTtcbiAgICAgICAgbGV0IHNoaXA7XG4gICAgICAgIGlmKCFjb2xsKXtcbiAgICAgICAgICAgIHNoaXAgPSBzaGlwRmFjdG9yeShsZW5ndGgpO1xuICAgICAgICAgICAgYXhpcyA9IChheGlzID09IFwieFwiKTsgLy9pZiBheGlzIGlzIFgsIGl0IHdpbGwgYmUgbmV1dHJhbCB0byBpLCBvdGhlcndpc2UgaXQgd2lsbCBudWxsaWZ5IGl0LiBJdCdzIG9wcG9zaXRlIHdpbGwgZG8gdGhlIG9wcG9zaXRlLlxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGJvYXJkW3graSpheGlzXVt5K2kqIWF4aXNdLmhpdCA9ICgpID0+IHtyZXR1cm4gc2hpcC5oaXQoaSl9O1xuICAgICAgICAgICAgICAgIGJvYXJkW3graSpheGlzXVt5K2kqIWF4aXNdLmlzU3VuayA9IHNoaXAuaXNTdW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcHNQbGFjZWQucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWNvbGw7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrQ29sbGlzaW9uID0gKHgsIHksIGF4aXMsIGxlbmd0aCkgPT4ge1xuICAgICAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhIGNvbGxpc2lvbiBkZXRlY3RlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgaWYoYXhpcyA9PSBcInhcIil7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSAoeCtsZW5ndGgpID4gYm9hcmQubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlOyAgLy9jaGVjayBpZiBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGggJiYgIWNvbGxpc2lvbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgaGl0IGZ1bmN0aW9uIHRoZXJlIGlzIGEgc2hpcCwgc28gaXQgd291bGQgY29sbGlkZSwgYWxzbyBjaGVjayBpZiBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeCtpXVt5XS5oaXQpe2NvbGxpc2lvbiA9IHRydWV9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9ICh5K2xlbmd0aCkgPiBib2FyZFt4XS5sZW5ndGggPyB0cnVlIDogZmFsc2U7ICAvL2NoZWNrIGlmIG91dCBvZiBib3VuZHNcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aCAmJiAhY29sbGlzaW9uOyBpKyspe1xuICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBoaXQgZnVuY3Rpb24gdGhlcmUgaXMgYSBzaGlwLCBzbyBpdCB3b3VsZCBjb2xsaWRlXG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beStpXS5oaXQpe2NvbGxpc2lvbiA9IHRydWV9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cbiAgICBjb25zdCBlbmRPZkdhbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwc1BsYWNlZC5ldmVyeShwbGFjZWQgPT4gcGxhY2VkLmlzU3VuaygpKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlY2VpdmVEYW1hZ2UsXG4gICAgICAgIHVwZGF0ZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBlbmRPZkdhbWVcbiAgICB9XG5cbiAgICAvKiB7XG4gICAgICAgIGJvYXJkW11bXVxuICAgICAgICByZWNlaXZlRGFtYWdlKClcbiAgICAgICAgdXBkYXRlQm9hcmQoKTtcbiAgICAgICAgc2hpcHNQbGFjZWRbXVxuICAgICAgICAgICAgZW5kIG9mIGdhbWU/XG4gICAgICAgICAgICBwbGFjZXNoaXBcbiAgICAgICAgICAgICAgICBvdmVybGFwP1xuICAgIH0gKi9cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2VsbChjZWxsKXtcbiAgICAvL2lmIHRoZSBzdGF0ZSBpcyAxLCB0aGUgc2hpcCBtaWdodCBoYXZlIGJlZW4gc3Vuaywgb3RoZXJ3aXNlIGl0IGNhbm5vdCBjaGFuZ2UgZHVyaW5nIHRoZSB1cGRhdGVcbiAgICBjZWxsLnN0YXRlID0gY2VsbC5zdGF0ZSA9PSAxID8gY2VsbC5oaXQoKStjZWxsLmlzU3VuaygpIDogY2VsbC5zdGF0ZTtcbiAgICByZXR1cm4gY2VsbDtcbn1cbmZ1bmN0aW9uIGNlbGxIaXQoY2VsbCl7XG4gICAgaWYoY2VsbC5oaXQpe1xuICAgICAgICBjb25zb2xlLmxvZyhgcHJlIGNhbGM6JHtjZWxsLnN0YXRlfWApXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgYSBoaXQgZnVuY3Rpb24gdGhlcmUgaXMgYSBzaGlwXG4gICAgICAgIGNlbGwuc3RhdGUgPSBjZWxsLmhpdCgpIC8qICsgY2VsbC5pc1N1bmsoKSAqLztcbiAgICB9ZWxzZXtcbiAgICAgICAgLy9vdGhlcndpc2UgaXQncyBhIG1pc3NcbiAgICAgICAgY2VsbC5zdGF0ZSA9IC0xO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbn1cblxuZXhwb3J0IHsgdXBkYXRlQ2VsbCwgY2VsbEhpdCB9XG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmRGYWN0b3J5OyIsIi8qIHNoaXAge1xuICAgIGxlbmd0aDogO1xuICAgIGhpdHBvaW50czogWzAsIDAsIDBdO1xuICAgIGhpdDogZnVuY3Rpb24gaGl0O1xuICAgIGlzU3VuazogZnVuY3Rpb24gcmV0dXJuIHN1bmsgdHJ1ZSBvciBmYWxzZTtcbn0gKi9cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXBGYWN0b3J5KGxlbmd0aCl7XG4gICAgbGV0IGhpdHBvaW50cyA9IFtdO1xuICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaGl0cG9pbnRzLnB1c2goMCk7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9IChuKSA9PiB7XG4gICAgICAgIC8vcmVnaXN0ZXJzIHRoZSBoaXQgaW4gaGl0cG9pbnRzIGFuZCByZXR1cm5zIDEuXG4gICAgICAgIGhpdHBvaW50c1tuXSA9IDE7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSBzaGlwIGlzIHN1bmtcbiAgICAgICAgcmV0dXJuIGhpdHBvaW50cy5ldmVyeShwb2ludCA9PiBwb2ludCA9PSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRwb2ludHMsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfVxufVxuXG5leHBvcnQgeyBzaGlwRmFjdG9yeSB9XG5cbi8qIG1vZHVsZS5leHBvcnRzID0ge1xuc2hpcEZhY3Rvcnlcbn0gKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnkuanNcIjsgKi9cbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnkuanNcIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0ICogYXMgZG9tU3R1ZmYgZnJvbSBcIi4vZG9tLmpzXCJcblxuXG53aW5kb3cucDEgPSB7XG4gICAgZ2I6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICBhbmNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZFRlc3QucGxheWVyT25lXCIpXG59XG53aW5kb3cucDIgPSB7XG4gICAgZ2I6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICBhbmNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZFRlc3QucGxheWVyVHdvXCIpXG59XG5cbi8qKi9cbmxldCBwMSA9IHdpbmRvdy5wMTtcbmxldCBwMiA9IHdpbmRvdy5wMjtcbnAxLmdiLnBsYWNlU2hpcCgxLCAxLCBcInhcIiwgNCk7XG5wMS5nYi5wbGFjZVNoaXAoOSw5LCBcInlcIiwgMSk7XG5jb25zb2xlLnRhYmxlKHAxLmdiLnVwZGF0ZSgpLm1hcChjb2x1bW4gPT4gY29sdW1uLm1hcChpdGVtPT57XG4gICAgcmV0dXJuIGl0ZW0uaGl0O1xufSkpKTtcbi8qIGRvbVN0dWZmLmdhbWUocDEsIHAyKTsgKi8gLy9ub3QgbmVlZGVkIGFzIGkgY2FuIHN0YXJ0IHRoZSBnYW1lIGV2ZXJ5dGltZSB0aGUgc2V0dGVyIGlzIGRvbmUsIGluc3RlYWQgb2Ygb24gbG9hZFxuXG5kb21TdHVmZi5zaGlwU2V0dGVyKHAxKTtcblxuLyogZG9tU3R1ZmYuc2hvd1dob2xlKHAxLmFuY2gsIHAxLmdiKTsgKi9cbi8qKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
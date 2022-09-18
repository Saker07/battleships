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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/*up until now its just mock elements */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  flex-direction: column;\n  background-color: rgba(134, 150, 155, 0.479);\n}\n\n.title{\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\nh1 {\n  margin-top: 1em;\n  font-size: 3rem;\n  font-weight: bolder;\n  margin-bottom: 1rem;\n}\n.resetBtn {\n  font-size:1.6rem;\n}\n\n.gameContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.gameHeader {\n  width: 100%;\n}\nh3 {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2rem;\n}\n\n.gameboardTest,.frame .shipPlaceGrid {\n  flex-shrink: 1;\n  background-color: red;\n  width: 40rem;\n  height: 40rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n.hiddenCell,.shownCell {\n/*   position: absolute; */\n  background-color: blue;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1rem;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 100ms linear;\n}\n.hiddenCell:hover:not(.sunk):not(.miss):not(.hit){\n  background-color: rgb(33 0 213 / 65%);;\n}\n.placedShown {\n  background-color: pink;\n}\n.miss {\n  background-color: rgb(255, 255, 255);\n  \n}\n.hit {\n  background-color: rgb(161, 199, 26);\n}\n.sunk {\n  background-color: rgb(255, 0, 0);\n}\n\n/* align center is not align stretch */\n/*to use both wrap in div and stretch one and center the other?*/\n\n.frame {\n  position: absolute; \n  width: 100vw; \n  height: 100vh; \n  background-color: rgba(0, 0, 0, 0.5); \n  top: 0; \n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.frame>.placeShipsDiv {\n  background-color: white;\n  opacity: 1;\n  padding: 2rem;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  box-shadow: 0.5rem 0.5rem 0.5rem 0.2rem rgba(0, 0, 0, 0.603);\n}\n\n.frame{\n  font-size: 1.3rem;\n  font-weight: bolder;\n}\n.frame h5{\n  font-size: 1.7rem;\n}\n\nbutton {\n  font-size: 1.2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA,uCAAuC;AACvC;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,gDAAgD;AAClD;AACA;AACA,0BAA0B;EACxB,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yCAAyC;AAC3C;AACA;EACE,qCAAqC;AACvC;AACA;EACE,sBAAsB;AACxB;AACA;EACE,oCAAoC;;AAEtC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,gCAAgC;AAClC;;AAEA,sCAAsC;AACtC,gEAAgE;;AAEhE;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,MAAM;EACN,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,4DAA4D;AAC9D;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["\n\n/*up until now its just mock elements */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  flex-direction: column;\n  background-color: rgba(134, 150, 155, 0.479);\n}\n\n.title{\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\nh1 {\n  margin-top: 1em;\n  font-size: 3rem;\n  font-weight: bolder;\n  margin-bottom: 1rem;\n}\n.resetBtn {\n  font-size:1.6rem;\n}\n\n.gameContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.gameHeader {\n  width: 100%;\n}\nh3 {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2rem;\n}\n\n.gameboardTest,.frame .shipPlaceGrid {\n  flex-shrink: 1;\n  background-color: red;\n  width: 40rem;\n  height: 40rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n.hiddenCell,.shownCell {\n/*   position: absolute; */\n  background-color: blue;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1rem;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 100ms linear;\n}\n.hiddenCell:hover:not(.sunk):not(.miss):not(.hit){\n  background-color: rgb(33 0 213 / 65%);;\n}\n.placedShown {\n  background-color: pink;\n}\n.miss {\n  background-color: rgb(255, 255, 255);\n  \n}\n.hit {\n  background-color: rgb(161, 199, 26);\n}\n.sunk {\n  background-color: rgb(255, 0, 0);\n}\n\n/* align center is not align stretch */\n/*to use both wrap in div and stretch one and center the other?*/\n\n.frame {\n  position: absolute; \n  width: 100vw; \n  height: 100vh; \n  background-color: rgba(0, 0, 0, 0.5); \n  top: 0; \n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.frame>.placeShipsDiv {\n  background-color: white;\n  opacity: 1;\n  padding: 2rem;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  box-shadow: 0.5rem 0.5rem 0.5rem 0.2rem rgba(0, 0, 0, 0.603);\n}\n\n.frame{\n  font-size: 1.3rem;\n  font-weight: bolder;\n}\n.frame h5{\n  font-size: 1.7rem;\n}\n\nbutton {\n  font-size: 1.2rem;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "resetGame": () => (/* binding */ resetGame),
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
        addClassToCell(cell, hiddenC, "hiddenCell");
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
        addClassToCell(cell, shownC, "shownCell");
        if(cell.hit){
            shownC.textContent = "⬤";
            shownC.classList.add("placedShown")
        }
        table.appendChild(shownC);
    }))
    anch.innerHTML = table.innerHTML;
}

function addClassToCell(cell, elem, showType){    //add the right class to the cell based on its state
    let stateClass;
    elem.classList.add(showType);
    if(cell.state == 0){stateClass = "notHit"}
    else if(cell.state == -1){stateClass = "miss"}
    else if(cell.state == 1){stateClass = "hit"}
    else if(cell.state == 2){stateClass = "sunk"}
    elem.classList.add(stateClass);
}

/* function addEventHitCell(elem, x, y){ //add the handler for the hit to the element
    elem.addEventListener("click", e => {
        if (nextP.gb.receiveDamage(x, y)){
            //if mode is AI then call AI, otherwise call game with opposites.
            if(window.AIMode == true){AITurn()}
            else{game(nextP, currP)} //not complete since there is no way to manage local multiplayer yet.
        }
    })
} */
const timer = (milliseconds)=>{
    return new Promise(
        (toCall)=>{setTimeout(toCall, milliseconds)});
}
function AI(){
    const selectRandomCell= function (board){
        //returns a random x,y pair in a square board.
        let max = board.length;
        let x, y;
        x = max * Math.random();
        y = max * Math.random();
        x = Math.floor(x);
        y = Math.floor(y);
        return {x, y};
    }

    const hitRandom = function (user, playerAI){
        let board = playerAI.gb.update();
        let x, y;
        let flag = false;
        while(flag==false){
            ({x, y} = selectRandomCell(board));
            flag = user.gb.receiveDamage(x, y); //hit returns true if it hit something, false if it doesn't
        }
    }

    const placeRandom = function (AIgb, shipLength){
        let flag = false;
        while(flag == false){
            let {x, y} = selectRandomCell(AIgb.update());
            let axis = Math.random() > 0.5 ? "x" : "y";
            flag = !!(
                AIgb.placeShip(x, y, axis, shipLength)
            );
            console.log("PROBLEM=====")
        }
    }
    const placeAllRandomShips = function (AIgb){
        window.allShips.forEach(item => {
            placeRandom(AIgb, item.length)
        })
    }

    

    const AITurn = function (user, playerAI){
        hitRandom(user, playerAI);
        timer(500).then(()=>{
            if(alertOnGameEnd(user, playerAI)){
                return;
            } else {
                game(user, playerAI); //again the AI is always p2 and so the user is always p1
            }
        });
    }
    return {hitRandom, AITurn, placeAllRandomShips}
}

function alertOnGameEnd(loser, winner){
    if (loser.gb.endOfGame()) {
        timer(500).then(()=>{
            alert(`
            ${winner.name} won!
            The game will now be reset.`)
            resetGame();
        });
        return true;
    } else {
        return false
    }
}


function game(currP, nextP){
    //starts the game, the player board should already be ready with all ships placed when this is called.
    const {AITurn} = AI();
    showWhole(currP.anch, currP.gb);
    showHidden(nextP.anch, nextP.gb);
    nextP.gb.update().forEach((column, x) => column.forEach((cell, y) => { //for every cell in the board
        //add event to trigger the hit
        let elem = nextP.anch.childNodes[x*10+y];
        addEventHitCell(elem, x, y);
    }))




    function addEventHitCell(elem, x, y){ //add the handler for the hit to the element
        elem.addEventListener("click", e => {
            if (nextP.gb.receiveDamage(x, y)){
                //Call showHiden again just to get rid of event listeners so that the user can't hit multiple times.
                showHidden(nextP.anch, nextP.gb);
                if(alertOnGameEnd(nextP, currP)){

                } else if(window.AIMode == true){
                    //if mode is AI then call AI, otherwise call game with opposites.
                    AITurn(currP, nextP);
                } else {
                    //not complete since multiplayer is not implemented yet.
                    game(nextP, currP);
                }
            }
        })
    }
};

function resetGame(){
    window.p1.gb = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
    window.p2.gb = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
    shipSetter(p1);
}


function shipSetter(player){
    const allShips = window.allShips || [{length: 3}, {length: 3}, {length: 3}];
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

    let axisText = document.createElement("p");
    axisText.textContent = "Current axis: ";
    divv.appendChild(axisText);
    let axisBtn = document.createElement("button");
    console.log(axis);
    axisBtn.addEventListener("click", e => {
        console.log(axis);
        axis = axis == "x" ? "y" : "x";
        console.log(axis);
        axisBtn.textContent = `${axis.toUpperCase()}`
        showWhole(grid, player.gb);
        addEventPlaceShipToCells(grid, player, ships, axis);
    });
    axisBtn.textContent = `${axis.toUpperCase()}`;
    axisText.appendChild(axisBtn);

    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", e => {
        p1.gb = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
        let currIndex = x*10+y;
        let elem = anch.childNodes[currIndex];
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
        });
        elem.addEventListener("mouseover", e => {
            //check collision on cell corrisponding to this div, if no collision detected, show hover!
            let coll = player.gb.checkCollision(x, y, axis, ships[0].length);
            if(!coll){
                let i, j;
                for(i = 0, j = 0; i<ships[0].length; i++){
                    anch.childNodes[currIndex+j].style.backgroundColor = "pink";
                    j = axis == "x" ? j+10 : i+1;
                }
            }
        });
        elem.addEventListener("mouseout", e => {
            //check collision on cell corrisponding to this div, if no collision detected, show hover!
            let i, j;
            if(elem.textContent != "⬤")
                for(i = 0, j = 0; i<ships[0].length; i++){
                    anch.childNodes[currIndex+j].style.backgroundColor = "";
                    j = axis == "x" ? j+10 : i+1;
                }
        });
    }))
}

function removeShipSetter(){
    let elem = document.querySelector(".frame");
    if(elem && elem!=null){
        elem.remove();
    }
    if(window.AIMode == true){
        //if the mode is AI, populate the p2 board (p2 is always the AI)
        AI().placeAllRandomShips(p2.gb);
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
        endOfGame,
        checkCollision
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
    name: "Player 1",
    gb: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    anch: document.querySelector(".gameboardTest.playerOne")
}
window.p2 = {
    name: "Player 2",
    gb: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    anch: document.querySelector(".gameboardTest.playerTwo")
}
window.allShips = [{length: 5}, {length: 4}, {length: 3}, {length: 3}, {length: 2}, {length: 1}];
window.AIMode = true; //when multiplayer implemented this needs to be changed to false

const mainResetBtn = document.querySelector(".resetBtn.mainBtn");
mainResetBtn.addEventListener("click", _dom_js__WEBPACK_IMPORTED_MODULE_2__.resetGame)


/**/
let p1 = window.p1;
let p2 = window.p2;
p1.gb.placeShip(1, 1, "x", 4);
p1.gb.placeShip(9,9, "y", 1);
console.table(p1.gb.update().map(column => column.map(item=>{
    return item.hit;
})));
/* domStuff.game(p1, p2); */ //not needed as i can start the game everytime the setter is done, instead of on load

/* domStuff.shipSetter(p1); */
_dom_js__WEBPACK_IMPORTED_MODULE_2__.resetGame();


/* domStuff.showWhole(p1.anch, p1.gb); */
/**/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQSwrQ0FBK0M7QUFDSztBQUNoQztBQUNnQjs7O0FBR3BDO0FBQ0E7QUFDQSxRQUFRLGdFQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVO0FBQy9GLHNCQUFzQjs7QUFFdEI7QUFDQSx1Q0FBdUMsOENBQWtCOzs7QUFHekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMEJBQTBCOztBQUUxQiw0QkFBNEI7QUFDNUIsOENBQWtCOzs7QUFHbEIsdUNBQXVDO0FBQ3ZDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4vKnVwIHVudGlsIG5vdyBpdHMganVzdCBtb2NrIGVsZW1lbnRzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNCwgMTUwLCAxNTUsIDAuNDc5KTtcXG59XFxuXFxuLnRpdGxle1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5yZXNldEJ0biB7XFxuICBmb250LXNpemU6MS42cmVtO1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uZ2FtZUhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkVGVzdCwuZnJhbWUgLnNoaXBQbGFjZUdyaWQge1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNDByZW07XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmhpZGRlbkNlbGwsLnNob3duQ2VsbCB7XFxuLyogICBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xcbn1cXG4uaGlkZGVuQ2VsbDpob3Zlcjpub3QoLnN1bmspOm5vdCgubWlzcyk6bm90KC5oaXQpe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzIDAgMjEzIC8gNjUlKTs7XFxufVxcbi5wbGFjZWRTaG93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxOTksIDI2KTtcXG59XFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi8qIGFsaWduIGNlbnRlciBpcyBub3QgYWxpZ24gc3RyZXRjaCAqL1xcbi8qdG8gdXNlIGJvdGggd3JhcCBpbiBkaXYgYW5kIHN0cmV0Y2ggb25lIGFuZCBjZW50ZXIgdGhlIG90aGVyPyovXFxuXFxuLmZyYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICB3aWR0aDogMTAwdnc7IFxcbiAgaGVpZ2h0OiAxMDB2aDsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IFxcbiAgdG9wOiAwOyBcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZnJhbWU+LnBsYWNlU2hpcHNEaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuNjAzKTtcXG59XFxuXFxuLmZyYW1le1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uZnJhbWUgaDV7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdEQUFnRDtBQUNsRDtBQUNBO0FBQ0EsMEJBQTBCO0VBQ3hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0NBQW9DOztBQUV0QztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUEsc0NBQXNDO0FBQ3RDLGdFQUFnRTs7QUFFaEU7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLyp1cCB1bnRpbCBub3cgaXRzIGp1c3QgbW9jayBlbGVtZW50cyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzQsIDE1MCwgMTU1LCAwLjQ3OSk7XFxufVxcblxcbi50aXRsZXtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ucmVzZXRCdG4ge1xcbiAgZm9udC1zaXplOjEuNnJlbTtcXG59XFxuXFxuLmdhbWVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLmdhbWVIZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmdhbWVib2FyZFRlc3QsLmZyYW1lIC5zaGlwUGxhY2VHcmlkIHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5oaWRkZW5DZWxsLC5zaG93bkNlbGwge1xcbi8qICAgcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcXG59XFxuLmhpZGRlbkNlbGw6aG92ZXI6bm90KC5zdW5rKTpub3QoLm1pc3MpOm5vdCguaGl0KXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMyAwIDIxMyAvIDY1JSk7O1xcbn1cXG4ucGxhY2VkU2hvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgXFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTk5LCAyNik7XFxufVxcbi5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4vKiBhbGlnbiBjZW50ZXIgaXMgbm90IGFsaWduIHN0cmV0Y2ggKi9cXG4vKnRvIHVzZSBib3RoIHdyYXAgaW4gZGl2IGFuZCBzdHJldGNoIG9uZSBhbmQgY2VudGVyIHRoZSBvdGhlcj8qL1xcblxcbi5mcmFtZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgd2lkdGg6IDEwMHZ3OyBcXG4gIGhlaWdodDogMTAwdmg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyBcXG4gIHRvcDogMDsgXFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZyYW1lPi5wbGFjZVNoaXBzRGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjYwMyk7XFxufVxcblxcbi5mcmFtZXtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmZyYW1lIGg1e1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tIFwiLi9nYW1lYm9hcmRGYWN0b3J5XCI7XG5cbmZ1bmN0aW9uIHNob3dIaWRkZW4oYW5jaCwgZ2Ipe1xuICAgIC8vbWFrZXMgZ2FtZWJvYXJkIEdCIG9uIHNjcmVlbiBieSByZXBsYWNpbmcgY29udGVudCBvZiBBTkNILCBoaWRkZW4gbWVhbnMgaXQgaXMgdGhlIFwiZW5lbXknc1wiIGJvYXJkLCBzbyB5b3UgZG9uJ3Qgc2VlIHRoZSBzaGlwc1xuICAgIGxldCBib2FyZCA9IGdiLnVwZGF0ZSgpO1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuZm9yRWFjaChjb2x1bW4gPT4gY29sdW1uLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGxldCBoaWRkZW5DID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkQ2xhc3NUb0NlbGwoY2VsbCwgaGlkZGVuQywgXCJoaWRkZW5DZWxsXCIpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChoaWRkZW5DKTtcbiAgICB9KSlcbiAgICBhbmNoLmlubmVySFRNTCA9IHRhYmxlLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gc2hvd1dob2xlKGFuY2gsIGdiKXtcbiAgICAvL21ha2VzIGdhbWVib2FyZCBHQiBvbiBzY3JlZW4gYnkgcmVwbGFjaW5nIGNvbnRlbnQgb2YgQU5DSCwgd2hvbGUgbWVhbnMgaXQgaXMgdGhlIHlvdXIgYm9hcmQsIHNvIHlvdSBzZWUgdGhlIHNoaXBzXG4gICAgbGV0IGJvYXJkID0gZ2IudXBkYXRlKCk7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5mb3JFYWNoKGNvbHVtbiA9PiBjb2x1bW4uZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgbGV0IHNob3duQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZENsYXNzVG9DZWxsKGNlbGwsIHNob3duQywgXCJzaG93bkNlbGxcIik7XG4gICAgICAgIGlmKGNlbGwuaGl0KXtcbiAgICAgICAgICAgIHNob3duQy50ZXh0Q29udGVudCA9IFwi4qykXCI7XG4gICAgICAgICAgICBzaG93bkMuY2xhc3NMaXN0LmFkZChcInBsYWNlZFNob3duXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoc2hvd25DKTtcbiAgICB9KSlcbiAgICBhbmNoLmlubmVySFRNTCA9IHRhYmxlLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3NUb0NlbGwoY2VsbCwgZWxlbSwgc2hvd1R5cGUpeyAgICAvL2FkZCB0aGUgcmlnaHQgY2xhc3MgdG8gdGhlIGNlbGwgYmFzZWQgb24gaXRzIHN0YXRlXG4gICAgbGV0IHN0YXRlQ2xhc3M7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKHNob3dUeXBlKTtcbiAgICBpZihjZWxsLnN0YXRlID09IDApe3N0YXRlQ2xhc3MgPSBcIm5vdEhpdFwifVxuICAgIGVsc2UgaWYoY2VsbC5zdGF0ZSA9PSAtMSl7c3RhdGVDbGFzcyA9IFwibWlzc1wifVxuICAgIGVsc2UgaWYoY2VsbC5zdGF0ZSA9PSAxKXtzdGF0ZUNsYXNzID0gXCJoaXRcIn1cbiAgICBlbHNlIGlmKGNlbGwuc3RhdGUgPT0gMil7c3RhdGVDbGFzcyA9IFwic3Vua1wifVxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChzdGF0ZUNsYXNzKTtcbn1cblxuLyogZnVuY3Rpb24gYWRkRXZlbnRIaXRDZWxsKGVsZW0sIHgsIHkpeyAvL2FkZCB0aGUgaGFuZGxlciBmb3IgdGhlIGhpdCB0byB0aGUgZWxlbWVudFxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAobmV4dFAuZ2IucmVjZWl2ZURhbWFnZSh4LCB5KSl7XG4gICAgICAgICAgICAvL2lmIG1vZGUgaXMgQUkgdGhlbiBjYWxsIEFJLCBvdGhlcndpc2UgY2FsbCBnYW1lIHdpdGggb3Bwb3NpdGVzLlxuICAgICAgICAgICAgaWYod2luZG93LkFJTW9kZSA9PSB0cnVlKXtBSVR1cm4oKX1cbiAgICAgICAgICAgIGVsc2V7Z2FtZShuZXh0UCwgY3VyclApfSAvL25vdCBjb21wbGV0ZSBzaW5jZSB0aGVyZSBpcyBubyB3YXkgdG8gbWFuYWdlIGxvY2FsIG11bHRpcGxheWVyIHlldC5cbiAgICAgICAgfVxuICAgIH0pXG59ICovXG5jb25zdCB0aW1lciA9IChtaWxsaXNlY29uZHMpPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgICAgICAodG9DYWxsKT0+e3NldFRpbWVvdXQodG9DYWxsLCBtaWxsaXNlY29uZHMpfSk7XG59XG5mdW5jdGlvbiBBSSgpe1xuICAgIGNvbnN0IHNlbGVjdFJhbmRvbUNlbGw9IGZ1bmN0aW9uIChib2FyZCl7XG4gICAgICAgIC8vcmV0dXJucyBhIHJhbmRvbSB4LHkgcGFpciBpbiBhIHNxdWFyZSBib2FyZC5cbiAgICAgICAgbGV0IG1heCA9IGJvYXJkLmxlbmd0aDtcbiAgICAgICAgbGV0IHgsIHk7XG4gICAgICAgIHggPSBtYXggKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB5ID0gbWF4ICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICAgICAgICByZXR1cm4ge3gsIHl9O1xuICAgIH1cblxuICAgIGNvbnN0IGhpdFJhbmRvbSA9IGZ1bmN0aW9uICh1c2VyLCBwbGF5ZXJBSSl7XG4gICAgICAgIGxldCBib2FyZCA9IHBsYXllckFJLmdiLnVwZGF0ZSgpO1xuICAgICAgICBsZXQgeCwgeTtcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoZmxhZz09ZmFsc2Upe1xuICAgICAgICAgICAgKHt4LCB5fSA9IHNlbGVjdFJhbmRvbUNlbGwoYm9hcmQpKTtcbiAgICAgICAgICAgIGZsYWcgPSB1c2VyLmdiLnJlY2VpdmVEYW1hZ2UoeCwgeSk7IC8vaGl0IHJldHVybnMgdHJ1ZSBpZiBpdCBoaXQgc29tZXRoaW5nLCBmYWxzZSBpZiBpdCBkb2Vzbid0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVJhbmRvbSA9IGZ1bmN0aW9uIChBSWdiLCBzaGlwTGVuZ3RoKXtcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoZmxhZyA9PSBmYWxzZSl7XG4gICAgICAgICAgICBsZXQge3gsIHl9ID0gc2VsZWN0UmFuZG9tQ2VsbChBSWdiLnVwZGF0ZSgpKTtcbiAgICAgICAgICAgIGxldCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwieFwiIDogXCJ5XCI7XG4gICAgICAgICAgICBmbGFnID0gISEoXG4gICAgICAgICAgICAgICAgQUlnYi5wbGFjZVNoaXAoeCwgeSwgYXhpcywgc2hpcExlbmd0aClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBST0JMRU09PT09PVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlQWxsUmFuZG9tU2hpcHMgPSBmdW5jdGlvbiAoQUlnYil7XG4gICAgICAgIHdpbmRvdy5hbGxTaGlwcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcGxhY2VSYW5kb20oQUlnYiwgaXRlbS5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgXG5cbiAgICBjb25zdCBBSVR1cm4gPSBmdW5jdGlvbiAodXNlciwgcGxheWVyQUkpe1xuICAgICAgICBoaXRSYW5kb20odXNlciwgcGxheWVyQUkpO1xuICAgICAgICB0aW1lcig1MDApLnRoZW4oKCk9PntcbiAgICAgICAgICAgIGlmKGFsZXJ0T25HYW1lRW5kKHVzZXIsIHBsYXllckFJKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW1lKHVzZXIsIHBsYXllckFJKTsgLy9hZ2FpbiB0aGUgQUkgaXMgYWx3YXlzIHAyIGFuZCBzbyB0aGUgdXNlciBpcyBhbHdheXMgcDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7aGl0UmFuZG9tLCBBSVR1cm4sIHBsYWNlQWxsUmFuZG9tU2hpcHN9XG59XG5cbmZ1bmN0aW9uIGFsZXJ0T25HYW1lRW5kKGxvc2VyLCB3aW5uZXIpe1xuICAgIGlmIChsb3Nlci5nYi5lbmRPZkdhbWUoKSkge1xuICAgICAgICB0aW1lcig1MDApLnRoZW4oKCk9PntcbiAgICAgICAgICAgIGFsZXJ0KGBcbiAgICAgICAgICAgICR7d2lubmVyLm5hbWV9IHdvbiFcbiAgICAgICAgICAgIFRoZSBnYW1lIHdpbGwgbm93IGJlIHJlc2V0LmApXG4gICAgICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBnYW1lKGN1cnJQLCBuZXh0UCl7XG4gICAgLy9zdGFydHMgdGhlIGdhbWUsIHRoZSBwbGF5ZXIgYm9hcmQgc2hvdWxkIGFscmVhZHkgYmUgcmVhZHkgd2l0aCBhbGwgc2hpcHMgcGxhY2VkIHdoZW4gdGhpcyBpcyBjYWxsZWQuXG4gICAgY29uc3Qge0FJVHVybn0gPSBBSSgpO1xuICAgIHNob3dXaG9sZShjdXJyUC5hbmNoLCBjdXJyUC5nYik7XG4gICAgc2hvd0hpZGRlbihuZXh0UC5hbmNoLCBuZXh0UC5nYik7XG4gICAgbmV4dFAuZ2IudXBkYXRlKCkuZm9yRWFjaCgoY29sdW1uLCB4KSA9PiBjb2x1bW4uZm9yRWFjaCgoY2VsbCwgeSkgPT4geyAvL2ZvciBldmVyeSBjZWxsIGluIHRoZSBib2FyZFxuICAgICAgICAvL2FkZCBldmVudCB0byB0cmlnZ2VyIHRoZSBoaXRcbiAgICAgICAgbGV0IGVsZW0gPSBuZXh0UC5hbmNoLmNoaWxkTm9kZXNbeCoxMCt5XTtcbiAgICAgICAgYWRkRXZlbnRIaXRDZWxsKGVsZW0sIHgsIHkpO1xuICAgIH0pKVxuXG5cblxuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRIaXRDZWxsKGVsZW0sIHgsIHkpeyAvL2FkZCB0aGUgaGFuZGxlciBmb3IgdGhlIGhpdCB0byB0aGUgZWxlbWVudFxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChuZXh0UC5nYi5yZWNlaXZlRGFtYWdlKHgsIHkpKXtcbiAgICAgICAgICAgICAgICAvL0NhbGwgc2hvd0hpZGVuIGFnYWluIGp1c3QgdG8gZ2V0IHJpZCBvZiBldmVudCBsaXN0ZW5lcnMgc28gdGhhdCB0aGUgdXNlciBjYW4ndCBoaXQgbXVsdGlwbGUgdGltZXMuXG4gICAgICAgICAgICAgICAgc2hvd0hpZGRlbihuZXh0UC5hbmNoLCBuZXh0UC5nYik7XG4gICAgICAgICAgICAgICAgaWYoYWxlcnRPbkdhbWVFbmQobmV4dFAsIGN1cnJQKSl7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYod2luZG93LkFJTW9kZSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBtb2RlIGlzIEFJIHRoZW4gY2FsbCBBSSwgb3RoZXJ3aXNlIGNhbGwgZ2FtZSB3aXRoIG9wcG9zaXRlcy5cbiAgICAgICAgICAgICAgICAgICAgQUlUdXJuKGN1cnJQLCBuZXh0UCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ub3QgY29tcGxldGUgc2luY2UgbXVsdGlwbGF5ZXIgaXMgbm90IGltcGxlbWVudGVkIHlldC5cbiAgICAgICAgICAgICAgICAgICAgZ2FtZShuZXh0UCwgY3VyclApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5mdW5jdGlvbiByZXNldEdhbWUoKXtcbiAgICB3aW5kb3cucDEuZ2IgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gICAgd2luZG93LnAyLmdiID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICAgIHNoaXBTZXR0ZXIocDEpO1xufVxuXG5cbmZ1bmN0aW9uIHNoaXBTZXR0ZXIocGxheWVyKXtcbiAgICBjb25zdCBhbGxTaGlwcyA9IHdpbmRvdy5hbGxTaGlwcyB8fCBbe2xlbmd0aDogM30sIHtsZW5ndGg6IDN9LCB7bGVuZ3RoOiAzfV07XG4gICAgbGV0IHNoaXBzID0gQXJyYXkuZnJvbShhbGxTaGlwcyk7XG4gICAgbGV0IGF4aXMgPSBcInhcIjtcblxuICAgIGxldCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJhbWUuY2xhc3NMaXN0LmFkZChcImZyYW1lXCIpOyAgICAgICAgICAgICAgLy9cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZyYW1lKTtcblxuICAgIGxldCBkaXZ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZ2LmNsYXNzTGlzdC5hZGQoXCJwbGFjZVNoaXBzRGl2XCIpOyAgICAgICAgICAgICAgICAvL1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKGRpdnYpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHNoaXBzIVwiO1xuICAgIGRpdnYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbGV0IGF4aXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXhpc1RleHQudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgYXhpczogXCI7XG4gICAgZGl2di5hcHBlbmRDaGlsZChheGlzVGV4dCk7XG4gICAgbGV0IGF4aXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnNvbGUubG9nKGF4aXMpO1xuICAgIGF4aXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhheGlzKTtcbiAgICAgICAgYXhpcyA9IGF4aXMgPT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xuICAgICAgICBjb25zb2xlLmxvZyhheGlzKTtcbiAgICAgICAgYXhpc0J0bi50ZXh0Q29udGVudCA9IGAke2F4aXMudG9VcHBlckNhc2UoKX1gXG4gICAgICAgIHNob3dXaG9sZShncmlkLCBwbGF5ZXIuZ2IpO1xuICAgICAgICBhZGRFdmVudFBsYWNlU2hpcFRvQ2VsbHMoZ3JpZCwgcGxheWVyLCBzaGlwcywgYXhpcyk7XG4gICAgfSk7XG4gICAgYXhpc0J0bi50ZXh0Q29udGVudCA9IGAke2F4aXMudG9VcHBlckNhc2UoKX1gO1xuICAgIGF4aXNUZXh0LmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuXG4gICAgbGV0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIHAxLmdiID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICAgICAgICBzaGlwcyA9IEFycmF5LmZyb20oYWxsU2hpcHMpO1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwcy5sZW5ndGgpXG4gICAgICAgIHNob3dXaG9sZShncmlkLCBwbGF5ZXIuZ2IpO1xuICAgICAgICBhZGRFdmVudFBsYWNlU2hpcFRvQ2VsbHMoZ3JpZCwgcGxheWVyLCBzaGlwcywgYXhpcyk7XG4gICAgfSlcbiAgICBkaXZ2LmFwcGVuZENoaWxkKHJlc2V0QnRuKTtcblxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJzaGlwUGxhY2VHcmlkXCIpO1xuICAgIHNob3dXaG9sZShncmlkLCBwbGF5ZXIuZ2IpO1xuICAgIGFkZEV2ZW50UGxhY2VTaGlwVG9DZWxscyhncmlkLCBwbGF5ZXIsIHNoaXBzLCBheGlzKTtcbiAgICBkaXZ2LmFwcGVuZENoaWxkKGdyaWQpO1xuXG4gICAgbGV0IHNoaXBDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2hpcENvbW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXBzUGxhY2VkXCIpO1xuICAgIHNoaXBDb21tZW50LnRleHRDb250ZW50ID0gYCR7c2hpcHMubGVuZ3RofXggc2hpcHMgbGVmdCB0byBwbGFjZSFgO1xuICAgIGRpdnYuYXBwZW5kQ2hpbGQoc2hpcENvbW1lbnQpO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZVNoaXBDb21tZW50KHNoaXBDb21tZW50LCBpbnApe1xuICAgIHNoaXBDb21tZW50LnRleHRDb250ZW50ID0gYCR7aW5wfXggc2hpcHMgbGVmdCB0byBwbGFjZSFgO1xufVxuZnVuY3Rpb24gYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGFuY2gsIHBsYXllciwgc2hpcHMsIGF4aXMpe1xuICAgIC8vdGFrZSBhbmNoLCBwbGF5ZXIsIHNoaXBzQXJyYXkgYW5kIHRoZSBjdXJyZW50IGF4aXMsIG1ha2VzIGV2ZXJ5IGNlbGwgaW4gdGhlIGFuY2hvcmVkIGdyaWQgaGF2ZSB0aGUgZXZlbnQgdG8gcGxhY2UgYSBzaGlwIGFuZCBnZXQgdGhhdCBzaGlwIG91dCBvZiB0aGUgYXJyYXksIHVwZGF0ZSB0aGUgY29tbWVudCwgaWYgc2hpcHMgYXJlIGZpbmlzaGVkIHJlbW92ZSB0aGUgc2hpcFNldHRlciBkaXYuXG4gICAgcGxheWVyLmdiLnVwZGF0ZSgpLmZvckVhY2goKGNvbHVtbiwgeCkgPT4gY29sdW1uLmZvckVhY2goKGNlbGwsIHkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJJbmRleCA9IHgqMTAreTtcbiAgICAgICAgbGV0IGVsZW0gPSBhbmNoLmNoaWxkTm9kZXNbY3VyckluZGV4XTtcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gcGxheWVyLmdiLnBsYWNlU2hpcCh4LCB5LCBheGlzLCBzaGlwc1swXS5sZW5ndGgpO1xuICAgICAgICAgICAgaWYocGxhY2VkKXtcbiAgICAgICAgICAgICAgICBzaGlwcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlU2hpcENvbW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwc1BsYWNlZFwiKSwgc2hpcHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmKHNoaXBzLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICByZW1vdmVTaGlwU2V0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL29uY2UgeW91IGFkZCB0aGUgc2hpcCB5b3UgaGF2ZSB0byByZWZyZXNoIHRoZSBncmlkIGFuZCBhZGQgdGhlIGV2ZW50TGlzdGVuZXJzIGFnYWluXG4gICAgICAgICAgICBzaG93V2hvbGUoYW5jaCwgcGxheWVyLmdiKTtcbiAgICAgICAgICAgIGFkZEV2ZW50UGxhY2VTaGlwVG9DZWxscyhhbmNoLCBwbGF5ZXIsIHNoaXBzLCBheGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBlID0+IHtcbiAgICAgICAgICAgIC8vY2hlY2sgY29sbGlzaW9uIG9uIGNlbGwgY29ycmlzcG9uZGluZyB0byB0aGlzIGRpdiwgaWYgbm8gY29sbGlzaW9uIGRldGVjdGVkLCBzaG93IGhvdmVyIVxuICAgICAgICAgICAgbGV0IGNvbGwgPSBwbGF5ZXIuZ2IuY2hlY2tDb2xsaXNpb24oeCwgeSwgYXhpcywgc2hpcHNbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmKCFjb2xsKXtcbiAgICAgICAgICAgICAgICBsZXQgaSwgajtcbiAgICAgICAgICAgICAgICBmb3IoaSA9IDAsIGogPSAwOyBpPHNoaXBzWzBdLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgYW5jaC5jaGlsZE5vZGVzW2N1cnJJbmRleCtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInBpbmtcIjtcbiAgICAgICAgICAgICAgICAgICAgaiA9IGF4aXMgPT0gXCJ4XCIgPyBqKzEwIDogaSsxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGUgPT4ge1xuICAgICAgICAgICAgLy9jaGVjayBjb2xsaXNpb24gb24gY2VsbCBjb3JyaXNwb25kaW5nIHRvIHRoaXMgZGl2LCBpZiBubyBjb2xsaXNpb24gZGV0ZWN0ZWQsIHNob3cgaG92ZXIhXG4gICAgICAgICAgICBsZXQgaSwgajtcbiAgICAgICAgICAgIGlmKGVsZW0udGV4dENvbnRlbnQgIT0gXCLirKRcIilcbiAgICAgICAgICAgICAgICBmb3IoaSA9IDAsIGogPSAwOyBpPHNoaXBzWzBdLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgYW5jaC5jaGlsZE5vZGVzW2N1cnJJbmRleCtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBqID0gYXhpcyA9PSBcInhcIiA/IGorMTAgOiBpKzE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcFNldHRlcigpe1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mcmFtZVwiKTtcbiAgICBpZihlbGVtICYmIGVsZW0hPW51bGwpe1xuICAgICAgICBlbGVtLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZih3aW5kb3cuQUlNb2RlID09IHRydWUpe1xuICAgICAgICAvL2lmIHRoZSBtb2RlIGlzIEFJLCBwb3B1bGF0ZSB0aGUgcDIgYm9hcmQgKHAyIGlzIGFsd2F5cyB0aGUgQUkpXG4gICAgICAgIEFJKCkucGxhY2VBbGxSYW5kb21TaGlwcyhwMi5nYik7XG4gICAgfVxuICAgIGdhbWUocDEsIHAyKTtcbn1cblxuXG5leHBvcnQge3Nob3dXaG9sZSwgc2hvd0hpZGRlbiwgZ2FtZSwgc2hpcFNldHRlciwgcmVzZXRHYW1lfSIsImltcG9ydCBzaGlwRmFjdG9yeSBmcm9tIFwiLi9zaGlwRmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KGlucHV0U2l6ZSl7XG4gICAgLy9ib2FyZCBjZWxsIHN0YXRlczogLTEtbWlzcyAwLWRlZmF1bHQgMS1oaXQgMi1pc1N1bmtcbiAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICBsZXQgc2hpcHNQbGFjZWQgPSBbXTtcbiAgICBjb25zdCBncmlkU2l6ZSA9IGlucHV0U2l6ZSB8fCAxMDtcbiAgICBmb3IobGV0IGk9MDsgaTxncmlkU2l6ZTsgaSsrKXtcbiAgICAgICAgLy9pbml0aWFsaXplIGJvYXJkIGluIHRoZSBkZWZhdWx0IHN0YXRlIG9mIDBcbiAgICAgICAgYm9hcmQucHVzaChbXSk7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPGdyaWRTaXplOyBqKyspe1xuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgc3RhdGU6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlY2VpdmVEYW1hZ2UgPSAoeCwgeSkgPT4ge1xuICAgICAgICBsZXQgY2VsbCA9IGJvYXJkW3hdW3ldO1xuICAgICAgICBsZXQgY2VsbEJlZm9yZSA9IE9iamVjdC5hc3NpZ24oe30sIGNlbGwpO1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsQmVmb3JlLnN0YXRlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vREVMRVRFXG4gICAgICAgIGNlbGxIaXQoY2VsbCk7XG4gICAgICAgIHVwZGF0ZSgpOyAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBjb25zb2xlLmxvZyhjZWxsLnN0YXRlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vREVMRVRFXG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGxCZWZvcmUuc3RhdGUgIT0gY2VsbC5zdGF0ZSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ERUxFVEVcbiAgICAgICAgcmV0dXJuIChjZWxsQmVmb3JlLnN0YXRlICE9IGNlbGwuc3RhdGUpO1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGUgPSAoKT0+e1xuICAgICAgICBib2FyZC5mb3JFYWNoKGNvbHVtbiA9PiBjb2x1bW4uZm9yRWFjaChjZWxsID0+IHVwZGF0ZUNlbGwoY2VsbCkpKVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBheGlzLCBsZW5ndGgpID0+IHtcbiAgICAgICAgbGV0IGNvbGwgPSBjaGVja0NvbGxpc2lvbih4LCB5LCBheGlzLCBsZW5ndGgpO1xuICAgICAgICBsZXQgc2hpcDtcbiAgICAgICAgaWYoIWNvbGwpe1xuICAgICAgICAgICAgc2hpcCA9IHNoaXBGYWN0b3J5KGxlbmd0aCk7XG4gICAgICAgICAgICBheGlzID0gKGF4aXMgPT0gXCJ4XCIpOyAvL2lmIGF4aXMgaXMgWCwgaXQgd2lsbCBiZSBuZXV0cmFsIHRvIGksIG90aGVyd2lzZSBpdCB3aWxsIG51bGxpZnkgaXQuIEl0J3Mgb3Bwb3NpdGUgd2lsbCBkbyB0aGUgb3Bwb3NpdGUuXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgYm9hcmRbeCtpKmF4aXNdW3kraSohYXhpc10uaGl0ID0gKCkgPT4ge3JldHVybiBzaGlwLmhpdChpKX07XG4gICAgICAgICAgICAgICAgYm9hcmRbeCtpKmF4aXNdW3kraSohYXhpc10uaXNTdW5rID0gc2hpcC5pc1N1bms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwc1BsYWNlZC5wdXNoKHNoaXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhY29sbDtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tDb2xsaXNpb24gPSAoeCwgeSwgYXhpcywgbGVuZ3RoKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGEgY29sbGlzaW9uIGRldGVjdGVkLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBpZihheGlzID09IFwieFwiKXtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9ICh4K2xlbmd0aCkgPiBib2FyZC5sZW5ndGggPyB0cnVlIDogZmFsc2U7ICAvL2NoZWNrIGlmIG91dCBvZiBib3VuZHNcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aCAmJiAhY29sbGlzaW9uOyBpKyspe1xuICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBoaXQgZnVuY3Rpb24gdGhlcmUgaXMgYSBzaGlwLCBzbyBpdCB3b3VsZCBjb2xsaWRlLCBhbHNvIGNoZWNrIGlmIG91dCBvZiBib3VuZHNcbiAgICAgICAgICAgICAgICBpZihib2FyZFt4K2ldW3ldLmhpdCl7Y29sbGlzaW9uID0gdHJ1ZX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgY29sbGlzaW9uID0gKHkrbGVuZ3RoKSA+IGJvYXJkW3hdLmxlbmd0aCA/IHRydWUgOiBmYWxzZTsgIC8vY2hlY2sgaWYgb3V0IG9mIGJvdW5kc1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoICYmICFjb2xsaXNpb247IGkrKyl7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIGhpdCBmdW5jdGlvbiB0aGVyZSBpcyBhIHNoaXAsIHNvIGl0IHdvdWxkIGNvbGxpZGVcbiAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5K2ldLmhpdCl7Y29sbGlzaW9uID0gdHJ1ZX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxuICAgIGNvbnN0IGVuZE9mR2FtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzUGxhY2VkLmV2ZXJ5KHBsYWNlZCA9PiBwbGFjZWQuaXNTdW5rKCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVjZWl2ZURhbWFnZSxcbiAgICAgICAgdXBkYXRlLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGVuZE9mR2FtZSxcbiAgICAgICAgY2hlY2tDb2xsaXNpb25cbiAgICB9XG5cbiAgICAvKiB7XG4gICAgICAgIGJvYXJkW11bXVxuICAgICAgICByZWNlaXZlRGFtYWdlKClcbiAgICAgICAgdXBkYXRlQm9hcmQoKTtcbiAgICAgICAgc2hpcHNQbGFjZWRbXVxuICAgICAgICAgICAgZW5kIG9mIGdhbWU/XG4gICAgICAgICAgICBwbGFjZXNoaXBcbiAgICAgICAgICAgICAgICBvdmVybGFwP1xuICAgIH0gKi9cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2VsbChjZWxsKXtcbiAgICAvL2lmIHRoZSBzdGF0ZSBpcyAxLCB0aGUgc2hpcCBtaWdodCBoYXZlIGJlZW4gc3Vuaywgb3RoZXJ3aXNlIGl0IGNhbm5vdCBjaGFuZ2UgZHVyaW5nIHRoZSB1cGRhdGVcbiAgICBjZWxsLnN0YXRlID0gY2VsbC5zdGF0ZSA9PSAxID8gY2VsbC5oaXQoKStjZWxsLmlzU3VuaygpIDogY2VsbC5zdGF0ZTtcbiAgICByZXR1cm4gY2VsbDtcbn1cbmZ1bmN0aW9uIGNlbGxIaXQoY2VsbCl7XG4gICAgaWYoY2VsbC5oaXQpe1xuICAgICAgICBjb25zb2xlLmxvZyhgcHJlIGNhbGM6JHtjZWxsLnN0YXRlfWApXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgYSBoaXQgZnVuY3Rpb24gdGhlcmUgaXMgYSBzaGlwXG4gICAgICAgIGNlbGwuc3RhdGUgPSBjZWxsLmhpdCgpIC8qICsgY2VsbC5pc1N1bmsoKSAqLztcbiAgICB9ZWxzZXtcbiAgICAgICAgLy9vdGhlcndpc2UgaXQncyBhIG1pc3NcbiAgICAgICAgY2VsbC5zdGF0ZSA9IC0xO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbn1cblxuZXhwb3J0IHsgdXBkYXRlQ2VsbCwgY2VsbEhpdCB9XG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmRGYWN0b3J5OyIsIi8qIHNoaXAge1xuICAgIGxlbmd0aDogO1xuICAgIGhpdHBvaW50czogWzAsIDAsIDBdO1xuICAgIGhpdDogZnVuY3Rpb24gaGl0O1xuICAgIGlzU3VuazogZnVuY3Rpb24gcmV0dXJuIHN1bmsgdHJ1ZSBvciBmYWxzZTtcbn0gKi9cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXBGYWN0b3J5KGxlbmd0aCl7XG4gICAgbGV0IGhpdHBvaW50cyA9IFtdO1xuICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaGl0cG9pbnRzLnB1c2goMCk7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9IChuKSA9PiB7XG4gICAgICAgIC8vcmVnaXN0ZXJzIHRoZSBoaXQgaW4gaGl0cG9pbnRzIGFuZCByZXR1cm5zIDEuXG4gICAgICAgIGhpdHBvaW50c1tuXSA9IDE7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSBzaGlwIGlzIHN1bmtcbiAgICAgICAgcmV0dXJuIGhpdHBvaW50cy5ldmVyeShwb2ludCA9PiBwb2ludCA9PSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRwb2ludHMsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfVxufVxuXG5leHBvcnQgeyBzaGlwRmFjdG9yeSB9XG5cbi8qIG1vZHVsZS5leHBvcnRzID0ge1xuc2hpcEZhY3Rvcnlcbn0gKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnkuanNcIjsgKi9cbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnkuanNcIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0ICogYXMgZG9tU3R1ZmYgZnJvbSBcIi4vZG9tLmpzXCJcblxuXG53aW5kb3cucDEgPSB7XG4gICAgbmFtZTogXCJQbGF5ZXIgMVwiLFxuICAgIGdiOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgYW5jaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRUZXN0LnBsYXllck9uZVwiKVxufVxud2luZG93LnAyID0ge1xuICAgIG5hbWU6IFwiUGxheWVyIDJcIixcbiAgICBnYjogZ2FtZWJvYXJkRmFjdG9yeSgpLFxuICAgIGFuY2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkVGVzdC5wbGF5ZXJUd29cIilcbn1cbndpbmRvdy5hbGxTaGlwcyA9IFt7bGVuZ3RoOiA1fSwge2xlbmd0aDogNH0sIHtsZW5ndGg6IDN9LCB7bGVuZ3RoOiAzfSwge2xlbmd0aDogMn0sIHtsZW5ndGg6IDF9XTtcbndpbmRvdy5BSU1vZGUgPSB0cnVlOyAvL3doZW4gbXVsdGlwbGF5ZXIgaW1wbGVtZW50ZWQgdGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIHRvIGZhbHNlXG5cbmNvbnN0IG1haW5SZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRCdG4ubWFpbkJ0blwiKTtcbm1haW5SZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tU3R1ZmYucmVzZXRHYW1lKVxuXG5cbi8qKi9cbmxldCBwMSA9IHdpbmRvdy5wMTtcbmxldCBwMiA9IHdpbmRvdy5wMjtcbnAxLmdiLnBsYWNlU2hpcCgxLCAxLCBcInhcIiwgNCk7XG5wMS5nYi5wbGFjZVNoaXAoOSw5LCBcInlcIiwgMSk7XG5jb25zb2xlLnRhYmxlKHAxLmdiLnVwZGF0ZSgpLm1hcChjb2x1bW4gPT4gY29sdW1uLm1hcChpdGVtPT57XG4gICAgcmV0dXJuIGl0ZW0uaGl0O1xufSkpKTtcbi8qIGRvbVN0dWZmLmdhbWUocDEsIHAyKTsgKi8gLy9ub3QgbmVlZGVkIGFzIGkgY2FuIHN0YXJ0IHRoZSBnYW1lIGV2ZXJ5dGltZSB0aGUgc2V0dGVyIGlzIGRvbmUsIGluc3RlYWQgb2Ygb24gbG9hZFxuXG4vKiBkb21TdHVmZi5zaGlwU2V0dGVyKHAxKTsgKi9cbmRvbVN0dWZmLnJlc2V0R2FtZSgpO1xuXG5cbi8qIGRvbVN0dWZmLnNob3dXaG9sZShwMS5hbmNoLCBwMS5nYik7ICovXG4vKiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
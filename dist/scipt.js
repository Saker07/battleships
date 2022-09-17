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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/*up until now its just mock elements */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  flex-direction: column;\n}\n\n.title{\n  text-align: center;\n  margin-bottom: 1rem;\n}\nh1 {margin-bottom: 1rem;}\n\nh1 {\n  margin-top: 1em;\n  font-size: 3rem;\n  font-weight: bolder;\n}\n\n.gameContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.gameHeader {\n  width: 100%;\n}\nh3 {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2rem;\n}\n\n.gameboardTest,.frame .shipPlaceGrid {\n  flex-shrink: 1;\n  background-color: red;\n  width: 40rem;\n  height: 40rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n.hiddenCell,.shownCell {\n/*   position: absolute; */\n  background-color: blue;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1rem;\n}\n.miss {\n  background-color: black;\n}\n.hit {\n  background-color: pink;\n}\n.sunk {\n  background-color: blueviolet;\n}\n\n/* align center is not align stretch */\n/*to use both wrap in div and stretch one and center the other?*/\n\n.frame {\n  position: absolute; \n  width: 100vw; \n  height: 100vh; \n  background-color: rgba(0, 0, 0, 0.5); \n  top: 0; \n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.frame>.placeShipsDiv {\n  background-color: white;\n  opacity: 1;\n  padding: 2rem;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  box-shadow: 0.5rem 0.5rem 0.5rem 0.2rem rgba(0, 0, 0, 0.603);\n}\n\n.frame{\n  font-size: 1.3rem;\n  font-weight: bolder;\n}\n.frame h5{\n  font-size: 1.7rem;\n}\n\nbutton {\n  font-size: 1.2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA,uCAAuC;AACvC;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA,IAAI,mBAAmB,CAAC;;AAExB;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,gDAAgD;AAClD;AACA;AACA,0BAA0B;EACxB,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,4BAA4B;AAC9B;;AAEA,sCAAsC;AACtC,gEAAgE;;AAEhE;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,MAAM;EACN,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,4DAA4D;AAC9D;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["\n\n/*up until now its just mock elements */\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  flex-direction: column;\n}\n\n.title{\n  text-align: center;\n  margin-bottom: 1rem;\n}\nh1 {margin-bottom: 1rem;}\n\nh1 {\n  margin-top: 1em;\n  font-size: 3rem;\n  font-weight: bolder;\n}\n\n.gameContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n.gameHeader {\n  width: 100%;\n}\nh3 {\n  font-size: 2rem;\n  text-align: center;\n  width: 100%;\n}\n\n.playerContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2rem;\n}\n\n.gameboardTest,.frame .shipPlaceGrid {\n  flex-shrink: 1;\n  background-color: red;\n  width: 40rem;\n  height: 40rem;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n.hiddenCell,.shownCell {\n/*   position: absolute; */\n  background-color: blue;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.1rem;\n}\n.miss {\n  background-color: black;\n}\n.hit {\n  background-color: pink;\n}\n.sunk {\n  background-color: blueviolet;\n}\n\n/* align center is not align stretch */\n/*to use both wrap in div and stretch one and center the other?*/\n\n.frame {\n  position: absolute; \n  width: 100vw; \n  height: 100vh; \n  background-color: rgba(0, 0, 0, 0.5); \n  top: 0; \n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.frame>.placeShipsDiv {\n  background-color: white;\n  opacity: 1;\n  padding: 2rem;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  box-shadow: 0.5rem 0.5rem 0.5rem 0.2rem rgba(0, 0, 0, 0.603);\n}\n\n.frame{\n  font-size: 1.3rem;\n  font-weight: bolder;\n}\n.frame h5{\n  font-size: 1.7rem;\n}\n\nbutton {\n  font-size: 1.2rem;\n}"],"sourceRoot":""}]);
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

/* function addEventHitCell(elem, x, y){ //add the handler for the hit to the element
    elem.addEventListener("click", e => {
        if (nextP.gb.receiveDamage(x, y)){
            //if mode is AI then call AI, otherwise call game with opposites.
            if(window.AIMode == true){AITurn()}
            else{game(nextP, currP)} //not complete since there is no way to manage local multiplayer yet.
        }
    })
} */
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

    const timer = (milliseconds)=>{
        return new Promise(
            (toCall)=>{setTimeout(toCall, milliseconds)});
    }

    const AITurn = function (user, playerAI){
        //Call showHiden again just to get rid of event listeners so that the user can't hit.
        showHidden(playerAI.anch, playerAI.gb);
        hitRandom(user, playerAI);
        timer(500).then(()=>{
            if(alertOnGameEnd(user, playerAI)){
                return
            } else {
                game(user, playerAI); //again the AI is always p2 and so the user is always p1
            }
        });
    }
    return {hitRandom, AITurn, placeAllRandomShips}
}

function alertOnGameEnd(loser, winner){
    if (loser.gb.endOfGame()) {
        alert(`${winner.name} won!
        The game will now be reset.`)
        resetGame();
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
    const allShips = /* window.allShips || */ [{length: 3}, {length: 3}, {length: 3}];
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
    name: "Player 1",
    gb: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    anch: document.querySelector(".gameboardTest.playerOne")
}
window.p2 = {
    name: "Player 2",
    gb: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    anch: document.querySelector(".gameboardTest.playerTwo")
}
window.allShips = [{length: 3}];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBQ0QsMEJBQTBCOztBQUUxQiw0QkFBNEI7QUFDNUIsOENBQWtCOzs7QUFHbEIsdUNBQXVDO0FBQ3ZDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4vKnVwIHVudGlsIG5vdyBpdHMganVzdCBtb2NrIGVsZW1lbnRzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZXtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbmgxIHttYXJnaW4tYm90dG9tOiAxcmVtO31cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uZ2FtZUhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkVGVzdCwuZnJhbWUgLnNoaXBQbGFjZUdyaWQge1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNDByZW07XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmhpZGRlbkNlbGwsLnNob3duQ2VsbCB7XFxuLyogICBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLyogYWxpZ24gY2VudGVyIGlzIG5vdCBhbGlnbiBzdHJldGNoICovXFxuLyp0byB1c2UgYm90aCB3cmFwIGluIGRpdiBhbmQgc3RyZXRjaCBvbmUgYW5kIGNlbnRlciB0aGUgb3RoZXI/Ki9cXG5cXG4uZnJhbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gIHdpZHRoOiAxMDB2dzsgXFxuICBoZWlnaHQ6IDEwMHZoOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgXFxuICB0b3A6IDA7IFxcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mcmFtZT4ucGxhY2VTaGlwc0RpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC42MDMpO1xcbn1cXG5cXG4uZnJhbWV7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5mcmFtZSBoNXtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBLElBQUksbUJBQW1CLENBQUM7O0FBRXhCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdEQUFnRDtBQUNsRDtBQUNBO0FBQ0EsMEJBQTBCO0VBQ3hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSxzQ0FBc0M7QUFDdEMsZ0VBQWdFOztBQUVoRTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4vKnVwIHVudGlsIG5vdyBpdHMganVzdCBtb2NrIGVsZW1lbnRzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZXtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbmgxIHttYXJnaW4tYm90dG9tOiAxcmVtO31cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uZ2FtZUhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkVGVzdCwuZnJhbWUgLnNoaXBQbGFjZUdyaWQge1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNDByZW07XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmhpZGRlbkNlbGwsLnNob3duQ2VsbCB7XFxuLyogICBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLyogYWxpZ24gY2VudGVyIGlzIG5vdCBhbGlnbiBzdHJldGNoICovXFxuLyp0byB1c2UgYm90aCB3cmFwIGluIGRpdiBhbmQgc3RyZXRjaCBvbmUgYW5kIGNlbnRlciB0aGUgb3RoZXI/Ki9cXG5cXG4uZnJhbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gIHdpZHRoOiAxMDB2dzsgXFxuICBoZWlnaHQ6IDEwMHZoOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgXFxuICB0b3A6IDA7IFxcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mcmFtZT4ucGxhY2VTaGlwc0RpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC42MDMpO1xcbn1cXG5cXG4uZnJhbWV7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5mcmFtZSBoNXtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBzaG93SGlkZGVuKGFuY2gsIGdiKXtcbiAgICAvL21ha2VzIGdhbWVib2FyZCBHQiBvbiBzY3JlZW4gYnkgcmVwbGFjaW5nIGNvbnRlbnQgb2YgQU5DSCwgaGlkZGVuIG1lYW5zIGl0IGlzIHRoZSBcImVuZW15J3NcIiBib2FyZCwgc28geW91IGRvbid0IHNlZSB0aGUgc2hpcHNcbiAgICBsZXQgYm9hcmQgPSBnYi51cGRhdGUoKTtcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkLmZvckVhY2goY29sdW1uID0+IGNvbHVtbi5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBsZXQgaGlkZGVuQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZENsYXNzVG9DZWxsKGNlbGwsIGhpZGRlbkMpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChoaWRkZW5DKTtcbiAgICB9KSlcbiAgICBhbmNoLmlubmVySFRNTCA9IHRhYmxlLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gc2hvd1dob2xlKGFuY2gsIGdiKXtcbiAgICAvL21ha2VzIGdhbWVib2FyZCBHQiBvbiBzY3JlZW4gYnkgcmVwbGFjaW5nIGNvbnRlbnQgb2YgQU5DSCwgd2hvbGUgbWVhbnMgaXQgaXMgdGhlIHlvdXIgYm9hcmQsIHNvIHlvdSBzZWUgdGhlIHNoaXBzXG4gICAgbGV0IGJvYXJkID0gZ2IudXBkYXRlKCk7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5mb3JFYWNoKGNvbHVtbiA9PiBjb2x1bW4uZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgbGV0IHNob3duQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZENsYXNzVG9DZWxsKGNlbGwsIHNob3duQyk7XG4gICAgICAgIGlmKGNlbGwuaGl0KXtzaG93bkMudGV4dENvbnRlbnQgPSBcIipcIn1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoc2hvd25DKTtcbiAgICB9KSlcbiAgICBhbmNoLmlubmVySFRNTCA9IHRhYmxlLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3NUb0NlbGwoY2VsbCwgZWxlbSl7ICAgIC8vYWRkIHRoZSByaWdodCBjbGFzcyB0byB0aGUgY2VsbCBiYXNlZCBvbiBpdHMgc3RhdGVcbiAgICBsZXQgc3RhdGVDbGFzcztcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5DZWxsXCIpO1xuICAgIGlmKGNlbGwuc3RhdGUgPT0gMCl7c3RhdGVDbGFzcyA9IFwibm90SGl0XCJ9XG4gICAgZWxzZSBpZihjZWxsLnN0YXRlID09IC0xKXtzdGF0ZUNsYXNzID0gXCJtaXNzXCJ9XG4gICAgZWxzZSBpZihjZWxsLnN0YXRlID09IDEpe3N0YXRlQ2xhc3MgPSBcImhpdFwifVxuICAgIGVsc2UgaWYoY2VsbC5zdGF0ZSA9PSAyKXtzdGF0ZUNsYXNzID0gXCJzdW5rXCJ9XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKHN0YXRlQ2xhc3MpO1xufVxuXG4vKiBmdW5jdGlvbiBhZGRFdmVudEhpdENlbGwoZWxlbSwgeCwgeSl7IC8vYWRkIHRoZSBoYW5kbGVyIGZvciB0aGUgaGl0IHRvIHRoZSBlbGVtZW50XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChuZXh0UC5nYi5yZWNlaXZlRGFtYWdlKHgsIHkpKXtcbiAgICAgICAgICAgIC8vaWYgbW9kZSBpcyBBSSB0aGVuIGNhbGwgQUksIG90aGVyd2lzZSBjYWxsIGdhbWUgd2l0aCBvcHBvc2l0ZXMuXG4gICAgICAgICAgICBpZih3aW5kb3cuQUlNb2RlID09IHRydWUpe0FJVHVybigpfVxuICAgICAgICAgICAgZWxzZXtnYW1lKG5leHRQLCBjdXJyUCl9IC8vbm90IGNvbXBsZXRlIHNpbmNlIHRoZXJlIGlzIG5vIHdheSB0byBtYW5hZ2UgbG9jYWwgbXVsdGlwbGF5ZXIgeWV0LlxuICAgICAgICB9XG4gICAgfSlcbn0gKi9cbmZ1bmN0aW9uIEFJKCl7XG4gICAgY29uc3Qgc2VsZWN0UmFuZG9tQ2VsbD0gZnVuY3Rpb24gKGJvYXJkKXtcbiAgICAgICAgLy9yZXR1cm5zIGEgcmFuZG9tIHgseSBwYWlyIGluIGEgc3F1YXJlIGJvYXJkLlxuICAgICAgICBsZXQgbWF4ID0gYm9hcmQubGVuZ3RoO1xuICAgICAgICBsZXQgeCwgeTtcbiAgICAgICAgeCA9IG1heCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHkgPSBtYXggKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gICAgICAgIHJldHVybiB7eCwgeX07XG4gICAgfVxuICAgIGNvbnN0IGhpdFJhbmRvbSA9IGZ1bmN0aW9uICh1c2VyLCBwbGF5ZXJBSSl7XG4gICAgICAgIGxldCBib2FyZCA9IHBsYXllckFJLmdiLnVwZGF0ZSgpO1xuICAgICAgICBsZXQgeCwgeTtcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoZmxhZz09ZmFsc2Upe1xuICAgICAgICAgICAgKHt4LCB5fSA9IHNlbGVjdFJhbmRvbUNlbGwoYm9hcmQpKTtcbiAgICAgICAgICAgIGZsYWcgPSB1c2VyLmdiLnJlY2VpdmVEYW1hZ2UoeCwgeSk7IC8vaGl0IHJldHVybnMgdHJ1ZSBpZiBpdCBoaXQgc29tZXRoaW5nLCBmYWxzZSBpZiBpdCBkb2Vzbid0XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGxhY2VSYW5kb20gPSBmdW5jdGlvbiAoQUlnYiwgc2hpcExlbmd0aCl7XG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgICAgIHdoaWxlKGZsYWcgPT0gZmFsc2Upe1xuICAgICAgICAgICAgbGV0IHt4LCB5fSA9IHNlbGVjdFJhbmRvbUNlbGwoQUlnYi51cGRhdGUoKSk7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInhcIiA6IFwieVwiO1xuICAgICAgICAgICAgZmxhZyA9ICEhKFxuICAgICAgICAgICAgICAgIEFJZ2IucGxhY2VTaGlwKHgsIHksIGF4aXMsIHNoaXBMZW5ndGgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQUk9CTEVNPT09PT1cIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwbGFjZUFsbFJhbmRvbVNoaXBzID0gZnVuY3Rpb24gKEFJZ2Ipe1xuICAgICAgICB3aW5kb3cuYWxsU2hpcHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHBsYWNlUmFuZG9tKEFJZ2IsIGl0ZW0ubGVuZ3RoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHRpbWVyID0gKG1pbGxpc2Vjb25kcyk9PntcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgICAgICAgICAgKHRvQ2FsbCk9PntzZXRUaW1lb3V0KHRvQ2FsbCwgbWlsbGlzZWNvbmRzKX0pO1xuICAgIH1cblxuICAgIGNvbnN0IEFJVHVybiA9IGZ1bmN0aW9uICh1c2VyLCBwbGF5ZXJBSSl7XG4gICAgICAgIC8vQ2FsbCBzaG93SGlkZW4gYWdhaW4ganVzdCB0byBnZXQgcmlkIG9mIGV2ZW50IGxpc3RlbmVycyBzbyB0aGF0IHRoZSB1c2VyIGNhbid0IGhpdC5cbiAgICAgICAgc2hvd0hpZGRlbihwbGF5ZXJBSS5hbmNoLCBwbGF5ZXJBSS5nYik7XG4gICAgICAgIGhpdFJhbmRvbSh1c2VyLCBwbGF5ZXJBSSk7XG4gICAgICAgIHRpbWVyKDUwMCkudGhlbigoKT0+e1xuICAgICAgICAgICAgaWYoYWxlcnRPbkdhbWVFbmQodXNlciwgcGxheWVyQUkpKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2FtZSh1c2VyLCBwbGF5ZXJBSSk7IC8vYWdhaW4gdGhlIEFJIGlzIGFsd2F5cyBwMiBhbmQgc28gdGhlIHVzZXIgaXMgYWx3YXlzIHAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge2hpdFJhbmRvbSwgQUlUdXJuLCBwbGFjZUFsbFJhbmRvbVNoaXBzfVxufVxuXG5mdW5jdGlvbiBhbGVydE9uR2FtZUVuZChsb3Nlciwgd2lubmVyKXtcbiAgICBpZiAobG9zZXIuZ2IuZW5kT2ZHYW1lKCkpIHtcbiAgICAgICAgYWxlcnQoYCR7d2lubmVyLm5hbWV9IHdvbiFcbiAgICAgICAgVGhlIGdhbWUgd2lsbCBub3cgYmUgcmVzZXQuYClcbiAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBnYW1lKGN1cnJQLCBuZXh0UCl7XG4gICAgLy9zdGFydHMgdGhlIGdhbWUsIHRoZSBwbGF5ZXIgYm9hcmQgc2hvdWxkIGFscmVhZHkgYmUgcmVhZHkgd2l0aCBhbGwgc2hpcHMgcGxhY2VkIHdoZW4gdGhpcyBpcyBjYWxsZWQuXG4gICAgY29uc3Qge0FJVHVybn0gPSBBSSgpO1xuICAgIHNob3dXaG9sZShjdXJyUC5hbmNoLCBjdXJyUC5nYik7XG4gICAgc2hvd0hpZGRlbihuZXh0UC5hbmNoLCBuZXh0UC5nYik7XG4gICAgbmV4dFAuZ2IudXBkYXRlKCkuZm9yRWFjaCgoY29sdW1uLCB4KSA9PiBjb2x1bW4uZm9yRWFjaCgoY2VsbCwgeSkgPT4geyAvL2ZvciBldmVyeSBjZWxsIGluIHRoZSBib2FyZFxuICAgICAgICAvL2FkZCBldmVudCB0byB0cmlnZ2VyIHRoZSBoaXRcbiAgICAgICAgbGV0IGVsZW0gPSBuZXh0UC5hbmNoLmNoaWxkTm9kZXNbeCoxMCt5XTtcbiAgICAgICAgYWRkRXZlbnRIaXRDZWxsKGVsZW0sIHgsIHkpO1xuICAgIH0pKVxuXG5cblxuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRIaXRDZWxsKGVsZW0sIHgsIHkpeyAvL2FkZCB0aGUgaGFuZGxlciBmb3IgdGhlIGhpdCB0byB0aGUgZWxlbWVudFxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChuZXh0UC5nYi5yZWNlaXZlRGFtYWdlKHgsIHkpKXtcbiAgICAgICAgICAgICAgICBpZihhbGVydE9uR2FtZUVuZChuZXh0UCwgY3VyclApKXtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih3aW5kb3cuQUlNb2RlID09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAvL2lmIG1vZGUgaXMgQUkgdGhlbiBjYWxsIEFJLCBvdGhlcndpc2UgY2FsbCBnYW1lIHdpdGggb3Bwb3NpdGVzLlxuICAgICAgICAgICAgICAgICAgICBBSVR1cm4oY3VyclAsIG5leHRQKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL25vdCBjb21wbGV0ZSBzaW5jZSBtdWx0aXBsYXllciBpcyBub3QgaW1wbGVtZW50ZWQgeWV0LlxuICAgICAgICAgICAgICAgICAgICBnYW1lKG5leHRQLCBjdXJyUCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpe1xuICAgIHdpbmRvdy5wMS5nYiA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICB3aW5kb3cucDIuZ2IgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gICAgc2hpcFNldHRlcihwMSk7XG59XG5cblxuZnVuY3Rpb24gc2hpcFNldHRlcihwbGF5ZXIpe1xuICAgIGNvbnN0IGFsbFNoaXBzID0gLyogd2luZG93LmFsbFNoaXBzIHx8ICovIFt7bGVuZ3RoOiAzfSwge2xlbmd0aDogM30sIHtsZW5ndGg6IDN9XTtcbiAgICBsZXQgc2hpcHMgPSBBcnJheS5mcm9tKGFsbFNoaXBzKTtcbiAgICBsZXQgYXhpcyA9IFwieFwiO1xuXG4gICAgbGV0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmFtZS5jbGFzc0xpc3QuYWRkKFwiZnJhbWVcIik7ICAgICAgICAgICAgICAvL1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuXG4gICAgbGV0IGRpdnYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdnYuY2xhc3NMaXN0LmFkZChcInBsYWNlU2hpcHNEaXZcIik7ICAgICAgICAgICAgICAgIC8vXG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoZGl2dik7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2hpcHMhXCI7XG4gICAgZGl2di5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBsZXQgYXhpc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBheGlzVGV4dC50ZXh0Q29udGVudCA9IFwiQ3VycmVudCBheGlzOiBcIjtcbiAgICBkaXZ2LmFwcGVuZENoaWxkKGF4aXNUZXh0KTtcbiAgICBsZXQgYXhpc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc29sZS5sb2coYXhpcyk7XG4gICAgYXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGF4aXMpO1xuICAgICAgICBheGlzID0gYXhpcyA9PSBcInhcIiA/IFwieVwiIDogXCJ4XCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGF4aXMpO1xuICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYCR7YXhpcy50b1VwcGVyQ2FzZSgpfWBcbiAgICAgICAgc2hvd1dob2xlKGdyaWQsIHBsYXllci5nYik7XG4gICAgICAgIGFkZEV2ZW50UGxhY2VTaGlwVG9DZWxscyhncmlkLCBwbGF5ZXIsIHNoaXBzLCBheGlzKTtcbiAgICB9KTtcbiAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYCR7YXhpcy50b1VwcGVyQ2FzZSgpfWA7XG4gICAgYXhpc1RleHQuYXBwZW5kQ2hpbGQoYXhpc0J0bik7XG5cbiAgICBsZXQgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgcDEuZ2IgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIHNoaXBzID0gQXJyYXkuZnJvbShhbGxTaGlwcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXBzLmxlbmd0aClcbiAgICAgICAgc2hvd1dob2xlKGdyaWQsIHBsYXllci5nYik7XG4gICAgICAgIGFkZEV2ZW50UGxhY2VTaGlwVG9DZWxscyhncmlkLCBwbGF5ZXIsIHNoaXBzLCBheGlzKTtcbiAgICB9KVxuICAgIGRpdnYuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInNoaXBQbGFjZUdyaWRcIik7XG4gICAgc2hvd1dob2xlKGdyaWQsIHBsYXllci5nYik7XG4gICAgYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGdyaWQsIHBsYXllciwgc2hpcHMsIGF4aXMpO1xuICAgIGRpdnYuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICBsZXQgc2hpcENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzaGlwQ29tbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcHNQbGFjZWRcIik7XG4gICAgc2hpcENvbW1lbnQudGV4dENvbnRlbnQgPSBgJHtzaGlwcy5sZW5ndGh9eCBzaGlwcyBsZWZ0IHRvIHBsYWNlIWA7XG4gICAgZGl2di5hcHBlbmRDaGlsZChzaGlwQ29tbWVudCk7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlU2hpcENvbW1lbnQoc2hpcENvbW1lbnQsIGlucCl7XG4gICAgc2hpcENvbW1lbnQudGV4dENvbnRlbnQgPSBgJHtpbnB9eCBzaGlwcyBsZWZ0IHRvIHBsYWNlIWA7XG59XG5mdW5jdGlvbiBhZGRFdmVudFBsYWNlU2hpcFRvQ2VsbHMoYW5jaCwgcGxheWVyLCBzaGlwcywgYXhpcyl7XG4gICAgLy90YWtlIGFuY2gsIHBsYXllciwgc2hpcHNBcnJheSBhbmQgdGhlIGN1cnJlbnQgYXhpcywgbWFrZXMgZXZlcnkgY2VsbCBpbiB0aGUgYW5jaG9yZWQgZ3JpZCBoYXZlIHRoZSBldmVudCB0byBwbGFjZSBhIHNoaXAgYW5kIGdldCB0aGF0IHNoaXAgb3V0IG9mIHRoZSBhcnJheSwgdXBkYXRlIHRoZSBjb21tZW50LCBpZiBzaGlwcyBhcmUgZmluaXNoZWQgcmVtb3ZlIHRoZSBzaGlwU2V0dGVyIGRpdi5cbiAgICBwbGF5ZXIuZ2IudXBkYXRlKCkuZm9yRWFjaCgoY29sdW1uLCB4KSA9PiBjb2x1bW4uZm9yRWFjaCgoY2VsbCwgeSkgPT4ge1xuICAgICAgICBsZXQgZWxlbSA9IGFuY2guY2hpbGROb2Rlc1t4KjEwK3ldO1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBwbGF5ZXIuZ2IucGxhY2VTaGlwKHgsIHksIGF4aXMsIHNoaXBzWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICBpZihwbGFjZWQpe1xuICAgICAgICAgICAgICAgIHNoaXBzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVTaGlwQ29tbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzUGxhY2VkXCIpLCBzaGlwcy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYoc2hpcHMubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgIHJlbW92ZVNoaXBTZXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vb25jZSB5b3UgYWRkIHRoZSBzaGlwIHlvdSBoYXZlIHRvIHJlZnJlc2ggdGhlIGdyaWQgYW5kIGFkZCB0aGUgZXZlbnRMaXN0ZW5lcnMgYWdhaW5cbiAgICAgICAgICAgIHNob3dXaG9sZShhbmNoLCBwbGF5ZXIuZ2IpO1xuICAgICAgICAgICAgYWRkRXZlbnRQbGFjZVNoaXBUb0NlbGxzKGFuY2gsIHBsYXllciwgc2hpcHMsIGF4aXMpO1xuICAgICAgICB9KVxuICAgIH0pKVxufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwU2V0dGVyKCl7XG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyYW1lXCIpO1xuICAgIGlmKGVsZW0gJiYgZWxlbSE9bnVsbCl7XG4gICAgICAgIGVsZW0ucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmKHdpbmRvdy5BSU1vZGUgPT0gdHJ1ZSl7XG4gICAgICAgIC8vaWYgdGhlIG1vZGUgaXMgQUksIHBvcHVsYXRlIHRoZSBwMiBib2FyZCAocDIgaXMgYWx3YXlzIHRoZSBBSSlcbiAgICAgICAgQUkoKS5wbGFjZUFsbFJhbmRvbVNoaXBzKHAyLmdiKTtcbiAgICB9XG4gICAgZ2FtZShwMSwgcDIpO1xufVxuXG5cbmV4cG9ydCB7c2hvd1dob2xlLCBzaG93SGlkZGVuLCBnYW1lLCBzaGlwU2V0dGVyLCByZXNldEdhbWV9IiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBGYWN0b3J5LmpzXCI7XG5cbmZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoaW5wdXRTaXplKXtcbiAgICAvL2JvYXJkIGNlbGwgc3RhdGVzOiAtMS1taXNzIDAtZGVmYXVsdCAxLWhpdCAyLWlzU3Vua1xuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGxldCBzaGlwc1BsYWNlZCA9IFtdO1xuICAgIGNvbnN0IGdyaWRTaXplID0gaW5wdXRTaXplIHx8IDEwO1xuICAgIGZvcihsZXQgaT0wOyBpPGdyaWRTaXplOyBpKyspe1xuICAgICAgICAvL2luaXRpYWxpemUgYm9hcmQgaW4gdGhlIGRlZmF1bHQgc3RhdGUgb2YgMFxuICAgICAgICBib2FyZC5wdXNoKFtdKTtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8Z3JpZFNpemU7IGorKyl7XG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVjZWl2ZURhbWFnZSA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGxldCBjZWxsID0gYm9hcmRbeF1beV07XG4gICAgICAgIGxldCBjZWxsQmVmb3JlID0gT2JqZWN0LmFzc2lnbih7fSwgY2VsbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGxCZWZvcmUuc3RhdGUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ERUxFVEVcbiAgICAgICAgY2VsbEhpdChjZWxsKTtcbiAgICAgICAgdXBkYXRlKCk7IC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwuc3RhdGUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ERUxFVEVcbiAgICAgICAgY29uc29sZS5sb2coY2VsbEJlZm9yZS5zdGF0ZSAhPSBjZWxsLnN0YXRlKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RFTEVURVxuICAgICAgICByZXR1cm4gKGNlbGxCZWZvcmUuc3RhdGUgIT0gY2VsbC5zdGF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpPT57XG4gICAgICAgIGJvYXJkLmZvckVhY2goY29sdW1uID0+IGNvbHVtbi5mb3JFYWNoKGNlbGwgPT4gdXBkYXRlQ2VsbChjZWxsKSkpXG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHgsIHksIGF4aXMsIGxlbmd0aCkgPT4ge1xuICAgICAgICBsZXQgY29sbCA9IGNoZWNrQ29sbGlzaW9uKHgsIHksIGF4aXMsIGxlbmd0aCk7XG4gICAgICAgIGxldCBzaGlwO1xuICAgICAgICBpZighY29sbCl7XG4gICAgICAgICAgICBzaGlwID0gc2hpcEZhY3RvcnkobGVuZ3RoKTtcbiAgICAgICAgICAgIGF4aXMgPSAoYXhpcyA9PSBcInhcIik7IC8vaWYgYXhpcyBpcyBYLCBpdCB3aWxsIGJlIG5ldXRyYWwgdG8gaSwgb3RoZXJ3aXNlIGl0IHdpbGwgbnVsbGlmeSBpdC4gSXQncyBvcHBvc2l0ZSB3aWxsIGRvIHRoZSBvcHBvc2l0ZS5cbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBib2FyZFt4K2kqYXhpc11beStpKiFheGlzXS5oaXQgPSAoKSA9PiB7cmV0dXJuIHNoaXAuaGl0KGkpfTtcbiAgICAgICAgICAgICAgICBib2FyZFt4K2kqYXhpc11beStpKiFheGlzXS5pc1N1bmsgPSBzaGlwLmlzU3VuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBzUGxhY2VkLnB1c2goc2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFjb2xsO1xuICAgIH1cbiAgICBjb25zdCBjaGVja0NvbGxpc2lvbiA9ICh4LCB5LCBheGlzLCBsZW5ndGgpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYSBjb2xsaXNpb24gZGV0ZWN0ZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmKGF4aXMgPT0gXCJ4XCIpe1xuICAgICAgICAgICAgY29sbGlzaW9uID0gKHgrbGVuZ3RoKSA+IGJvYXJkLmxlbmd0aCA/IHRydWUgOiBmYWxzZTsgIC8vY2hlY2sgaWYgb3V0IG9mIGJvdW5kc1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoICYmICFjb2xsaXNpb247IGkrKyl7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIGhpdCBmdW5jdGlvbiB0aGVyZSBpcyBhIHNoaXAsIHNvIGl0IHdvdWxkIGNvbGxpZGUsIGFsc28gY2hlY2sgaWYgb3V0IG9mIGJvdW5kc1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3graV1beV0uaGl0KXtjb2xsaXNpb24gPSB0cnVlfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSAoeStsZW5ndGgpID4gYm9hcmRbeF0ubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlOyAgLy9jaGVjayBpZiBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGggJiYgIWNvbGxpc2lvbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgaGl0IGZ1bmN0aW9uIHRoZXJlIGlzIGEgc2hpcCwgc28gaXQgd291bGQgY29sbGlkZVxuICAgICAgICAgICAgICAgIGlmKGJvYXJkW3hdW3kraV0uaGl0KXtjb2xsaXNpb24gPSB0cnVlfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG4gICAgY29uc3QgZW5kT2ZHYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHNQbGFjZWQuZXZlcnkocGxhY2VkID0+IHBsYWNlZC5pc1N1bmsoKSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZWNlaXZlRGFtYWdlLFxuICAgICAgICB1cGRhdGUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgZW5kT2ZHYW1lXG4gICAgfVxuXG4gICAgLyoge1xuICAgICAgICBib2FyZFtdW11cbiAgICAgICAgcmVjZWl2ZURhbWFnZSgpXG4gICAgICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgICAgIHNoaXBzUGxhY2VkW11cbiAgICAgICAgICAgIGVuZCBvZiBnYW1lP1xuICAgICAgICAgICAgcGxhY2VzaGlwXG4gICAgICAgICAgICAgICAgb3ZlcmxhcD9cbiAgICB9ICovXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNlbGwoY2VsbCl7XG4gICAgLy9pZiB0aGUgc3RhdGUgaXMgMSwgdGhlIHNoaXAgbWlnaHQgaGF2ZSBiZWVuIHN1bmssIG90aGVyd2lzZSBpdCBjYW5ub3QgY2hhbmdlIGR1cmluZyB0aGUgdXBkYXRlXG4gICAgY2VsbC5zdGF0ZSA9IGNlbGwuc3RhdGUgPT0gMSA/IGNlbGwuaGl0KCkrY2VsbC5pc1N1bmsoKSA6IGNlbGwuc3RhdGU7XG4gICAgcmV0dXJuIGNlbGw7XG59XG5mdW5jdGlvbiBjZWxsSGl0KGNlbGwpe1xuICAgIGlmKGNlbGwuaGl0KXtcbiAgICAgICAgY29uc29sZS5sb2coYHByZSBjYWxjOiR7Y2VsbC5zdGF0ZX1gKVxuICAgICAgICAvL2lmIHRoZXJlIGlzIGEgaGl0IGZ1bmN0aW9uIHRoZXJlIGlzIGEgc2hpcFxuICAgICAgICBjZWxsLnN0YXRlID0gY2VsbC5oaXQoKSAvKiArIGNlbGwuaXNTdW5rKCkgKi87XG4gICAgfWVsc2V7XG4gICAgICAgIC8vb3RoZXJ3aXNlIGl0J3MgYSBtaXNzXG4gICAgICAgIGNlbGwuc3RhdGUgPSAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGNlbGw7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUNlbGwsIGNlbGxIaXQgfVxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeTsiLCIvKiBzaGlwIHtcbiAgICBsZW5ndGg6IDtcbiAgICBoaXRwb2ludHM6IFswLCAwLCAwXTtcbiAgICBoaXQ6IGZ1bmN0aW9uIGhpdDtcbiAgICBpc1N1bms6IGZ1bmN0aW9uIHJldHVybiBzdW5rIHRydWUgb3IgZmFsc2U7XG59ICovXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwRmFjdG9yeShsZW5ndGgpe1xuICAgIGxldCBoaXRwb2ludHMgPSBbXTtcbiAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XG4gICAgICAgIGhpdHBvaW50cy5wdXNoKDApO1xuICAgIH1cbiAgICBjb25zdCBoaXQgPSAobikgPT4ge1xuICAgICAgICAvL3JlZ2lzdGVycyB0aGUgaGl0IGluIGhpdHBvaW50cyBhbmQgcmV0dXJucyAxLlxuICAgICAgICBoaXRwb2ludHNbbl0gPSAxO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgc2hpcCBpcyBzdW5rXG4gICAgICAgIHJldHVybiBoaXRwb2ludHMuZXZlcnkocG9pbnQgPT4gcG9pbnQgPT0gMSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0cG9pbnRzLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hpcEZhY3RvcnkgfVxuXG4vKiBtb2R1bGUuZXhwb3J0cyA9IHtcbnNoaXBGYWN0b3J5XG59ICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBGYWN0b3J5LmpzXCI7ICovXG5pbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tIFwiLi9nYW1lYm9hcmRGYWN0b3J5LmpzXCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCAqIGFzIGRvbVN0dWZmIGZyb20gXCIuL2RvbS5qc1wiXG5cblxud2luZG93LnAxID0ge1xuICAgIG5hbWU6IFwiUGxheWVyIDFcIixcbiAgICBnYjogZ2FtZWJvYXJkRmFjdG9yeSgpLFxuICAgIGFuY2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkVGVzdC5wbGF5ZXJPbmVcIilcbn1cbndpbmRvdy5wMiA9IHtcbiAgICBuYW1lOiBcIlBsYXllciAyXCIsXG4gICAgZ2I6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICBhbmNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZFRlc3QucGxheWVyVHdvXCIpXG59XG53aW5kb3cuYWxsU2hpcHMgPSBbe2xlbmd0aDogM31dO1xud2luZG93LkFJTW9kZSA9IHRydWU7IC8vd2hlbiBtdWx0aXBsYXllciBpbXBsZW1lbnRlZCB0aGlzIG5lZWRzIHRvIGJlIGNoYW5nZWQgdG8gZmFsc2VcblxuY29uc3QgbWFpblJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldEJ0bi5tYWluQnRuXCIpO1xubWFpblJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb21TdHVmZi5yZXNldEdhbWUpXG5cblxuLyoqL1xubGV0IHAxID0gd2luZG93LnAxO1xubGV0IHAyID0gd2luZG93LnAyO1xucDEuZ2IucGxhY2VTaGlwKDEsIDEsIFwieFwiLCA0KTtcbnAxLmdiLnBsYWNlU2hpcCg5LDksIFwieVwiLCAxKTtcbmNvbnNvbGUudGFibGUocDEuZ2IudXBkYXRlKCkubWFwKGNvbHVtbiA9PiBjb2x1bW4ubWFwKGl0ZW09PntcbiAgICByZXR1cm4gaXRlbS5oaXQ7XG59KSkpO1xuLyogZG9tU3R1ZmYuZ2FtZShwMSwgcDIpOyAqLyAvL25vdCBuZWVkZWQgYXMgaSBjYW4gc3RhcnQgdGhlIGdhbWUgZXZlcnl0aW1lIHRoZSBzZXR0ZXIgaXMgZG9uZSwgaW5zdGVhZCBvZiBvbiBsb2FkXG5cbi8qIGRvbVN0dWZmLnNoaXBTZXR0ZXIocDEpOyAqL1xuZG9tU3R1ZmYucmVzZXRHYW1lKCk7XG5cblxuLyogZG9tU3R1ZmYuc2hvd1dob2xlKHAxLmFuY2gsIHAxLmdiKTsgKi9cbi8qKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
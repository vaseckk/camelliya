/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_sum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/sum.js */ \"./src/js/module/sum.js\");\n\r\n\r\nfunction myFunction() {\r\n    let myBlock = document.getElementById(\"button-none_sms\");\r\n    let currentDisplay = myBlock.style.display;\r\n\r\n    if(currentDisplay === \"block\") {\r\n        myBlock.style.display = \"none\";\r\n    }\r\n    else {\r\n        myBlock.style.display = \"block\";\r\n    }\r\n}\r\n\r\nfunction myFunctionclose() {\r\n    document.getElementById(\"button-none_sms\").style.display = \"none\";\r\n}\r\n\r\n\r\ndocument.getElementById(\"button-close_sms\").addEventListener(\"click\", myFunction);\r\n\r\ndocument.getElementById(\"close-button_sms\").addEventListener(\"click\", myFunctionclose);\r\n\r\n\r\n/*const edem = document.getElementById('edem');\r\nconst modal = document.getElementsByClassName('modalVisitka')\r\nconst clickOnEdem = document.getElementById('clickOnEdem');\r\n\r\nclickOnEdem.addEventListener('click', Showonclick)\r\n\r\nfunction Showonclick () {\r\n    clickOnEdem.classList.remove = edem;\r\n    clickOnEdem.classList.add = modalVisitka;\r\n}*/\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/sum.js":
/*!******************************!*\
  !*** ./src/js/module/sum.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((a, b) => a + b);\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/sum.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
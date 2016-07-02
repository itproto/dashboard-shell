/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	console.info('shell is loading');
	
	var loadApp = function loadApp(appName) {
	  System.import('apps/' + appName + '.js').then(function (res) {
	    var mod = res;
	    mod.inc();
	    console.info(res);
	  }, function (err) {
	    console.error(err);
	  });
	};
	
	var bootShell = function bootShell() {
	  document.querySelector('#apps').addEventListener('click', function (evt) {
	    if (evt.target.tagName !== 'A') {
	      return;
	    }
	
	    evt.preventDefault();
	    var appName = evt.target.getAttribute('href').slice(1);
	
	    loadApp(appName);
	  });
	};
	
	document.addEventListener('DOMContentLoaded', bootShell);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
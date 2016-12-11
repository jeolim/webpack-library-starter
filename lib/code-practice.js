(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("code-practice", [], factory);
	else if(typeof exports === 'object')
		exports["code-practice"] = factory();
	else
		root["code-practice"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _runLinkedList = __webpack_require__(4);
	
	var _runLinkedList2 = _interopRequireDefault(_runLinkedList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _linkedlist = __webpack_require__(5);
	
	var _linkedlist2 = _interopRequireDefault(_linkedlist);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cities = new _linkedlist2.default();
	cities.insert("Conway", "head");
	cities.insert("Russellville", "Conway");
	cities.insert("Carlisle", "Russellville");
	cities.insert("Alma", "Carlisle");
	cities.display();
	console.log('\n');
	cities.remove("Carlisle");
	cities.display();

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	exports.default = LList;
	function Node(element) {
	   this.element = element;
	   this.next = null;
	}
	
	function LList() {
	   this.head = new Node("head");
	   this.find = find;
	   this.insert = insert;
	   this.display = display;
	   this.findPrevious = findPrevious;
	   this.remove = remove;
	}
	
	function remove(item) {
	   var prevNode = this.findPrevious(item);
	   if (prevNode.next !== null) {
	      prevNode.next = prevNode.next.next;
	   }
	}
	
	function findPrevious(item) {
	   var currNode = this.head;
	   while (currNode.next !== null && currNode.next.element !== item) {
	      currNode = currNode.next;
	   }
	   return currNode;
	}
	
	function display() {
	   var currNode = this.head;
	   while (currNode.next !== null) {
	      console.log(currNode.next.element);
	      currNode = currNode.next;
	   }
	}
	
	function find(item) {
	   var currNode = this.head;
	   while (currNode.element !== item) {
	      currNode = currNode.next;
	   }
	   return currNode;
	}
	
	function insert(newElement, item) {
	   var newNode = new Node(newElement);
	   var current = this.find(item);
	   newNode.next = current.next;
	   current.next = newNode;
	}
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=code-practice.js.map
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
	
	var _graph = __webpack_require__(1);
	
	var _graph2 = _interopRequireDefault(_graph);
	
	var _bst = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// var home = new Graph(12); //number passed here is number of vertices in this graph
	// //Neo4J - db for graphs, connections,
	
	// //create all the connection edges
	// //Question: do I need to create the connections in both directions?
	// //Answer: You do need at least every city represented as the first parameter
	// home.addEdge(0,1); //Seattle to Shoreline
	// home.addEdge(0,2); //Seattle to SoDo
	// home.addEdge(1,4); //Shoreline to Bothell
	// home.addEdge(2,3); //SoDo to Renton
	// home.addEdge(3,2); //Renton to SoDo
	// home.addEdge(3,10); //Renton to Olympia
	// home.addEdge(4,6); //Bothell to Lynnwood
	// home.addEdge(4,5); //Bothell to Kirkland
	// home.addEdge(5,4); //Kirkland to Bothell
	// home.addEdge(5,7); //Kirkland to Bellevue
	// home.addEdge(5,11); //Kirkland to Redmond
	// home.addEdge(6,4); //Lynwood to Bothell
	// home.addEdge(6,8); //Lynnwood to Everett
	// home.addEdge(7,3); //Bellevue to Renton
	// home.addEdge(7,9); //Bellevue to Issaquah
	// home.addEdge(8,6); //Everett to Lynnwood
	// home.addEdge(9,7); //Issaquah to Bellevue
	// home.addEdge(10,3); //Olympia to Renton
	// home.addEdge(11,5); //Redmond to Kirkland
	// home.vertexList = ["Seattle","Shoreline","SoDo", //0 1 2
	//                     "Renton","Bothell","Kirkland", //3 4 5
	//                     "Lynnwood","Bellevue","Everett", //6 7 8
	//                     "Issaquah","Olympia","Redmond"]; //9 10 11
	
	
	var home = new _graph2.default(5);
	home.addEdge(0, 1);
	home.addEdge(0, 2);
	home.addEdge(1, 3);
	home.addEdge(2, 4);
	home.vertexList = ["Seattle", "Shoreline", "SoDo", //0 1 2
	"Renton", "Bothell"]; //9 10 11
	
	// home.showGraph();
	home.breadthFirstSearch(0);
	
	// home.showGraph();
	
	// home.topSort();
	// home.depthFirstSearch(0); //start in seattle
	// home.breadthFirstSearch(0); //start in seattle
	
	var vertex = 4; //everett is destination
	var source = 0;
	var paths = home.pathTo(source, vertex);
	console.log('paths: ', paths);
	// home.showPath(paths); //expected outcome:0 1 4 6 8 (Seattle, Shoreline, Bothell, Lynnwood, Everett)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Graph;
	
	var _graphSort = __webpack_require__(2);
	
	var _graphSort2 = _interopRequireDefault(_graphSort);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Graph(v) {
	  this.vertices = v;
	  this.edges = 0;
	  this.adjacencies = [];
	
	  this.marked = [];
	  this.edgeTo = [];
	  this.vertexList = [];
	
	  //Fixme: don't need to make this for loop at the start of creating a graph
	  for (var i = 0; i < this.vertices; ++i) {
	    //for every vertex
	    this.adjacencies[i] = []; //push empty array to vertex location in adjacencies array
	  }
	};
	
	Graph.prototype.addVertex = function (data) {}; //this.vertices.push({data: data, visited: false});};
	
	Graph.prototype.depthFirstSearch = function (v) {
	  //pass in a vertex number
	  this.marked[v] = true; //mark its index in the marked array true
	  if (this.adjacencies[v] !== undefined) {
	    //if this vertex number exists in adjacencies
	    console.log('Visited vertex: ' + this.vertexList[v], v); //console log that it was visited
	  }
	  for (var i = 0; i < this.adjacencies[v].length; i++) {
	    var w = this.adjacencies[v][i];
	    if (!this.marked[w]) {
	      this.depthFirstSearch(w);
	    }
	  }
	};
	
	Graph.prototype.addEdge = function (from, to) {
	  //8,3 example data
	  this.adjacencies[from].push(to); //puts 3 into index 8
	  this.adjacencies[to].push(from);
	  this.edges++;
	};
	
	//Prints the long list of city name connections with arrows -->
	Graph.prototype.showGraph = function () {
	  var str;
	  for (var i = 0; i < this.vertices; ++i) {
	    str = '';
	    str += i + " -> ";
	    for (var j = 0; j < this.vertices; ++j) {
	      if (this.adjacencies[i][j] != undefined) {
	        str += this.adjacencies[i][j] + ' ';
	      }
	    }
	
	    console.log(str);
	  }
	};
	
	Graph.prototype.breadthFirstSearch = function (source) {
	  // debugger;
	  var queue = [];
	  queue.push(source);
	
	  this.marked[source] = true;
	  while (queue.length > 0) {
	    var v = queue.shift();
	
	    if (v !== undefined) {
	      // console.log('Visited vertex: ' + v);
	      console.log('Visited vertex: ' + this.vertexList[v], v);
	    }
	
	    for (var i = 0; i < this.adjacencies[v].length; i++) {
	      var w = this.adjacencies[v][i];
	      if (!this.marked[w]) {
	        this.edgeTo[w] = v;
	        this.marked[w] = true;
	        queue.push(w);
	      }
	    }
	  }
	};
	
	(0, _graphSort2.default)(Graph);
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = GraphSort;
	function GraphSort(Graph) {
	  /*
	  Top sort is like depth-first except it doesn't print the vertex as it visits them
	  Instead, the algorithm visits the adjacent vertices first and then pushes the current
	  vertex onto a stack.
	  */
	
	  Graph.prototype.topSort = function () {
	    //topological sort
	    var stack = []; //this stack array will hold vertices?
	    var visited = []; //create an array for visited vertices
	
	    //first set all vertices to not visited (resetting things)
	    for (var i = 0; i < this.vertices; i++) {
	      visited[i] = false;
	    }
	
	    //now go through again, this time using topSortHelper on any unvisited vertices encountered
	    for (var i = 0; i < this.vertices; i++) {
	      if (visited[i] == false) {
	        this.topSortHelper(i, visited, stack);
	      }
	    }
	
	    //vertices are in a stack now and we'll use that stack to console.log each of them
	    for (var i = 0; i < stack.length; i++) {
	      console.log("City " + i + ": " + this.vertexList[stack[i]]);
	    }
	  };
	
	  Graph.prototype.topSortHelper = function (v, visited, stack) {
	    //mark this vertice as visited, visit the adjacent ones
	    visited[v] = true;
	    for (var i = 0; i < this.adjacencies[v]; i++) {
	      var adjvertex = this.adjacencies[v][i]; //offby1 this was the missing line
	
	      if (!visited[adjvertex]) {
	        //re-run function on adjacent vertices to this one
	        this.topSortHelper(visited[adjvertex], visited, stack); //this is where 0 gets set to false
	      }
	    }
	    stack.push(v); //push this vertex to the stack
	  };
	
	  Graph.prototype.pathTo = function (source, v) {
	    //source and vertex come in from program file
	    // debugger;
	    if (!this.hasPathTo(v)) {
	      //if there's no path to the vertex, return undefined
	      return undefined;
	    }
	    var shortestpath = []; //make an empty path array
	    for (var i = v; i != source; i = this.edgeTo[i]) {
	      //set i = to v, and push every path to the array
	      shortestpath.push(i);
	    }
	    shortestpath.push(source); //push in the source ("0" in this test) last
	    return shortestpath; //return the path array to the main file
	  };
	
	  Graph.prototype.hasPathTo = function (v) {
	    return this.marked[v];
	  };
	
	  Graph.prototype.showPath = function (paths) {
	    var str = '';
	    var num = 0;
	    while (paths.length > 0) {
	      if (paths.length > 1) {
	        num = paths.pop();
	        str += num + " " + this.vertexList[num] + '--> '; //builds the string that gets displayed in console
	      } else {
	        num = paths.pop();
	        str += num + " " + this.vertexList[num];
	      }
	    }
	    console.log("Shortest path: " + str);
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BST = function BST() {
	  this.root = null;
	
	  //embed _Node inside BST so it comes with when BST is created
	  this._Node = function (data, left, right) {
	    this.data = data;
	    this.count = 1;
	    this.left = left;
	    this.right = right;
	  };
	
	  this._Node.prototype.show = function () {
	    return this.data;
	  };
	
	  this._Node.prototype.showCount = function () {
	    return this.count;
	  };
	};
	
	BST.prototype.find = function (data) {
	  var current = this.root;
	  while (current && current.data != data) {
	    if (data < current.data) {
	      current = current.left;
	    } else {
	      current = current.right;
	    }
	  }
	  return current;
	};
	
	BST.prototype.insert = function (data) {
	  //use this data for a new node
	  var n = new this._Node(data, null, null);
	  //if root is null, put this new node and its data into root
	  if (this.root === null) {
	    this.root = n;
	  } else {
	    //find a child position for this node
	    var current = this.root;
	    var parent;
	    while (true) {
	      parent = current;
	      if (data < current.data) {
	        current = current.left;
	        if (current === null) {
	          parent.left = n;
	          break;
	        }
	      } else {
	        current = current.right;
	        if (current === null) {
	          parent.right = n;
	          break;
	        }
	      }
	    }
	  }
	};
	
	BST.prototype.inOrder = function (node) {
	  if (node !== null) {
	    this.inOrder(node.left);
	    console.log(node.show() + ": " + node.showCount() + " ");
	    this.inOrder(node.right);
	  }
	};
	
	BST.prototype.preOrder = function (node) {
	  if (node !== null) {
	    //console.log(node.show() + " ");
	    this.preOrder(node.left);
	    this.preOrder(node.right);
	  }
	};
	
	BST.prototype.postOrder = function (node) {
	  //use post order when traversing for removal
	  if (node !== null) {
	    this.postOrder(node.left);
	    this.postOrder(node.right);
	    //console.log(node.show() + " ");
	  }
	};
	
	BST.prototype.remove = function (data) {
	  root = removeNode(this.root, data);
	};
	
	BST.prototype.removeNode = function (node, data) {
	  if (node === null) {
	    return null;
	  }
	  if (data == node.data) {
	    //node has no children
	    if (node.left === null && node.right === null) {
	      return null;
	    }
	    //node has no left child
	    if (node.left === null) {}
	  }
	};
	
	BST.prototype.update = function (data) {
	  var occurrences = this.find(data);
	  occurrences.count++;
	  return occurrences;
	};
	
	/*
	BST.prototype.printNodes = function(arr) {
	  var str = '';
	  this.inOrder
	  for (var i = 0; i < arr.length; i++) {
	    str += arr[i].toString() + ': ' + arr[i].count + '\n';
	  }
	  return str;
	};
	*/
	
	/*
	1.  Add a function to the BST class that counts the number of nodes in a BST.
	*/
	
	BST.prototype.countNodes = function (node) {
	  if (!node) {
	    //formerly if (node === null). Doing !node catches "undefined" as well.
	    return null;
	  }
	  //if the node has no children, return 1
	  if (!node.left && !node.right) {
	    return 1;
	  } else {
	    //otherwise, re-run this function with the node's left and right children
	    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
	  }
	};
	
	/*
	2. Add a function to the BST class that counts the number of edges in a BST.
	Traverse the tree in order, answer is one less than the number of nodes
	*/
	
	BST.prototype.countEdges = function (node) {
	  return this.countNodes(node) - 1;
	};
	
	/*
	3. Add a max() function to the BST class that finds the maximum value in a BST.
	*/
	//Since the larger value is always to the right, just traverse to the end.
	
	BST.prototype.max = function (node) {
	  var currNode = this.root; //set the max to zero to start, on the assumption all nodes are positive nums
	  while (currNode.right !== null) {
	    currNode = currNode.right;
	  }
	  return currNode.data;
	};
	
	/*
	4. Add a min() function to the BST class that finds the minimum value in a BST.
	*/
	
	//since the smaller value is always to the left, we only have to traverse left
	BST.prototype.min = function () {
	  var currNode = this.root;
	  while (currNode.left !== null) {
	    currNode = currNode.left;
	  }
	  return currNode.data;
	};
	
	exports.BST = BST;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=code-practice.js.map
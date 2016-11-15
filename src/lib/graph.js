import AddGraphSort from './graph-sort.js';

export default function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adjacencies = [];

  this.marked = [];
  this.edgeTo = [];
  this.vertexList = [];

  //Fixme: don't need to make this for loop at the start of creating a graph
  for (var i = 0; i < this.vertices; ++i) { //for every vertex
    this.adjacencies[i] = []; //push empty array to vertex location in adjacencies array
  }
};

Graph.prototype.addVertex = function(data) {}//this.vertices.push({data: data, visited: false});};

Graph.prototype.depthFirstSearch = function(v) { //pass in a vertex number
  this.marked[v] = true; //mark its index in the marked array true
  if (this.adjacencies[v] !== undefined ) { //if this vertex number exists in adjacencies
    console.log('Visited vertex: ' + this.vertexList[v], v); //console log that it was visited
  }
  for (var i = 0; i < this.adjacencies[v].length; i++) {
    var w = this.adjacencies[v][i];
    if (!this.marked[w]) {
      this.depthFirstSearch(w);
    }
  }
};

Graph.prototype.addEdge = function(from,to) { //8,3 example data
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
}


Graph.prototype.breadthFirstSearch = function(source) {
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

AddGraphSort(Graph);
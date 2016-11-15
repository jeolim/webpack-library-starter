export default function GraphSort (Graph) {
  /*
  Top sort is like depth-first except it doesn't print the vertex as it visits them
  Instead, the algorithm visits the adjacent vertices first and then pushes the current
  vertex onto a stack.
  */

  Graph.prototype.topSort = function() { //topological sort
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

  Graph.prototype.topSortHelper = function(v, visited, stack) {
    //mark this vertice as visited, visit the adjacent ones
    visited[v] = true;
    for (var i = 0; i < this.adjacencies[v]; i ++) {
      var adjvertex = this.adjacencies[v][i]; //offby1 this was the missing line

      if (!visited[adjvertex]) {
        //re-run function on adjacent vertices to this one
        this.topSortHelper(visited[adjvertex], visited, stack); //this is where 0 gets set to false
      }
    }
    stack.push(v); //push this vertex to the stack
  };

  Graph.prototype.pathTo = function(source, v) { //source and vertex come in from program file
    // debugger;
    if (!this.hasPathTo(v)) { //if there's no path to the vertex, return undefined
      return undefined;
    }
    var shortestpath = []; //make an empty path array
    for (var i = v; i != source; i = this.edgeTo[i]) { //set i = to v, and push every path to the array
      shortestpath.push(i);
    }
    shortestpath.push(source); //push in the source ("0" in this test) last
    return shortestpath; //return the path array to the main file
  };

  Graph.prototype.hasPathTo = function(v) {
    return this.marked[v];
  };

  Graph.prototype.showPath = function(paths) {
    var str = '';
    var num = 0;
    while (paths.length > 0) {
      if (paths.length > 1) {
        num = paths.pop();
        str += num + " " + this.vertexList[num] + '--> '; //builds the string that gets displayed in console
      }
      else {
        num = paths.pop();
        str += num + " " + this.vertexList[num];
      }
    }
    console.log("Shortest path: " + str);
  };


}
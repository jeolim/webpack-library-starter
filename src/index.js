import Graph from 'lib/graph.js';
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


var home = new Graph(5);
home.addEdge(0,1); 
home.addEdge(0,2); 
home.addEdge(1,3); 
home.addEdge(2,4);
home.vertexList = ["Seattle","Shoreline","SoDo", //0 1 2
                    "Renton","Bothell"]; //9 10 11

home.showGraph();
home.depthFirstSearch(0);


// home.showGraph();

// home.topSort();
// home.depthFirstSearch(0); //start in seattle
// home.breadthFirstSearch(0); //start in seattle

// var vertex = 8; //everett is destination
// var source = 0;
// var paths = home.pathTo(source, vertex);
// home.showPath(paths); //expected outcome:0 1 4 6 8 (Seattle, Shoreline, Bothell, Lynnwood, Everett)

import {BST} from 'lib/bst.js';

var grades = BST.prototype.genArray(100);
var gradedistro = new BST();

for (var i = 0; i < grades.length; ++i) {
	var g = grades[i];
	var grade = gradedistro.find(g);

	if (grade == null) {
		gradedistro.insert(g);
	} else { 
		gradedistro.update(g);
	}
}

var g = grades[0];
var aGrade = gradedistro.find(g);
if (aGrade == null) {
  console.log("No occurrences of " + g);
} else {
  console.log("Occurrences of " + g + ": " + aGrade.count);
}
gradedistro.inOrder(gradedistro.root);
import {BST} from 'lib/bst.js';

export default function () {
	var nums = new BST(); 
	nums.insert(23); 
	nums.insert(45); 
	nums.insert(16); 
	// debugger
	nums.insert(37); 
	nums.insert(3); 
	nums.insert(99); 
	nums.insert(22);  
	nums.inOrder(nums.root);
}

function Test () {
	this.root = 45;
}

Test.prototype.insert = function () {
	var current = this.root;
	var parent = current;
	// parent.left = 95;
	// console.log('current: ', current);
	// console.log('parent: ', current);
}

var test = new Test();
console.log( test.insert() );



import {BST} from 'lib/bst.js';

export default function () {
	var nums = new BST(); 
	nums.insert(23); 
	nums.insert(45); 
	nums.insert(16); 
	nums.insert(37); 
	nums.insert(3); 
	nums.insert(99); 
	nums.insert(22);  
	nums.inOrder(nums.root);
}
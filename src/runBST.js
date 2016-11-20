import {BST} from 'lib/bst.js';

var nums = new BST(); 
nums.insert(23);
nums.insert(18); 
nums.insert(9); 
nums.insert(15); 
nums.insert(8);
nums.insert(2);
nums.insert(37);

nums.remove(17);
nums.inOrder(nums.root)
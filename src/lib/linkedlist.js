function Node(element) {
   this.element = element;
   this.next = null;
}

export default function LinkedList() {
   this.head = new Node("head");
}

LinkedList.prototype.remove = function (item) {
   var prevNode = this.findPrevious(item);
   if (prevNode.next !== null) {
       prevNode.next = prevNode.next.next;
   }
}

LinkedList.prototype.findPrevious = function (item) {
   var currNode = this.head;
   while ( currNode.next !== null && (currNode.next.element !== item)) {
      currNode = currNode.next;
   }
   return currNode;
}

LinkedList.prototype.display = function () {
   var currNode = this.head;
   while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
   }
}

LinkedList.prototype.find = function (item) {
   var currNode = this.head;
   while (currNode.element !== item) {
      currNode = currNode.next;
   }
   return currNode;
}

LinkedList.prototype.insert = function (newElement, item) {
   var newNode = new Node(newElement);
   var current = this.find(item);
   newNode.next = current.next;
   current.next = newNode;
}

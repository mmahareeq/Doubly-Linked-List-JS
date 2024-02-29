// import DoubleLinkedList from "./doubleLinkedList";
const { DoubleLinkedList } = require('./doubleLinkedList');
console.log("start");

let doubleLinkedList = new DoubleLinkedList();

console.log(doubleLinkedList);
// push these element into linked List.
doubleLinkedList.push(1);
doubleLinkedList.push(2);
doubleLinkedList.push(3);
doubleLinkedList.push(4);

console.log("Pushing into Linked List");
print(doubleLinkedList.head);
console.log(`The length of LinkedList: ${doubleLinkedList.lengthOfList}`);
printReverse(doubleLinkedList.tail);

console.log("------------------------------------------------------------")
// pop the last node 
doubleLinkedList.pop();

console.log("Pop the last node")
print(doubleLinkedList.head);
console.log(`The length of LinkedList: ${doubleLinkedList.lengthOfList}`);
printReverse(doubleLinkedList.tail);

console.log("------------------------------------------------------------")
// // shift a head to next node
doubleLinkedList.shift();

console.log("Shifting a head to next node")
print(doubleLinkedList.head);
console.log(`The length of LinkedList: ${doubleLinkedList.lengthOfList}`);
printReverse(doubleLinkedList.tail);


console.log("------------------------------------------------------------")
// // unshift 
doubleLinkedList.unshilft(5);

console.log("add new node at beganing of linked list")
print(doubleLinkedList.head);
console.log(`The length of LinkedList: ${doubleLinkedList.lengthOfList}`);
printReverse(doubleLinkedList.tail);

console.log("------------------------------------------------------------")
// get 

let val = doubleLinkedList.get(1);

console.log(`a value of the node at index 1 : ${val}`);

console.log("------------------------------------------------------------")
// set 

doubleLinkedList.set(2,7);

console.log("update the value of a node ")
print(doubleLinkedList.head);
console.log(`The length of LinkedList: ${doubleLinkedList.lengthOfList}`);
printReverse(doubleLinkedList.tail);
console.log("------------------------------------------------------------")

// insert new node into linked list at specific index
doubleLinkedList.insert(1,8);
console.log("insrting a new node at the given index")
print(doubleLinkedList.head);
console.log(`The length of LinkedList: ${doubleLinkedList.lengthOfList}`);
printReverse(doubleLinkedList.tail);

console.log("------------------------------------------------------------")

// remove 
doubleLinkedList.remove(3);
console.log("Removeing node at the given index");
print(doubleLinkedList.head);
console.log(`The length of LinkedList: ${doubleLinkedList.lengthOfList}`);
printReverse(doubleLinkedList.tail);

console.log("------------------------------------------------------------")
function print(head){
    
    let temp = head; 
    if(!temp){
        return ;

    }else{
        while(temp !== null){
           console.log(temp.data + "->");
           temp = temp.next;           
        }
    }
}

function printReverse(tail){
    
    let temp = tail; 
    if(!temp){
        return ;

    }else{
        while(temp !== null){
           console.log(temp.data + "->");
           temp = temp.previous;           
        }
    }
}
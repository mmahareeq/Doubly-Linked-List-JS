// import Node from './node.js';

const { Node } = require('./node.js')

class DoubleLinkedList {

    constructor(head = null, tail = null, lengthOfList = 0) {
        this.head = head;
        this.tail = head;
        this.lengthOfList = lengthOfList;
    }

    //  The push method takes a value as a parameter and assigns it as the tail of the list

    push(val) {
        if (!this.head && !this.tail) {
            let newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
            this.lengthOfList++;
        } else {
            let newNode = new Node(val);
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            this.lengthOfList++;
        }
    }

    // // The pop method removes the tail of the list

    pop() {
        if (!this.tail && !this.head) {
            return "linked list is empty"
        } else {
            let tempNode = this.tail.previous;
            this.tail = tempNode;
            this.tail.next = null;
            this.lengthOfList--;
        }
    }
    // The shift method removes the head of the list
    shift() {
        if (!this.head) {
            return
        } else {
            this.head = this.head.next;
            this.head.previous = null;
            this.lengthOfList--;
        }
    }

    unshilft(val){
        if(!this.head){
            let newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
            this.lengthOfList++;
        }else{
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
            this.lengthOfList++;            
        }
    }
    // The get method takes an index number as a parameter and returns the value of the node at that index
    get(index){

        if(this.lengthOfList === 0){
            return "linked list is empty"
        }else if(index > this.lengthOfList-1){
            return "exceeded the bounds"
        }else{
            let temp = this.head;
            for(let i =0; i<index && temp !=null; i++){
                 temp = temp.next;
            }
            return temp.data;
        }
    }
    //The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
    set(index, val){
        if(!this.lengthOfList){
            this.push(val);
        }else{
            let temp = this.head;
            for(let i =0; i<index && temp.next; i++){
                 temp = temp.next;
            }
            temp.data = val;
        }
    }

   // insert(index, val)    // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list. It returns true on successful insert or false
   // there are three possibility to adding new node into linked list.
   // 1. add at beginning of a linked list
   // 2. at middle of linked list 
   // 3. at endding of a linked list 

   insert(index, val){
        if(!this.lengthOfList){
            this.push(val);

        }else if(index === this.lengthOfList){
            let newNode = new Node(val);
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            this.lengthOfList++;
        }else{
            let temp = this.head;
            for(let i = 0; i<index && temp; i++){
                 temp = temp.next;
            }
            let newNode = new Node(val);
            newNode.next = temp;
            newNode.previous = temp.previous;
            temp.previous.next = newNode;
            temp.previous = newNode;
            this.lengthOfList++;
           
        }

        return true;
    }
    //remove(index)   // The remove method takes an index number as a parameter and removes the node at the given index in the list\
    // remove a node from linked list , there are three possibility: 
    // 1.  remove from beginning of  a linked list 
    // 2. from middle of a linked list. 
    //  3. from ending of a linked list. 
    remove(index){
        if(!this.lengthOfList || index >  this.lengthOfList){
          return ""
        }else if (index == this.lengthOfList-1){
            this.tail = this.tail.previous;
            this.tail.next =null;
            this.lengthOfList--;
        }
          else{
            let temp = this.head;
            for(let i =0; i<index && temp.next ; i++){
                 temp = temp.next;
            }
            temp.next = temp.next.next;
            temp.next.previous = temp.next.previous.previous;
            this.lengthOfList--;
           
        }
    }
}

module.exports.DoubleLinkedList = DoubleLinkedList;
// function sum(num1, num2 = 13) { //there are required arguments and optional arguments- theat are put in []
//     // there are also default  values e.g (num1, num2=0)
//     let result = num1 + num2
//     return result

// }

// let sumd = sum(12) // create a global scope variable to store the value of the functions computation
// console.log(sumd);

// function sum(...args) { //the (...)rest operator is used when having an array of parameters or arguments and appears at the end of the array
//     let result = 0; // stores the result at [i]
//     for (let arg of args) {
//         //console.log();
//         result += arg;
//     }
//     return result // the return concept cant be used inside a loop
// }
// let res = sum(10, 20, 30, 40)
// console.log(res);
// // ES6 new features  involve the rest operator and others
// function sum() {
//     console.log(arguments.length);
// }
// sum(10, 20, 30)

// //reduce() method
// function sum(...args) {
//     const sum = args.reduce((initialSum, currentSum) => initialSum + currentSum, 0) // use of the reduce method
//         // reduce syntax  - args.reduce((initialSum, currentSum) => initialSum + currentSum, initialValue)
//     return sum
// }
// console.log(sum(1, 2, 3));

// //spread syntax - (...) , converts the array into a list of values
// let arr1 = [10, 20, 30, 40]
// let arr2 = [100, 200, 300, 400]
// console.log(Math.max(500, ...arr1, ...arr2, 1000));

// //Variable scope
// // global variables can be accessed inside a function
// // local variable inaccessible outside the function


// if (true) {
//     let num = 10 // can't be accessed outside the scope
//     var num = 10 // can be accessed outside the scope
// }
// console.log(num);

// function test(num1, num2) {

//     return function() {
//         let result = num1 + num2
//         return result
//     }
// }
//let test = (num1, num2) => () => result = num1 + num2
// let res = test(2, 3)
// console.log(res());



// function test() {
//     let count = 0

//     return function() {
//         return count;

//     }

// }
// let res = test() //assign the funtion to the res variable
// console.log(res()); // the res variable displays the output of the function

// // Refactoring a code
// let test = (count) => () => count // the first arrow function has an argument count that is returned by the second arrow function

// let res = test(5)
// console.log(res());



// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Recursion // factorial, exponential
// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // process of a function calling itself but it depend on the data, i.e a function within a function with two parts, the base and the recursive
// function myFunc() {
//     myFunc()
// }
// myFunc()

// function myFunc() {
//     const counter
// }

// // recursion example 1
// function myFunc(x, n) {
//     if (n == 1) {
//         return x
//     } else {
//         return x * myFunc(x, n - 1)
//     }
// }
// console.log(myFunc(3, 4));

// // recursion example 2
// function myFunc(number) {
//     console.log(number);
//     let counter = number - 1
//     if (number > 0) {
//         return counter
//     }

// }
// console.log(5);

// //recursion example 3

// let company = { // the same object, compressed for brevity
//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
//     development: {
//         sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
//         internals: [{ name: 'Jack', salary: 1300 }]
//     }
// };

// // The function to do the job
// function sumSalaries(department) {
//     if (Array.isArray(department)) { // case (1) -method that checks if data sent above is an array
//         return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//     } else { // case (2)
//         let sum = 0; // stores the sum 
//         for (let subdep of Object.values(department)) { //checks the values of the object
//             //console.log(subdep); //testing the output
//             sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//             //console.log(sum); //testing the output

//         }
//         return sum; //returns to the same function
//     }
// }
// sumSalaries(company)
//console.log(sumSalaries(company)); // 7700

// function myfunc(x, n) {
//     return myfunc() {
//         let y = x * Math.pow(x, n)
//         let a = n - 1
//         let z = eval(x)
//         if (z !== y) {
//             console.log("wrong");

//         } else {

//         }
//     }
// }


// //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // CallBack Functions -functions called within other functions
// //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function myfunc() {
//     console.log("Good Evening");
// }
// setTimeout(myfunc, 2000) // called outside the function

// let Student = {
//         name: "John Doe",
//         printName() {
//             console.log(`Hello, ${this.name}`);
//         }
//     }
//     // setTimeout(student.printName(), 5000) //setTimeout doesn't work due to the 'this' keyword hence solved as below
// setTimeout(function() { Student.printName() }, 2000) // the method printName() called in another method SetTimeout becomes a callback function

// function singleNode(){ //constructor function syntax has the this key-word
//     this.data = data;
//     this.next = null

// }





// function DoublyLinkedListNode(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
// }
// function DoublyLinkedList (){
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
// }
// DoublyLinkedList.prototype.isEmpty = function(){
//     return this.size == 0;
// }


// DoublyLinkedList.prototype.insertAtTail = function(value) {
// if (this.tail === null) { //If first node
// this.tail = new DoublyLinkedListNode(value);


// this.head = this.tail;
// } else {
// var temp = new DoublyLinkedListNode(value);
// temp.prev = this.tail;
// this.tail.next = temp;
// this.tail = temp;
// }
// this.size++;
// }

// var dll1 = new DoublyLinkedList();
// dll1.insertAtTail(10);

// let number = (array) => {

//     //let newArr = [];

//     array.map((value, index)=>{
//         console.log(`${index + 1}: ${value}`) ;
//     })
// }


// number(['John', 'Kamau', 'Thuo', 'Mwangi'])
function AVLTree (value) {
      this.left = null;
      this.right = null;
      this.value = value;
      this.depth = 1;
  }
  AVLTree.prototype.setDepthBasedOnChildren = function() {
    if (this.node == null) {
          this.depth = 0;
      } else {
          this.depth = 1;
      }
      if (this.left != null) {
          this.depth = this.left.depth + 1;
       }
       if (this.right != null && this.depth <= this.right.depth) {
           this.depth = this.right.depth + 1;
       }
   }

AVLTree.prototype.insert = function(value) {
var childInserted = false;
if (value == this.value) {

return false; // should be all unique
    } else if (value < this.value) {
        if (this.left == null) {
            this.left = new AVLTree(value);
            childInserted = true;
        } else {
            childInserted = this.left.insert(value);
            if (childInserted == true) this.balance();
        }
    } else if (value > this.value) {
        if (this.right == null) {
            this.right = new AVLTree(value);
            childInserted = true;
        } else {
            childInserted = this.right.insert(value);

            if (childInserted == true) this.balance();
        }
    }


    if (childInserted == true) this.setDepthBasedOnChildren();
    return childInserted;
}

console.log(AVLTree(20));


# Array Interview Question

What is Array in JavaScript?


    Array: A data structure in JavaScript that allows you to store multiple values in a single variable.
    Array Element: Each value within an array is called an element. Elements are accessed by their index.
    Array Index: A numeric representation that indicates the position of an element in the array. JavaScript arrays are zero-indexed, meaning the first element is at index 0.
    Array Length: The number of elements in an array. It can be retrieved using the length property.
1. Declaration of an Array
1. Creating an Array using Array Literal
   Syntax:

   let arrayName = [value1, value2, ...];

2. Creating an Array using Array Constructor (JavaScript new Keyword)
   Syntax:

   let arrayName = new Array();

   
Creating and Initializing an array with values 
let courses = new Array("HTML", "CSS", "Javascript", "React"); 

Initializing Array while declaring 
let arr = new Array(3); 


**2.Increase and Decrease the Array Length**

let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"]; 

Increase the array length to 7 
courses.length = 7; 
 
console.log("Array After Increase the Length: ", courses); 

Array After Increase the Length:  [ 'HTML', 'CSS', 'Javascript', 'React', 'Node.js', <2 empty items> ]

// Decrease the array length to 2 
courses.length = 2; 

console.log("Array After decrease the Length: ", courses); 

Array After decrease the Length:  [ 'HTML', 'CSS' ]



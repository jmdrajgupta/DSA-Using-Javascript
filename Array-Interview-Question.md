# Array Interview Question

What is Array in JavaScript?


    Array: A data structure in JavaScript that allows you to store multiple values in a single variable.
    Array Element: Each value within an array is called an element. Elements are accessed by their index.
    Array Index: A numeric representation that indicates the position of an element in the array. JavaScript arrays are zero-indexed, meaning the first element is at index 0.
    Array Length: The number of elements in an array. It can be retrieved using the length property.

**Question1**

Increase and Decrease the Array Length

    let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"]; 
    the array length to 7 
    courses.length = 7; 
    console.log("Array After Increase the Length: ", courses); 

    Array After Increase the Length:  [ 'HTML', 'CSS', 'Javascript', 'React', 'Node.js', <2 empty items> ]

    Decrease the array length to 2 
    courses.length = 2; 

    console.log("Array After decrease the Length: ", courses); 
    Array After decrease the Length:  [ 'HTML', 'CSS' ]

**Question2**

What is the difference between .map() and .forEach()?



    .map() and .forEach() are both array methods that allow you to loop through an array, but they differ in what they return.

    .map() returns a new array with the same length as the original array,
    where each element is the result of applying a callback function to the original element.
    
    .forEach() does not return anything, but it simply executes a callback function on each element of the array.




/*-------SETS - Store unique values of any type-------*/

// Create a set object
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);	// This add will ignor cz it's already in the set

// console.log(set1);

// Another way of adding values to set
// const set2 = new Set([1, true, 'string']);
// console.log(set2);


// Get size of set
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name: 'John'})); //return false cz object is a referenc type data not primitive type 

// console.log({name: 'john'}=== {name: 'john'}); // this will return false cz object data is reference type and each objece may reference to different memory location


// Delete from set
// set1.delete(100);
// console.log(set1);


/*--------Iterate through sets------*/
// For..of loops
// for(let item of set1){
// 	console.log(item);
// }


// forEach loops
// set1.forEach((value)=>{
// 	console.log(value);
// });


// Coverts set to array
const arr = Array.from(set1);
console.log(arr);


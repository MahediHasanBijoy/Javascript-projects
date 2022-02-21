//Create some arrays
const numbers = [22,33,44,55,32,45,23,11];
const numbers2 = new Array(22,33,44,55,66,77,88);
const fruit = ['apple', 'banana','orange', 'pear'];
const mixed = [22,'hello', true, undefined, null, {a:1,b:2}, new Date()];

let val;

//Get array length
val = numbers.length;

//Check if is array
val = Array.isArray(numbers);

//Get single element of array
val = numbers[3];

//insert into array
numbers.push(100);

//replace an element
numbers[2] = 0;

//find index of value
val = numbers.indexOf(0);

// remove element from end
numbers.pop();

//Add element on to front
numbers.unshift(120);

//remove element from front
numbers.shift();

//Splice values splice(start,end)
numbers.splice(1,2);

//Reverse
numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

//Sorting array
val = fruit.sort();
val = numbers.sort();

console.log(numbers);
console.log(val);
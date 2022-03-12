// Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);

// Every symbol are unique so no two symbols can be similar
// console.log(Symbol() === Symbol());

// console.log(`Hello ${sym1.toString()}`);


// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');


const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3  = 'Prop3';
myObj.key4  = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj);

// Symbols are not enumerable in for...in
// for(let i in myObj){
// 	console.log(`${i}: ${myObj[i]}`);
// }

// console.log(myObj);



// Symbols are ignored when use json.stringify()
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
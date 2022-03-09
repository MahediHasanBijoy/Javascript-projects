// Regular function
/*const sayHello = function(){
	console.log('hello');
}

sayHello();*/

// Arrow function
/*const sayHello = () => {
	console.log('hello arrow');
}*/

// If function body has only one statement
/*const sayHello = () => console.log('hello single line');

sayHello();*/

// If the function has only return statement 
/*const singleReturn = () => 'no need return keyword here';

console.log(singleReturn());*/

// Return object
/*const returnObj = () => ({msg: 'Hello'});

console.log(returnObj());*/

// Single parameter doesn't need parenthesis in arrow function
/*const sayHi = name => console.log(`Hello ${name}`);

sayHi('Bijoy');*/

// Multiple parameter needs parenthesis
/*const sayHi = (firstName, lastName) => console.log(`Hi ${firstName} ${lastName}`);
sayHi('Mahedi', 'Hasan');*/


// Using arrow instead of callbacks
const users = ['Hulk', 'Ironman', 'Thor'];
// callbacks used here
/*const nameLengths = users.map(function(name){
	return name.length;
});*/
// arrow function used here-- same as above code
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
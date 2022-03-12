// Destructuring Assignment
let a, b;

// Array Destructurign
/*[a, b] = [100, 200];
console.log(a);*/

// Rest Pattern
/* [a, b, ...rest] = [100, 200, 300, 400, 500];
 console.log(rest);*/

// Object Destructuring
// ({a, b} = { a: 100, b: 200, c: 300, d: 400, e: 500});
// console.log(a);

// ({a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500});
// console.log(rest);

// Array Destructuring
/*const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

console.log(person1, person2, person3);*/

// Parse array returned from function
/*function getPeople(){
	return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);*/

// Object destructuring
const person = {
	name: 'John Doe',
	age: 32,
	city: 'Dhaka',
	gender: 'Male',
	sayHello: function(){
		console.log('Hello');
	}
}

// Old es5 way
/*const name = person.name,
	  age  = person.age,
	  city = person.city;*/
// New es6 destructuring
/*const {name, age, city, gender, sayHello} = person;

console.log(name, age, city, gender);

sayHello();*/


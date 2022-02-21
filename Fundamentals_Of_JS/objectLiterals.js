//define object literal
const person = {
	firstName: 'mahedi',
	lastName: 'hasan',
	age: 25,
	email: 'bijoy@gmail.com',
	hobbies: ['music','footbal','reading'],
	address:{
		city: 'Dhaka',
		state: 'Cumilla'
	},
	getBirthYear: function(){
		return 2020 - this.age;
	}
}

let val;

val = person;
//Get specific value
val = person.firstName;		//recommended way
val = person['firstName'];	//another way of getting specific value of object
val = person.hobbies[1];
val = person.address.city;
val =person.address['city'];
//console.log(val);
val = person.getBirthYear();


console.log(val);


const people = [
	{name: 'bijoy', age: 20},
	{name: 'mahedi', age: 25},
	{name: 'hasan', age: 53},
];

for(let i = 0; i<people.length; i++){
	console.log(people[i].name);
}
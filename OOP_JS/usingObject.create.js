const personPrototypes = {
	greeting: function(){
		return `Hello there ${this.firstName} ${this.lastName}`;
	}, 
	getsMarried: function(newLastName){
		this.lastName = newLastName;
	}
}

// Creating Object
const mary = Object.create(personPrototypes);
// Set property of mary object
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');


// console.log(mary.greeting());


// Create another object

const bijoy = Object.create(personPrototypes, {
	firstName: {value: 'mahedi'},
	lastName: {value: 'hasan'},
	age: {value: 35}
});


console.log(bijoy);

console.log(bijoy.greeting());

console.log(mary.greeting());

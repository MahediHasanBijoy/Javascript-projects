// Object-prototype
// Person-prototype
console.log('hello js')

// Person constructor
function Person(firstName, lastName, dob){
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
	// this.calculateAge = function(){
	// 	const diff = Date.now() - this.birthday.getTime();
	// 	const ageDate = new Date(diff);
	// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
	// }
}

// Calculate age
Person.prototype.calculateAge = function(){
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
	this.lastName = newLastName;
}

const john = new Person('john', 'doe', '5-1-95');
const mary = new Person('mary', 'johnson', 'March 20 1996')

console.log(mary);

console.log(mary.getFullName());

mary.getsMarried('smith');

console.log(mary.getFullName());

//checking object prototype of person object
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty("getFullName"));
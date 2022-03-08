class Person{
	constructor(firstName, lastName, dob){
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}

	greeting(){
		return `Hello there ${this.firstName} ${this.lastName}`; 
	}

	calculateAge(){
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getsMarried(newLastName){
		this.lastName = newLastName;
	}

	// Static method
	static addNumbers(x,y){
		return x+y;
	}
}


const mary = new Person('mary', 'williams', '5-11-1995');

mary.getsMarried('thompson');
console.log(mary.greeting());

// Accessing static methods of a class
console.log(Person.addNumbers(2,3));
// Parent class
class Person{
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName  = lastName;
	}

	greeting(){
		return `Hello ${this.firstName} ${this.lastName}`;
	}

	// Static method
	static getMembershipCost(){
		return 500;
	}
}

// Sub class
class Customer extends Person{
	constructor(firstName, lastName, phone, membership){
		super(firstName, lastName);

		this.phone = phone;
		this.membership = membership;
	}
}

// Creating object of Customer class
const john = new Customer('John', 'Doe', '5555555555', 'standard');

console.log(john);

console.log(john.greeting());

// Accessing static method of inherited Person class
console.log(Customer.getMembershipCost());
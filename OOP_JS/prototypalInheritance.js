// Person constructor
function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName  = lastName;

}

// Greeting
Person.prototype.greeting = function(){
	return `Hello there ${this.firstName} ${this.lastName} ${this.nickName}`;
}

// protype property allows adding new property to object constructors
Person.prototype.nickName = 'bijoy';

const bijoy = new Person('mahedi', 'hasan');

//console.log(bijoy.greeting());


// Customer constructor inherits Person
function Customer(firstName, lastName, phone, membership){
	//calling the parent constructor to initialize the inherited property
	Person.call(this, firstName, lastName);

	this.phone      = phone;
	this.membership = membership;

}
// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('john', 'doe', 01838200511, 'standard');

// console.log(customer1)

//override greeting method of Person inside Customer prototype
Customer.prototype.greeting = function(){
	return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}


console.log(customer1.greeting());
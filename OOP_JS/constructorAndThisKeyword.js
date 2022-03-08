function Person(name, dob){
	this.name = name;

	//console.log(this);
	
	this.birthday = new Date(dob);
	this.calculateAge = function(){
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}

// const mahedi = new Person('mahedi');
// const hasan = new Person('hasan');

const bijoy = new Person('bijoy', '5-11-1995');
console.log(bijoy);
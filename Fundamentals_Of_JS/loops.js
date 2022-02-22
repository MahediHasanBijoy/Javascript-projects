//For loop:
/*for(let i = 0; i < 10; i++){

	//console.log('Number: '+i);
	if(i===2){
		console.log('2 is my favorite number');
		//stop the loop and go to the next iteration
		continue;
	}
	if(i === 5){
		//breaks out of the loop
		break;
	}
	console.log('number: '+i);
}
*/


//While loop:
/*let i = 0;
while(i<10){
	console.log('number: '+ i);
	i++;
}*/

//Do While loop

/*let i = 0;
do{
	console.log('number: '+i);
	i++;
}while(i===10);*/

//Loop through array
const cars = ['ford', 'chevy', 'honda', 'ferrari'];

/*for(let i = 0; i<cars.length; i++){
	console.log(cars[i]);
}*/

//forEach(anonymous function) for loop through arrays
/*cars.forEach(function(car, index){
	//console.log(car);
	console.log(`${index} : ${car}`);
})*/

//MAP
/*const users = [
	{id: 1, name: 'John'},
	{id: 2, name: 'Sara'},
	{id: 3, name: 'Karen'},
];

const ids = users.map(function(user){
	return user.id;
})

console.log(ids);*/


//for-in loops for iterating object items
const user = {
	//key : value,
	firstName : 'John',
	lastName : 'Doe',
	age : 40,
};

for(let key in user){
	//console.log(key);
	console.log(`${key} : ${user[key]}`);
}


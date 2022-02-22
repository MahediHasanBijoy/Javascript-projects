//Function declarations

function greet(firstName, lastName = 'hasan'){
	//console.log('hello');
	return 'hello '+firstName+' '+lastName;
}

//console.log(greet('mahedi', 'bijoy'));  

//we can set default parameter value by assigning value to any paremeter
//Fuction Expressions
const square = function(x = 3){
	return x*x;
};

//console.log(square(8));



//Immediately invocable function expressions - IIFEs

// (function(){
// 	console.log('IIFE run..');
// }) ();


// (function(name){
// 	console.log('hello '+name);
// })('bijoy');


//Property methods
const todo = {
	add: function(){
		console.log('add todo..');
	},
	edit: function(id){
		console.log('edit todo...');
	}
}
//add delete property to todo object from outside of the object
todo.delete = function(){
	console.log('delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();


//Global scope
var a = 1;
let b = 2;
const c = 3;

/*function test(){
	var a = 4;
	let b = 5;
	const c = 6;
	console.log('Function Scope: ', a, b, c);
}

test();*/

//Block level scope anything wrapped with curly braces
// if(true){
// 	//block scope
// 	var a = 1;
// 	let b = 2;
// 	const c = 3;
// 	console.log('block scope: ', a, b, c);
// }

for(let b = 0; b < 10; b++){
	console.log('b: ', b);
}
 
console.log('Global Scope: ', a, b, c);
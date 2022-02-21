let val;

//Number to string
//val = 5;
val = String(5);
val = String(5+5);

//Boolean to String
val = String(true);

//Date to String
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

// toString() -> to convert values into string
val = (5).toString();
val = (true).toString();
val = (new Date()).toString();


//output
/*console.log(val);
console.log(typeof(val));
console.log(val.length);*/


//String to number
val = Number('5');

//Boolean to number
val = Number(true);

//character string to number gives nan
val = Number('hello');

//array to number gives nan
val = Number([1,2,3]);

//another method to convert variable into number
val = parseInt('100.30');
val = parseFloat('100.30');
//can't convert char string to number and give nan
val = parseInt('a');



/*console.log(val);
console.log(typeof(val));
//add fraction digits after decimal number
console.log(val.toFixed(2));
*/


//type coersion
const val1 = '5';
const val2 = 6;
const sum = val1+val2;

console.log(sum);
console.log(typeof sum);
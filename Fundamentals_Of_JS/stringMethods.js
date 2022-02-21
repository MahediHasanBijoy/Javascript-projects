const firstName = 'Mahedi';
const lastName = 'Hasan';
const age = 36;
const str = "hello there my name is bijoy";
const tags = "web design, web developer, content writer, problem solver";


let val;
//Concatenation
val = firstName + " " + lastName;

//Append
val = 'Mahedi ';
val += 'Hasan';

val = 'Hello, my name is '+firstName+ ' and I am '+ age;

//Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

//concat
val = firstName.concat(' ', lastName,' Bijoy')

//Length
val = firstName.length;

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//finding a character at index position
val = firstName[2];

//indexOf()
val = firstName.indexOf('h');
val = firstName.lastIndexOf('h');

//charAt()
val = firstName.charAt('2');
//Get last char
val = firstName.charAt(firstName.length-1);

//substring()
val = firstName.substring(0, 3);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split() at space and return a array
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('bijoy' ,'mahedi');

//includes() return true or false if the given string is actually present in the original string
val = str.includes('bijoy');
console.log(val);
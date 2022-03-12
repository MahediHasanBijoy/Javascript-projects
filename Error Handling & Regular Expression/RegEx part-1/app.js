let re;

// regular expression start and end with '/'
re = /hello/;
re = /hello/i;  // i = case insensitive

// console.log(re);
// console.log(re.source);

// exec() - returns result in an array or null when match
// const result = re.exec('hi world');

// console.log(result);



// test() - returns true or false if there's  a match
// const result = re.test('helloworld');

// console.log(result);


// match() - returns result array or null if there's a match
// const str = 'Hello there';
// const rslt = str.match(re);
// console.log(rslt);


// search() - returns index of first match if not found returns -1
// const str = 'hi! Hello there';
// const rslt = str.search(re);
// console.log(rslt);


// replace() - returns new string with some or all matches of a pattern
const str = 'Hello there';
const newStr = str.replace(re, 'Hi');

console.log(newStr); 
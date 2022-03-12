let re;
// Literal Characters
re = /hello/;
re = /hello/i; // i = case insensitive

// Metacharacter Symbols
re = /^h/i;  		// ^ -> Must start with h
re = /ld$/i;  		// $ -> Must end with d
re = /^h.llo$/i;	// . -> Matches any one character
re = /h*llo/i;		// * -> Matches any character 0 or more times
re = /gre?a?y/i;	// ? -> Optional character
re = /gre?a?y\?/i;	// \ -> Escape character for escaping ? at the end of the string



// String to match
const str = 'grey';


// Log results
const result = re.exec(str);
console.log(result);


// Test if the string match with regular expression
function reTest(re, str){
	if(re.test(str)){
		console.log(`${str} matches ${re.source}`);
	}else{
		console.log(`${str} does not match ${re.source}`);
	}
}

reTest(re, str);
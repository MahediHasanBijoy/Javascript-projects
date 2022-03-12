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

// Brackets [] - Character Sets
re = /gr[ae]y/i;	// Must be an a or e
re = /[GF]ray/i;	// Must be a G or F
re = /[^GF]ray/i;	// Match anything except a G or F
re = /[A-Z]ray/;	// Match any uppercase letter
re = /[a-z]ray/;	// Match any lowercase letter
re = /[A-Za-z]ray/;	// Match any letter
re = /[0-9]ray/;	// Match any digit for only one character


// Braces {} - Quantifiers
re = /Hel{2}o/i;	// {m}   - After a character, that character must occur exactly  m amount of times
re = /Hel{2,4}o/i;	// {m,n} - After a character means that char can occur between m to n times
re = /Hel{2,}o/i;	// {m,}  - After a character means that char can occur at least m times to infinity


// Parenthesis () - Grouping
re = /([0-9]x){3}/;


// Shorthand Character Classes
re = /\w/;			// Word character - alphanumeric and _
re = /\w+/;			// + means word character can occur 1 to infinity times but not 0
re = /\W/;			// Uppercase- W means Non-word character - alphanumeric and _
re = /\d/;			// Match any digit
re = /\d+/;			// Match any digit 1 or more time
re = /\D/;			// Match any Non-digit
re = /\s/;			// Match whitespace character
re = /\S/;			// Match Non-whitespace character
re = /Hell\b/i; 	// Word boundary (input: 'Hello, welcome to Hell' return: match on Hell)

// Assertions
re = /x(?=y)/;		// Match x only if followed by y
re = /x(?!y)/;		// Match x only if followed by y



// String to match
const str = 'Hello, welcxome to Hell';


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

// Function call
reTest(re, str);
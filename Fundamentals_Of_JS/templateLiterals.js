const name = 'John';
const age = 30;
const job = 'web developer';
const city = 'Dhaka';
let html;
//Without template strings(es5)
html = '<ul><li>Name: ' +name+ '</li><li>Age: ' +age+ '</li><li>Job: '+job+'</li><li>City: '+city+'</li><li>nothigh here</li></ul>';

//same previous html var with structure
html = '<ul>'+
		'<li>Name: ' + name + '</li>'+
		'<li>Age: ' + age + '</li>'+
		'<li>Job: ' + job + '</li>'+
		'<li>City: ' + city + '</li>'+
		'</ul>';

function hello(){
	return 'hello';
} 

//with template strings(es6)
html = `
<ul>
	<li>Name: ${name}</li>
	<li>Age: ${age}</li>
	<li>Job: ${job}</li>
	<li>City: ${city}</li>
	<li>${2+2}</li>
	<li>${hello()}</li>
</ul>`

document.body.innerHTML = html;
const form = document.querySelector('form');
const taskInput = document.getElementById('task');

//Clear input
/*taskInput.value = '';


form.addEventListener('submit', runEvent);

function runEvent(e){
	console.log(`Event Type: ${e.type}`);

	//Get input value
	console.log(taskInput.value);

	e.preventDefault();
}*/


//keydown event
//taskInput.addEventListener('keydown', runEvent2);

//keyup event
//taskInput.addEventListener('keyup', runEvent2);

//keypress event
//taskInput.addEventListener('keypress', runEvent2);

//Focus
//taskInput.addEventListener('focus',runEvent2);

//Blur 
// taskInput.addEventListener('blur',runEvent2);

//Cut event
// taskInput.addEventListener('cut', runEvent2);

//Paste event
// taskInput.addEventListener('paste', runEvent2);

//input event
taskInput.addEventListener('input', runEvent2);

function runEvent2(e){
	console.log(`Event Type: ${e.type}`);

	console.log(e.target.value);
}
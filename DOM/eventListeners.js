// Event Listener
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
// 	console.log('hello world');

// 	//prevent default characteristics of click event
// 	e.preventDefault();
// });



// Another way of defining a event listener
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
	console.log('clicked');

	let val;

	val = e;

	// Event target element
	val = e.target;
	val = e.target.id;
	val = e.target.className;
	val = e.target.classList;

	e.target.innerText = 'Hello';

	// Event type
	val = e.type;

	//Timestamp
	val = e.timeStamp;

	// Coordinates event relative to the window
	val = e.clientY;
	val = e.clientX;

	// Coordinates event relative to the element
	val = e.offsetY;
	val = e.offsetX;

	console.log(val);
}
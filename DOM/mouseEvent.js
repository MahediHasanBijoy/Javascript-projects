const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
//clearBtn.addEventListener('click', runEvent);

// Double Click
// clearBtn.addEventListener('dblclick', runEvent);

//Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

//Mouseup
// clearBtn.addEventListener('mouseup', runEvent);


//MouseEnter
// card.addEventListener('mouseenter', runEvent);

//MouseLeave
// card.addEventListener('mouseleave', runEvent);

//MouseOver
// card.addEventListener('mouseover', runEvent);

//MouseOut
// card.addEventListener('mouseout', runEvent);



//Mouse move
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e){
	console.log(`Event Type: ${e.type}`);

	//When mouse move event occurs
	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
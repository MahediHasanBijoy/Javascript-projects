// Event Bubbling

/*// if we click card-title element then all of its ancestor parents event will 
//be automatically get called. this is called event bubbling

document.querySelector('.card-title').addEventListener('click', function(){
	console.log('card title');
});
//Parent element of card-title event
document.querySelector('.card-content').addEventListener('click', function(){
	console.log('card content');
});
// parent element of card-content event
document.querySelector('.card').addEventListener('click', function(){
	console.log('card');
});
// parent element of card event
document.querySelector('.col').addEventListener('click', function(){
	console.log('col');
});*/



// Event Delegation
//in this event only one .delete-item element will work other elements won't
//to solve this issue Event delegation method will be needed.
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// function deleteItem(e){
// 	console.log('delete item');
// }


document.body.addEventListener('click', deleteItem);

function deleteItem(e){
	//all the classes of an element should matched for this condition
	// if(e.target.parentElement.className === 'delete-item secondary-content'){}
	// 	console.log('delete item');

	//this condition matched if one class is matched with the element classlist
	if(e.target.parentElement.classList.contains('delete-item')){
		console.log('delete item');
		//to delete the whole li element
		e.target.parentElement.parentElement.remove();
	}
}
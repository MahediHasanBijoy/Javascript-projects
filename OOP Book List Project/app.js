// Book constructor
function Book(title, author, isbn){
	this.title  = title;
	this.author = author;
	this.isbn   = isbn;
}

// UI constructor
function UI(){}

// prototype methods of UI
UI.prototype.addBookToList = function(book){
	// Get book-list element
	const list = document.getElementById('book-list');

	// Create tr element
	const row = document.createElement('tr');

	// Insert cols
	row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
	`;
	// Append row to list
	list.appendChild(row);
}

// Clear fields method to UI prototype
UI.prototype.clearFields = function(){
	document.getElementById('title').value  = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value   = '';
}

// Show alert method to UI prototype
UI.prototype.showAlert = function(msg, className){
	// if show alert exist then return null
	if(document.querySelector('.alert')){
		return 0;
	}

	// Create a div
	const div = document.createElement('div');
	// Add class
	div.className = `alert ${className}`;
	// Add message
	div.appendChild(document.createTextNode(msg));

	// Get parent
	const container = document.querySelector('.container');
	// Get child
	const form = document.getElementById('book-form');
	// Insert new div before form element of parent container
	container.insertBefore(div, form);

	// Set timeout
	setTimeout(function(){
		document.querySelector('.alert').remove();
	}, 3000);
	console.log(div);
}

// Delete book
UI.prototype.deleteBook = function(target){
	console.log(target);
	if(target.className === 'delete'){
		target.parentElement.parentElement.remove();
	}
}


// Event Listeners for adding book
document.getElementById('book-form').addEventListener('submit',function(e){
	// Get form values
	const title  = document.getElementById('title').value,
		  author = document.getElementById('author').value,
		  isbn   = document.getElementById('isbn').value;

	// Instantiate book
	const book   = new Book(title, author, isbn);

	// Instantiate UI
	const ui = new UI();

	// Validate
	if(title === '' || author === '' || isbn === ''){
		// Error alert --- ui.showAlert(message, class)
		ui.showAlert('Please fill all the fields', 'error');
	}else{
		// Add book to list
		ui.addBookToList(book);

		// Clear input fields
		ui.clearFields();

		// Show success alert
		ui.showAlert('You have added a book successfully', 'success');
	}

	


	e.preventDefault();
});


// Event Listener for delete book
document.getElementById('book-list').addEventListener('click', function(e){
	// Instantiate UI
	const ui = new UI();
	// Delete book
	ui.deleteBook(e.target);

	// Show delete message
	ui.showAlert('Deleted successfully', 'success')
	e.preventDefault();
});
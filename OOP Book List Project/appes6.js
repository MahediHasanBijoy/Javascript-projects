class Book{
	constructor(title,author,isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}


class UI{

	addBookToList(book){
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

	clearFields(){
		document.getElementById('title').value  = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value   = '';
	}

	showAlert(msg, className){
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

	}

	deleteBook(target){
		if(target.className === 'delete'){
				target.parentElement.parentElement.remove();
		}
	}
}

// Local Storage Class
class Store{
	static getBooks(){
		let books;
		if(localStorage.getItem('books') === null){
			books = [];
		}else{
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}

	static displayBooks(){
		const books = Store.getBooks();

		books.forEach(function(book){
			const ui = new UI;

			// Add book to UI
			ui.addBookToList(book);
		});
	}

	static addBook(book){
		const books = Store.getBooks();

		books.push(book);

		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbn){
		const books = Store.getBooks();

		books.forEach(function(book, index){
			if(book.isbn === isbn){
				books.splice(index, 1);
			}
			// store rest books to local storage
			localStorage.setItem('books',JSON.stringify(books));
		});
	}

}

// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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

		// Add book to LocalStorage
		Store.addBook(book);

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
	// Delete book from UI
	ui.deleteBook(e.target);

	// Delete book from Local Storage
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
	// Show delete message
	ui.showAlert('Deleted successfully', 'success')
	e.preventDefault();
});
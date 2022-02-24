// Create and insert element into DOM


// Create element
const li = document.createElement('li');

// Add class to element
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('hello world'));

//Create new link element
const link = document.createElement('a');
// Add classes to link
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link);


// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);



console.log(li);
// Storage Controller
const StorageCtrl = (function(){
	// Private property and methods



	// Public methods
	return{
		storeItem: function(item){
			let items;
			// Check if there are any items in localStorage
			if(localStorage.getItem('items')===null){
				// Create empty array
				items = [];
				// push new item
				items.push(item);
				// Set localStorage
				localStorage.setItem('items', JSON.stringify(items));
			}else{
				// Get items from localStorage
				items = JSON.parse(localStorage.getItem('items'));

				//Push new item
				items.push(item);

				// Re-set localStorage
				localStorage.setItem('items', JSON.stringify(items));
			}

		},
		getItemsFromStorage: function(){
			let items;
			if(localStorage.getItem('items') === null){
				items = [];
			}else{
				items = JSON.parse(localStorage.getItem('items'));
			}

			return items;
		},
		updateItemStorage: function(updatedItem){
			let items = JSON.parse(localStorage.getItem('items'));

			items.forEach(function(item,index){
				if(updatedItem.id === item.id){
					// Replace the matched item with updatedItem
					items.splice(index, 1, updatedItem);
				}
			});
			// Replace the old storage items with the updated items
			localStorage.setItem('items', JSON.stringify(items));
		},
		deleteItemFromStorage: function(id){
			let items = JSON.parse(localStorage.getItem('items'));

			items.forEach(function(item,index){
				if(id === item.id){
					// Delete the matched item with updatedItem
					items.splice(index, 1);
				}
			});
			// Replace the old storage items with the updated items
			localStorage.setItem('items', JSON.stringify(items));
		},
		ClearAllItemsFromStorage: function(){
			localStorage.removeItem('items');
		}

	}
})();



// Item Controller
const ItemCtrl = (function(){
	// Item Constructor
	const Item = function(id, name, calories){
		this.id 	  = id;
		this.name 	  = name;
		this.calories = calories;
	}

	// Data Structure / State
	const data = {
		// items: [
		// 	// {id: 0, name: 'Steak Dinner', calories: 1200},
		// 	// {id: 1, name: 'Cookies', calories: 500},
		// 	// {id: 2, name: 'Eggs', calories: 400}
		// ],
		items: StorageCtrl.getItemsFromStorage(),
		currentItem: null,
		totalCalories: 0
	}

	// Public methods
	return {
		getItems: function(){
			return data.items;
		},
		addItem: function(name, calories){
			let ID;
			// Create IDs
			if(data.items.length>0){
				ID = data.items[data.items.length-1].id + 1;
			}else{
				ID = 0;
			}

			// Calories to number
			calories = parseInt(calories);

			// Create new item
			newItem = new Item(ID, name, calories);
			// Add to items array
			data.items.push(newItem);

			return newItem;
		},
		getItemById: function(id){
			let foundItem = null;
			// Loop through items
			data.items.forEach(function(item){
				if(item.id === id){
					foundItem = item;
				}
			});
			return foundItem;
		},
		updateItem: function(name, calories){
			// Convert calories to number
			calories = parseInt(calories);

			let found = null;

			data.items.forEach(function(item){
				if(item.id === data.currentItem.id){
					 item.name = name;
					 item.calories = calories;
					 found = item;
				}
			});

			return found;
		},
		deleteItem: function(id){
			// Get ids of all items
			const ids = data.items.map(function(item){
				return item.id;
			});

			// Get index
			const index = ids.indexOf(id);

			// Remove item
			data.items.splice(index, 1);
		},
		clearAllItems: function(){
			data.items = [];
		},
		setCurrentItem: function(item){
			data.currentItem = item;
		},
		getCurrentItem: function(){
			return data.currentItem;
		},
		getTotalCalories: function(){
			let total = 0;
			data.items.forEach(function(item){
				total += item.calories;
				
			});
			// Set total calories in data structure
			data.totalCalories = total;

			return data.totalCalories;
		},
		logData: function(){
			return data;
		}
	}

})();



// UI Controller
const UICtrl = (function(){
	// UI elements selectors 
	const UISelectors = {
		itemList: '#item-list',
		listItems: '#item-list li',
		addBtn: '.add-btn',
		updateBtn: '.update-btn',
		deleteBtn: '.delete-btn',
		backBtn: '.back-btn',
		clearBtn: '.clear-btn',
		itemNameInput: '#item-name',
		itemCaloriesInput: '#item-calories',
		totalCalories: '.total-calories',
	}

	// Public methods
	return {
		populateItemList: function(items){
			let html = '';

			items.forEach(function(item){
				html += `
				<li class="collection-item" id="item-${item.id}">
					<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
					<a href="#" class="secondary-content">
						<i class="edit-item fa fa-pencil"></i>
					</a>
				</li>
				`;
			});
			
			// Insert list items
			document.querySelector(UISelectors.itemList).innerHTML = html;
		},
		getItemInput: function(){
			return {
				name:document.querySelector(UISelectors.itemNameInput).value,
				calories: document.querySelector(UISelectors.itemCaloriesInput).value
			}
		},
		addListItem: function(item){
			// Show the list from hide
			document.querySelector(UISelectors.itemList).style.display = 'block';
			// Create li element
			const li = document.createElement('li');
			// Add class
			li.className = 'collection-item';
			// Add ID
			li.id = `item-${item.id}`;

			// Add HTML
			li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
					<a href="#" class="secondary-content">
						<i class="edit-item fa fa-pencil"></i>
					</a>`;
			// Insert item
			// document.querySelector(UISelectors.itemList).append(li);
			document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
		},
		updateListItem: function(item){
			let listItems = document.querySelectorAll(UISelectors.listItems);

			// Turn Node list into array
			listItems = Array.from(listItems);

			listItems.forEach(function(listItem){
				const itemId = listItem.getAttribute('id');
				if(itemId === `item-${item.id}`){
					document.querySelector(`#${itemId}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
					<a href="#" class="secondary-content">
						<i class="edit-item fa fa-pencil"></i>
					</a>`;;
				}
			})
		},
		deleteListItem: function(id){
			// Create UI list item id
			const itemId = `#item-${id}`;
			// Select the list item using itemId
			const item = document.querySelector(itemId);
			// Remove the list item from UI
			item.remove();

		},
		clearInput: function(){
			document.querySelector(UISelectors.itemNameInput).value = '';
			document.querySelector(UISelectors.itemCaloriesInput).value = '';

		},
		addItemToForm: function(){
			document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
			document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
			UICtrl.showEditState();
		},
		removeAllItems: function(){
			// Select all list items
			let listItems = document.querySelectorAll(UISelectors.listItems);

			// Turn Node list into array
			listItems = Array.from(listItems);

			// Loop throught the list and remove all list items
			listItems.forEach(function(item){
				item.remove();
			});

		},
		hideList: function(){
			document.querySelector(UISelectors.itemList).style.display = 'none';
		},
		showTotalCalories: function(totalCalories){
			document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
		},
		clearEditState: function(){
			UICtrl.clearInput();

			document.querySelector(UISelectors.updateBtn).style.display = 'none';
			document.querySelector(UISelectors.deleteBtn).style.display = 'none';
			document.querySelector(UISelectors.backBtn).style.display = 'none';
			document.querySelector(UISelectors.addBtn).style.display = 'inline';
		},
		showEditState: function(){

			document.querySelector(UISelectors.updateBtn).style.display = 'inline';
			document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
			document.querySelector(UISelectors.backBtn).style.display = 'inline';
			document.querySelector(UISelectors.addBtn).style.display = 'none';
		},
		getSelectors: function(){
			return UISelectors;
		}
	}
})();


// App Controller
const App = (function(ItemCtrl,StorageCtrl, UICtrl){
	// Load event listeners
	const loadEventListeners = function(){
		// Get UI selectors
		const UISelectors = UICtrl.getSelectors();

		// Add item event
		document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

		// Disable submit on enter
		document.addEventListener('keypress', function(e){
			if(e.keyCode === 13 || e.which === 13){
				e.preventDefault();
				return false;
			}
		});

		// Edit icon click event
		document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

		// Update item event
		document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

		// Delete button event
		document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

		// Back button event
		document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

		// ClearAll button event
		document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
	}

	// Add item submit
	const itemAddSubmit = function(e){
		// Get form input from UI controller
		const input = UICtrl.getItemInput();

		// Check for name and calorie input has values
		if(input.name !== '' && input.calories !== ''){
			// Add item to ItemCtrl's data structure
			const newItem = ItemCtrl.addItem(input.name, input.calories);

			// Add item to UI list
			UICtrl.addListItem(newItem);

			// Get total calories
			const totalCalories = ItemCtrl.getTotalCalories();

			// Add total calories to UI
			UICtrl.showTotalCalories(totalCalories);

			// Store in localStorage
			StorageCtrl.storeItem(newItem);

			// Clear input fields 
			UICtrl.clearInput();

		}
		e.preventDefault();
	}

	// Click edit item
	const itemEditClick = function(e){

		if(e.target.classList.contains('edit-item')){
			// Get list item id (item-0, item-1,...)
			const listId = e.target.parentElement.parentElement.id;

			// Break listId into an array
			const listIdArray = listId.split('-');

			// Get the actual id
			const id = parseInt(listIdArray[1]);

			// Get item from ItemCtrl
			const itemToEdit = ItemCtrl.getItemById(id);

			// Set current item
			ItemCtrl.setCurrentItem(itemToEdit);

			// Add item to form
			UICtrl.addItemToForm();
		}

		e.preventDefault();
	}

	// Update item submit
	const itemUpdateSubmit = function(e){
		// Get item input
		const input = UICtrl.getItemInput();

		// Update item
		const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

		// Update UI
		UICtrl.updateListItem(updatedItem);

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories();

		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);

		// Update local storage
		StorageCtrl.updateItemStorage(updatedItem);

		// Clear Edit state after completion of edit
		UICtrl.clearEditState();

		e.preventDefault();
	}

	// Delete item submit
	const itemDeleteSubmit = function(e){
		// Get current item
		const currentItem = ItemCtrl.getCurrentItem();

		// Delete from data structure
		ItemCtrl.deleteItem(currentItem.id);

		// Delete from UI
		UICtrl.deleteListItem(currentItem.id);

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories();

		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);

		// Delete from Local Storage
		StorageCtrl.deleteItemFromStorage(currentItem.id);

		// Clear Edit state after completion of edit
		UICtrl.clearEditState();

		e.preventDefault();
	}

	// Clear All items submit
	const clearAllItemsClick = function(){
		// Delete all items from data structure
		ItemCtrl.clearAllItems();

		// Remove all items from UI
		UICtrl.removeAllItems();

		// Clear from local storage
		StorageCtrl.ClearAllItemsFromStorage();

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories();

		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);

		// Hide ul
		UICtrl.hideList();
	}

	// Public methods
	return {
		init: function(){
			// Clear edit state / set initial state
			UICtrl.clearEditState();

			// Fetch items from data structure
			const items  = ItemCtrl.getItems();

			// Check if any items are available
			if(items.length === 0){
				UICtrl.hideList();
			}else{
				// Populate List with items
				UICtrl.populateItemList(items);		
			}

			// Get total calories
			const totalCalories = ItemCtrl.getTotalCalories();

			// Add total calories to UI
			UICtrl.showTotalCalories(totalCalories);

			//Load eventlisteners
			loadEventListeners();

		}
	}
})(ItemCtrl,StorageCtrl, UICtrl);

App.init();
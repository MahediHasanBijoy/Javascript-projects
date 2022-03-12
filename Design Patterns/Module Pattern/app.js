/*---------Basic Structure---------*/

/*(function(){
	// Declare private vars and functions
	

	return {
		// Declare public var and functions
	}
})();*/


/*---------Standard Module Pattern--------*/
/*const UICtrl = (function(){
	let text = 'Hello World';

	const changeText = function(){
		const element = document.querySelector('h1');
		element.textContent = text;
	}

	return {
		callChangeText: function(){
			changeText();
			console.log(text);
		}
	}
})();

UICtrl.callChangeText();*/

/*---------Revealing Module Pattern----------*/
const ItemCtrl = (function(){
	let data = [];

	function add(item){
		data.push(item);
		console.log('Item added...');
	}

	function get(id){
		return data.find(item=>{
			return item.id === id;
		});
	}

	return {
		add: add,
		get: get
	}
})();

// Adding item to data
ItemCtrl.add({id:1, name:'John'});
ItemCtrl.add({id:2, name:'Apple'});
ItemCtrl.add({id:3, name:'Orange'});
ItemCtrl.add({id:4, name:'Mango'});
ItemCtrl.add({id:5, name:'Pear'});

console.log(ItemCtrl.get(4));

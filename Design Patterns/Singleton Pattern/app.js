const Singleton = (function(){
	let instance;

	function createInstance(){
		const object = new Object({name: 'Bijoy'});
		return object;
	}

	return {
		getInstance: function(){
			if(!instance){
				instance = createInstance();
			}
			return instance;
		}
	}
})();


const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

//instanceA and instanceB are same cz we can create only one instance
console.log(instanceA === instanceB);

// console.log(instanceA); 

// same reference object are different object cz the refer different memory location
console.log({name: 'brad'} === {name: 'brad'});
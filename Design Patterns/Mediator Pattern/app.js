// Create User Constructor
const User = function(name){
	this.name = name;
	this.chatroom = null;
}

User.prototype = {
	send: function(message, to){
		this.chatroom.send(message, this, to);
	},
	receive: function(message, from){
		console.log(`${from.name} to ${this.name}: ${message}`);
	}
}


// Create Chatroom constructor
const Chatroom = function(){
	let users = {}; // List of users

	return {
		register: function(user){
			users[user.name] = user;
			user.chatroom = this;
		},
		send: function(message, from, to ){
			if(to){
				// Single user message
				to.receive(message, from);
			}else{
				// Mass message
				for(key in users){
					if(users[key] !== from){
						users[key].receive(message, from);
					}
				}
			}
		}
	}
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const mark = new User('Mark');


const chatroom = new Chatroom();


chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(mark);


brad.send('Hello Jeff', jeff);
mark.send('Hello Brad, how are you', brad);
jeff.send('Hello everyone'); // sends message to every one
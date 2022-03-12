const user = {email: 'jdoe@gmail.com'};

try{
	// Produce a reference error
	// myFunction();
	
	// Produce a Type Error
	// null.myFunction();
	
	// Syntax Error
	// eval('Hello world');
	
	// Throwing error if certain condition doesn't met
	if(!user.name){
		// throw 'User has no name';
		
		throw new SyntaxError('User has no name');
	}


}catch(err){
	console.error(err);
	// console.error(err.message);
	// console.error(err.name);
	// console.error(err instanceof ReferenceError);
	// console.error(err instanceof TypeError);
}finally{
	console.log('finally runs regardless of result');
}
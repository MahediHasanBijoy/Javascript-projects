/*
	Promises are alternative of callbacks
 */



const posts = [
	{title: 'Post one', body: 'This is post one'},
	{title: 'Post two', body: 'This is post two'}
];

// using promises for aynchronous function
function createPost(post){
	// Create Promise
	return new Promise(function(resolve, reject){
		setTimeout(function(){
		posts.push(post);

		const error = true;

		if(!error){
			resolve();
		}else{
			reject('Error: something went wrong');
		}
		
		}, 2000);
	});
	
}

function getPost(){
	setTimeout(function(){
		let output = '';
		posts.forEach(function(post){
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

createPost({title: 'Post Three', body: 'This is post three used callback'})
.then(getPost)
.catch(function(err){
	console.error(err);
})

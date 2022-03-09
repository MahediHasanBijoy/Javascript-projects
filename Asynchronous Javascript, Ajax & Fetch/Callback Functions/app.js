const posts = [
	{title: 'Post one', body: 'This is post one'},
	{title: 'Post two', body: 'This is post two'}
];
// Without callbacks getPost function will execute before createPost function
/*function createPost(post){
	setTimeout(function(){
		posts.push(post);
	}, 2000);
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


createPost({title: 'Post Three', body: 'This is post three'});

getPost();


console.log(posts);*/

// using callbacks for solving this anomaly
function createPost(post, callback){
	setTimeout(function(){
		posts.push(post);
		callback();
	}, 2000);
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

createPost({title: 'Post Three', body: 'This is post three used callback'}, getPost);
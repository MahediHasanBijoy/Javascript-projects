const posts = [
	{title: 'Post one', body: 'This is post one'},
	{title: 'Post two', body: 'This is post two'}
];

function getPosts(){
	setTimeout(()=>{
		let output = '';
		posts.forEach((post)=>{
			output += `<li>${post.title}</li>`
		});
		document.body.innerHTML = output;
	}, 1000);	
}

function createPost(post){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
		posts.push(post);
		
		const error = false;
		if(!error){
			resolve();
		}else{
			reject('Error: something went wrong');
		}
	}, 2000);

	});

	}

	// createPost({title: 'Post Three', body: 'This is post three'})
	// .then(getPosts)
	// .catch(err => console.log(err));


	//Async / Await
/*	async function init(){
		await createPost({title: 'Post Three', body: 'This is post three'});

		getPosts();
	}

	init();*/

	// Async/Await with Fetch
	async function fetchUser(){
		const res = await fetch('https://jsonplaceholder.typicode.com/users');

		const data = await res.json();
		console.log(data);
	}

	fetchUser();
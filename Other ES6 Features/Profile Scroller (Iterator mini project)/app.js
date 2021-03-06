const data = [
	{
		name: 'John Doe',
		age:   32,
		gender: 'male',
		lookingfor: 'female',
		location: 'Boston MA',
		image: 'https://randomuser.me/api/portraits/men/82.jpg'
	},
	{
		name: 'Jen Smith',
		age:   26,
		gender: 'female',
		lookingfor: 'male', 
		location: 'Miami FL',
		image: 'https://randomuser.me/api/portraits/men/83.jpg'
	},
	{
		name: 'Williams Johnson',
		age:   32,
		gender: 'male',
		lookingfor: 'female', 
		location: 'Alaska',
		image: 'https://randomuser.me/api/portraits/men/84.jpg'
	}
];

const profiles = profileIterator(data);

nextProfile();

// Next Button Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile(){
	const currentProfile = profiles.next().value;
	if(currentProfile !== undefined){
		document.getElementById('profileDisplay').innerHTML = `
			<ul class="list-group">
				<li class="list-group-item">Name: ${currentProfile.name}</li>
				<li class="list-group-item">Age: ${currentProfile.age}</li>
				<li class="list-group-item">Gender: ${currentProfile.gender}</li>
				<li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
				<li class="list-group-item">Location: ${currentProfile.location}</li>
			</ul>
		`;

		document.getElementById('imageDisplay').innerHTML = `
			<img src="${currentProfile.image}" alt="">
		`;
	}else{
		//reload page
		window.location.reload();
	}
	
}

// Profile Iterator
function profileIterator(profiles){
	let nextIndex = 0;

	return {
		next: function(){
			return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true};
		}
	}
}

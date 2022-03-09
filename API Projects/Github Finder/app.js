// Listen for keyup events on input
// Search Input
const searchUser = document.getElementById('searchUser');

// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search Input Event Listener
searchUser.addEventListener('keyup', (e)=>{
	// Get input text
	const userText = e.target.value;
	if(userText !== ''){
		// Make http call
		github.getUser(userText)
		.then(data=>{
			if(data.profile.message === 'Not Found'){
				// Show alert
				ui.showAlert('Profile does not found', 'alert alert-danger');
			}else{
				// Show profile
				ui.showProfile(data.profile);
				// Show repos
				ui.showRepos(data.repos);
			}
		});
		
	}else{
		// Clear Profile
		ui.clearProfile();
	}
});
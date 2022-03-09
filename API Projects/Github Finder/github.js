class Github{
	constructor(){
		// search 'register github oauth' and register this app and get this codes
		// https://github.com/settings/developers -- here our registered app in oauth resides
		this.client_id = 'd297be930fcc08119a6a';
		this.client_secret = '350dddf8176e758cff9adf177eb5bfb1098c968b';
		this.repos_count = 5;
		this.repos_sort = 'created: asc'
	}

	async getUser(user){
		// fetching profiles
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		// const profileResponse = await fetch(`https://api.github.com/users/${user}`);
		
		// fetching repos
		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();

		return {
			profile: profile,
			repos: repos
		}

	}
}
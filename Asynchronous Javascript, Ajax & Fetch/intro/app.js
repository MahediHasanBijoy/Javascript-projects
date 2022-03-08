document.getElementById('button').addEventListener('click', loadData);


function loadData(){
	// Create an XHR object
	const xhr = new XMLHttpRequest();

	// Open
	xhr.open('GET', 'data.txt', true);

	xhr.onload = function(){
		if(this.status === 200){
			//console.log(this.responseText);
			document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
		}
	}

	xhr.send();

	// HTTP Statuses
	// 200: "OK"
	// 403: "Forbidden"
	// 404: "Not Found"
	
}



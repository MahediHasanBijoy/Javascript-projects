// Form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName(){
	const name = document.getElementById('name').value;

	const re = /^([a-zA-Z]\s?){2,20}$/;

	if(!re.test(name)){
		document.getElementById('name').classList.add('is-invalid');
	}else{
		document.getElementById('name').classList.remove('is-invalid');
	}

}

function validateZip(){
	const zip = document.getElementById('zip').value;

	const re = /^[0-9]{4}$/;

	if(!re.test(zip)){
		document.getElementById('zip').classList.add('is-invalid');
	}else{
		document.getElementById('zip').classList.remove('is-invalid');
	}
}

function validateEmail(){
	const email = document.getElementById('email').value;

	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if(!re.test(email)){
		document.getElementById('email').classList.add('is-invalid');
	}else{
		document.getElementById('email').classList.remove('is-invalid');
	}
}

function validatePhone(){
	const phone = document.getElementById('phone').value;

	const re = /^[0-9]{11}$/;

	if(!re.test(phone)){
		document.getElementById('phone').classList.add('is-invalid');
	}else{
		document.getElementById('phone').classList.remove('is-invalid');
	}
}
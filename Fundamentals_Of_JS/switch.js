const color = 'blue';

switch(color){
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color is not red or blue');
		break;
}


switch(new Date().getDay()){
	case 0:
		console.log('sunday');
		break;
	case 1:
		console.log('monday');
		break; 
	case 2:
		console.log('tuesday');
		break; 
	case 3:
		console.log('wednesday');
		break; 
	case 4:
		console.log('thrusday');
		break; 
	case 5:
		console.log('friday');
		break; 
	case 6:
		console.log('saturday');
		break; 
}
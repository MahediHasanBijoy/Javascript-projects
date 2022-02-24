//document.getElementsByClassName

/*const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log((items[0]));

items[0].style.color = 'red';
items[3].textContent = 'Hello';*/


// document.getElementsByTagName()
// let lis = document.getElementsByTagName('li');
// console.log(lis);

//convert HTML Collection into array
/*lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li,index){
	console.log(li.className);
	//change all li
	li.textContent = `${index}: Hello`;
});*/

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item,index){
	console.log(item.className);
	//change all items
	item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function(li,index){
	li.style.background = '#333';
})
console.log(items);

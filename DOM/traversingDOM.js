let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

// Get child nodes //if there is a line break,comment,attribute in html then extra text node will be counted as child-nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

/*
1 - Element
2 - Attribute (deprecated)
3 - Text node
8 - Comment
9 - Document itself
10 - Doctype
 */

// Get children element nodes// no text 
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children[0];

//firstChild
val = list.firstChild;		//can be element,text,comment
val = list.firstElementChild;	//only element

//lastChild
val = list.lastChild;	//can be element, text, comment
val = list.lastElementChild; //only element


// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling; //can be element,comment,text
val = listItem.nextElementSibling;//only element
val = listItem.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; 



console.log(val);

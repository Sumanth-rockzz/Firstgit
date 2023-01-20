/* console.log(document.getElementById('main-header'));
const header=document.getElementById('main-header');
console.log(header.innerText);
console.log(header.textContent); */
/* const header=document.getElementById('main-header');
header.style.borderBottom='2px solid black';
const additem=document.querySelector('h2');
additem.style.fontWeight='bold';
additem.style.color='green'; */
/* const listitems =document.getElementsByClassName("list-group-item");
console.log(listitems);
console.log(listitems[1]);
listitems[1].innerText='hello';
listitems[1].style.fontWeight='bold';
listitems[1].style.backgroundColor='yellow';

//listitems.style.backgroundColor='blue';  //it gives error

for(let i=0;i<listitems.length;i++)
{
    listitems[i].style.color='maroon';
    listitems[i].style.fontWeight='bold';
}
listitems[2].style.backgroundColor='green'; //overide pev
 */
/*  const li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
for(let i=0;i<li.length;i++)
{
    li[i].style.color='maroon';
    li[i].style.backgroundColor='#f4f4f4';
    li[i].style.fontWeight='bold';
} 
const listitems=document.getElementsByClassName('list-group-item');
console.log(listitems);
for(let i=0;i<listitems.length;i++)
{
   
    listitems[i].style.backgroundColor='#f4f4f4';
} */
/* const li=document.querySelector('.list-group-item:nth-child(2)');
li.style.backgroundColor='green';
const itemli=document.querySelector('.list-group-item:nth-child(3)');
itemli.style.display='none';


const newli=document.querySelectorAll('li');
newli[1].style.color="green";

const odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++)
{
odd[i].style.backgroundColor="green";
}
 */
/* //parent node
const itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='#ccc';
console.log(itemlist.parentNode.parentNode); */

/* //parent element
const itemlist=document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='#a4a4a4';
console.log(itemlist.parentElement.parentElement); */
const itemlist=document.querySelector('#items');
/* //childnotes
console.log(itemlist.childNodes);//includes linebreak

//children
console.log(itemlist.children);//only lists
itemlist.children[1].style.backgroundColor='yellow';


//first child
console.log(itemlist.firstChild);//includes line break or space

//first element child
console.log(itemlist.firstElementChild) //only lists
itemlist.firstElementChild.textContent='Hello 1';

//last child
console.log(itemlist.lastChild);//includes line break or space

//LAST element child
console.log(itemlist.lastElementChild) //only lists
itemlist.lastElementChild.textContent='Hello 4'; */

/* //nextsibling
console.log(itemlist.nextSibling);


//next element sibling
console.log(itemlist.nextElementSibling);//null becuse we dont have any next element

//previoussilbling
console.log(itemlist.previousSibling);

//previousElementsilbling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.fontWeight='bold'; */

//create element and insert

//create a div
const newdiv=document.createElement('div');

//add class
newdiv.className='hello';

//add id
newdiv.id='hello1';

//add attribute

newdiv.setAttribute('title','Hello div');

//create a next node 
const newdivtext=document.createTextNode('Hello world');

//add text to div
newdiv.appendChild(newdivtext);

const container=document.querySelector('header .container');
const h1=document.querySelector('header h1');


console.log(newdiv);

container.insertBefore(newdiv,h1);

newdiv.style.fontSize='20px';

//create a li and inert inside ul

const newitem=document.createElement('li');
newitem.classList.add('list-group-item')

const newitemtext=document.createTextNode('hello world');

newitem.appendChild(newitemtext);
console.log(newitem);
const add=document.querySelector('.list-group');
const newone=document.querySelector('li');
add.insertBefore(newitem,newone);

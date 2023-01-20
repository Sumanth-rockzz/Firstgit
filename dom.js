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
const li=document.querySelector('.list-group-item:nth-child(2)');
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

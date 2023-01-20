/* console.log(document.getElementById('main-header'));
const header=document.getElementById('main-header');
console.log(header.innerText);
console.log(header.textContent); */
/* const header=document.getElementById('main-header');
header.style.borderBottom='2px solid black';
const additem=document.querySelector('h2');
additem.style.fontWeight='bold';
additem.style.color='green'; */
const listitems =document.getElementsByClassName("list-group-item");
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
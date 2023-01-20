const form=document.getElementById('addForm');
const itemlist=document.getElementById('items');
//form submit event
form.addEventListener('submit',additem);

//delete event
itemlist.addEventListener('click',removeitem);

//add item function
function additem(e){
    e.preventDefault();

//get input value
const newitem=document.getElementById('item');

//crete li elemnt
const li=document.createElement('li');

//add class name
li.className="list-group-item";
 console.log(li);

//add text node with input value
li.appendChild(document.createTextNode(newitem.value));

//creatte delete button
const del=document.createElement('button');

//add class name
del.className='btn btn-danger btn-sm float-right delete';

//append text node
del.appendChild(document.createTextNode('x'));

//append del btun to li
li.appendChild(del);

//append li to itemlist
itemlist.appendChild(li);
}

//remove item function
function removeitem(e)
{

    if(e.target.classList.contains('delete'))
    {

        if(confirm('Are you sure?'))
        {
        const li=e.target.parentElement;
        itemlist.removeChild(li);
       
    
        }
    }

}
//select itemlistclass

const edititem=document.getElementsByClassName('list-group-item');
for(let i=0;i<edititem.length;i++)
{
//create edit element
const editbtn=document.createElement('button');

//create textnode
editbtn.appendChild(document.createTextNode('Edit'));

//add class name
editbtn.className='btn btn-danger btn-sm float-right edit';

//append inside edititem

edititem[i].appendChild(editbtn);
}











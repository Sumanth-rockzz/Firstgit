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
li.appendChild(document.createTextNode(newinput.value));

//creatte delete button
const del=document.createElement('button');
const editbtn=document.createElement('button');

//add class name
del.className='btn btn-danger btn-sm float-right delete';
editbtn.className='btn btn-danger btn-sm float-right edit';

//append text node
del.appendChild(document.createTextNode('x'));
editbtn.appendChild(document.createTextNode('Edit'));

//append del btun to li
li.appendChild(del);
li.appendChild(editbtn);

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

/* itemlist.addEventListener('click',edititem);
function edititem(e)
{

    if(e.target.classList.contains('edit'))
    {

        if(confirm('Are you sure?'))
        {
        const li=e.target.parentElement;
    
        }
    }

} */

const filter=document.getElementById('filter');

//filter event
 filter.addEventListener('keyup',filteritems);

 function filteritems(e)
 {
    //convert text to lower case
    var text=e.target.value.toLowerCase();

    //get list
    var items=itemlist.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        
        var description=item.childNodes[1].textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1)//it can be ==0 also
        {
            item.style.display='block';
        }
        else if(description.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        } 
        else 
        {
            item.style.display='none';
        }
    });

   
 }

//add input before submit

//create element
 const newinput=document.createElement('input');

 //add type
newinput.type='text';

//add class
newinput.className='form-control mr-2';

// get element to add before that element
const newsubmit=document.getElementsByClassName('btn btn-dark');
console.log(newsubmit);

//insert it 
form.insertBefore(newinput,newsubmit[0]);

//li.appendChild(document.createTextNode(newinput.value));
//above code is pasted at line 25

//for search its pasted in if condition line 116 && 121











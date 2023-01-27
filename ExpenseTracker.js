const Expenselist =document.getElementById('expenseslist');
const add=document.querySelector('#add')
const amount=document.querySelector('#amount');
const date=document.querySelector('#date');
const reason=document.querySelector('#reason');
const category=document.querySelector('#category');
const msg=document.querySelector('.msg');

add.addEventListener('click',addexpense);
function addexpense(e){
    e.preventDefault();
    if(amount.value===''||date.value===''||reason.value===''||category.value==='')
    {
        msg.innerHTML="Please fill in all the Details";
        msg.style.color='red';
        setTimeout(()=>msg.remove(),3000)
    }
    else  {
    const myobj={
       amount:amount.value,
       date:date.value,
       reason:reason.value,
       category:category.value
    };
    localStorage.setItem(date.value,JSON.stringify(myobj));
    const tr= document.createElement('tr');
    const del=document.createElement('button');
    const edit=document.createElement('button');
    const tdamount=document.createElement('td');
    const tddate=document.createElement('td');
    const tdreason=document.createElement('td');
    const tdcategory=document.createElement('td');
    const tddel=document.createElement('td');
    const tdedit=document.createElement('td');

    tdamount.appendChild(document.createTextNode(`${amount.value}`));
    tddate.appendChild(document.createTextNode(`${date.value}`));
    tdreason.appendChild(document.createTextNode(`${reason.value}`));
    tdcategory.appendChild(document.createTextNode(`${category.value}`));
    tr.appendChild(tddate);
    tr.appendChild(tdamount);
    tr.appendChild(tdreason);
    tr.appendChild(tdcategory);

    del.appendChild(document.createTextNode('Delete'));
    del.className='btn btn-danger';
    del.onclick=()=>{
        Expenselist.removeChild(tr);
        localStorage.removeItem(myobj.date);
    }
    edit.appendChild(document.createTextNode('Edit'));
    edit.className='btn btn-success';
    edit.onclick=()=>{
        document.getElementById('amount').value=myobj.amount;
        document.getElementById('date').value=myobj.date;
        document.getElementById('reason').value=myobj.reason;
        document.getElementById('category').value=myobj.category;

        Expenselist.removeChild(tr);
        localStorage.removeItem(myobj.date);
  
    }
    tddel.appendChild(del);
    tdedit.appendChild(edit);
    tr.appendChild(tddel);
    tr.appendChild(tdedit);
    Expenselist.appendChild(tr);

    //clear that inputfields
    amount.value='';
    date.value='';
    reason.value='';
    category.value='';

 

}

}

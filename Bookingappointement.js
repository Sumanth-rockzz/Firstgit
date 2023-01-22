
const body=document.querySelector('body');
const myform=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const numberinput=document.querySelector('#number');
const dateinput=document.querySelector('#date');
const timeinput=document.querySelector('#time');


const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');
const btun=document.querySelector('.btn btn-primary');

//add event listener to form 
myform.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
     if(nameinput.value==='' || emailinput.value===''||numberinput.value===''||dateinput.value===''||timeinput.value==='')
     {
    
     msg.innerHTML='Please enter all details!';
     msg.classList.add('error');
    
     
     setTimeout(()=>msg.remove(),3000)
     }
     else
     {
        //add to storage
   // localStorage.setItem('User1Details',`${nameinput.value}:${emailinput.value}:${numberinput.value}:${dateinput.value}:${timeinput.value}`);
    //console.log(localStorage.getItem('User1Details')); 

    // convert objects to string
    const myobj={
        nameinput:nameinput.value,
        emailinput:emailinput.value,
        numberinput:numberinput.value,
        timeinput:timeinput.value,
        dateinput:dateinput.value
    };
    const myobj_serialised=JSON.stringify(myobj);
    console.log(myobj_serialised);
    localStorage.setItem(emailinput.value,myobj_serialised);
     
    const li=document.createElement('li');

    const userinfo=document.createTextNode(`${nameinput.value}:${emailinput.value}:${numberinput.value}:${dateinput.value}:${timeinput.value}`);
    
    li.appendChild(userinfo);

    userlist.appendChild(li);

    //reverse  back to string
    const myobj_deserialised=JSON.parse(localStorage.getItem('User1Details'));
    console.log(myobj_deserialised);
 
    /*    console.log(myobj_serialised);
    console.log(myobj.nameinput);
    console.log(localStorage.nameinput); */
    //clear fields
    nameinput.value='';
    emailinput.value='';
    numberinput.value='';
    dateinput.value='';
    timeinput.value='';
    
     }
    const valid=document.querySelector('#my-form');
    valid.addEventListener('submit',e=>
    {
        if(!valid.checkValidity())
        {
            e.preventDefault();
        }
        valid.classList.add('was-validated');
    });
    
}

console.log('person1:Shows Ticket');
console.log('person2:Shows Ticket');
const promisewifebringingticket= new Promise((resolve, reject) => {
    setTimeout(() =>{resolve('ticket')},3000);
})

const getpopcorn =promisewifebringingticket.then((ticket)=>{

    console.log(`Husband:Shall we go in`)
    console.log(`wife:i am hungry`)

   return new Promise((resolve, reject) => {

        resolve(`${ticket} popcorn`);
        
    })
});

  const getbutter= getpopcorn.then((t)=>{  
    console.log(`Husband:Shall we go in`)
    console.log(`wife:i need butter on it`)
    return new Promise((resolve, reject) => {

        resolve(`${t} butter`);
    })
    
});
const getcolddrinks =getbutter.then((t)=>{
    console.log(`wife:i need colddrinks`);
    return new Promise((resolve,reject)=>{
        resolve(`${t} colddrinks`);

    })


})
getcolddrinks.then((t)=>console.log(`Husban i have ${t}`));

console.log('person4:Shows Ticket');
console.log('person5:Shows Ticket');
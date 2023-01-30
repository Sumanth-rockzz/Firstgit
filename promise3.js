//usage of aync await
/* async function plans(){
const Buycar= await new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("bought a car");
    },5000);
})
console.log(Buycar);

const plantrip= await new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("going to trip");
    },1000)
})
console.log(plantrip);
}
plans(); */

//usage of call back 1 parameter

/* function buycar(cb){
    setTimeout(()=>{
        console.log("bought a car")
        cb();
    },5000)
}
function plantrip(){
    setTimeout(()=>{
        console.log("going to trip")
    },2000)
}
buycar(plantrip); */

//usage of call back 2 parameters

/* function buycar(cb1,cb2){
    setTimeout(()=>{
        console.log("bought a car")
        cb1(cb2);

    },5000)
}
function plantrip(cb){
    setTimeout(()=>{
        console.log("going to trip")
        cb();
    },2000)
}

function reachmanali(){
    setTimeout(() => {
        console.log("reached manali")
    }, 1000);
}
buycar(plantrip,reachmanali); */

//usage of call back of 3 parameters

/* function buycar(cb1,cb2,cb3){
    setTimeout(()=>{
        console.log("bought a car")
        cb1(cb2,cb3);

    },5000)
}
function plantrip(cb1,cb2){
    setTimeout(()=>{
        console.log("going to trip")
        cb1(cb2);
    },2000)
}

function reachmanali(cb){
    setTimeout(() => {
        console.log("reached manali")
        cb();
    }, 1000);
}
function mountain(){
    setTimeout(() => {
        console.log("reached mountain");
    }, 3000);
}
buycar(plantrip,reachmanali,mountain); */


 function buycar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve('I bought a car'); // reject('i didnt bought a car'); 
                                      //if i reject no further codes will be executed all 
        }, 5000);
        
    })
}
function plantrip(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve('going to trip');
            
        }, 2000);
        
    })
}
function reachmanali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve('reached manali');
            
        }, 1000);
        
    })
}
/* buycar().then((msg1)=>{
    console.log(msg1)
    plantrip().then((msg2)=>{
        console.log(msg2)
        reachmanali().then((msg3)=>{
            console.log(msg3)
        }).catch((err)=>console.log(err))

    }).catch((err)=>console.log(err))

}).catch((err)=>console.log(err))  */

function plan1(){
    Promise.all([buycar(),plantrip(),reachmanali()]).then((values)=>{
        console.log(values);
    }).catch((err)=>console.log(err));
}
plan1();




/* function buycar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve('I bought a car'); // reject('i didnt bought a car'); 
                                      //if i reject no further codes will be executed all 
        }, 5000);
        
    })
}
function plantrip(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve('going to trip');
            
        }, 2000);
        
    })
}
function reachmanali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            reject('accident happened');
            
        }, 1000);
        
    })
}

async function  plan1(){

try
{
const car= await buycar();
console.log(car);
const trip= await plantrip();
console.log(trip);
const manali= await reachmanali();
console.log(manali);
}
catch(err){
    console.log(err);

}
}
plan1();
 */
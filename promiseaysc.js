const posts=[
    {title:'Post one',body:'This is post one',createdAt: new Date().getTime()},
    {title:'Post two',body:'This is post two',createdAt: new Date().getTime()}
];
let intervalId=0;
function getPosts()
{
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let output='';
        posts.map((post,index)=>{
            output+=`<li>${post.title} Last updated ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`;
        })
        document.body.innerHTML=output;
    }
    ,1000)

}

function createPost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt: new Date().getTime()});
            const error=false;
            if(!error)
            {
             resolve(posts);
            }
             else {
             reject('Error:Something went wrong');
             }
    
        },2000);

    });
   
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0)
            {
             resolve(posts.pop());
            }
             else {
             reject('Array is Empty Now');
             }
    
        },1000);

});
}
async function plan(){
    try{
  await Promise.all([createPost({title:'Post three',body:'This is post three'}),
                                createPost({title:'Post four',body:'This is post four'}),
                                createPost({title:'Post five',body:'This is post five'})]);
    getPosts();
    while(posts.length>-1)
    await deletePost();
    }
    catch(err){
        console.log(`Error:${err}`);
    }
  
    
    

}
plan();
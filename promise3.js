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
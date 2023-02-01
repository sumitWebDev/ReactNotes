const posts = [{title: 'Post 1'}, {title:'Post 2'}];

//get Posts
function getPosts (){
    setTimeout(()=>{
        let output= '';
        posts.forEach((post,index)=>{
            output+= `<li>${post.title}</li>`
        })

    console.log(output)
    document.body.innerHTML = output
    },1000)

}




//create posts

function createPosts(){
    return new Promise (function(resolve, reject){
        setTimeout(()=>{
            posts.push({title:'Post 3'})
            reject('dfdfb')
        },3000)
    })
}
async function learning(){
    try{
        await createPosts();
        getPosts()
    }
    catch(err){
        console.log(err)
    }

}
learning()
//Using Promises
// createPosts()
// .then(function(data){
//     console.log(data)
//     getPosts()
// })

//getPosts()
//posts.push({title:'Post 3'})
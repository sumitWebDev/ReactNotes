// const user = fetch('https://api.github.com/users/sumitWebDev');

// console.log(user.data)
// fetch('https://api.github.com/users/sumitWebDev')
//     .then(function (data) {
//         return data
//     })
//     .then(function (data) {
//         console.log(data.json().name)
//     })


//Promise Producer
function checkCart(){
    const cartValue = false;
    const newPromise = new Promise(function(resolve,reject){
        if(cartValue){
            setTimeout(function(){
                resolve('worked my promise');
            },3000)
        }
        else if(!cartValue){
            setTimeout(function(){
                reject('not worked my promise');
            },3000)
        }
    });
    return newPromise
}


//Promise Consumer
const cartOk = checkCart();
console.log(cartOk)
cartOk.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
});
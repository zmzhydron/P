'use strict'
function hehe(time){
    return new Promise((resolve,reject) =>{
        setTimeout( ()=>{
            resolve('fuck you~~ man');
        },time)
    })
}
var asdf = hehe(1000);
asdf.then((val) =>{
    return new Promise((resolve,reject)=>{
        setTimeout( () =>{
            resolve(val+" zhangmingzhi")
        },1000);
    })
}).then((val) =>{
    return new Promise((resolve,reject)=>{
        setTimeout( () =>{
            resolve(val+" stupid fuck!!")
        },500);
    })
}).then((val) =>{
    console.log(val);
})


var ne = Promise.resolve(( resolve,reject) =>{
    setTimeout(function(){
        resolve('11111')
    },1000);
});
ne.then( val => console.log(val));

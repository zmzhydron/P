'use strict';
var fs = require('fs');
const patten = /([A-Z]{2,}-?[0-9]{3})/gm;

var asdf = [1,2,3,4,5,6];
var sum = asdf.reduce((pre,cur,index,ary) =>{
    console.log(index,ary);
    if(pre < 10){
        ary.push(++pre);
    }
    return pre + cur;
})
console.log(sum);
// fs.readFile("C:/Users/Administrator/Desktop/avsow.txt",{encoding:"utf8"},(err,data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     var str = data.toString('utf-8');
//     var match = str.match(patten);
//     if(match.length){
//         var refObj = {};
//         var result = match.filter((item) => {
//             if(!refObj[item]){
//                 refObj[item] = true;
//                 return item;
//             }else{
//                 // console.log(` repit @: ${item}`)
//             }
//         });
//         result = result.map((item) =>{
//             return item + "\r";
//         })
//         let me = {
//             name : "zhangmingzhi",
//             skill: {
//                 js: {
//                     node: {
//                         stream: {
//                             native: "formilay"
//                         }
//                     }
//                 }
//             }
//         }
//         let {skill:{js:{node:{stream:{native: streamSkill}}}}} = me;
//         console.log(streamSkill);
//         console.log(result);
//         fs.writeFile("C:/Users/Administrator/Desktop/avsow-filted.txt",result,(err) =>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(` write file success!! `);
//         })
//     }
// })

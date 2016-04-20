'use strict';
var fs = require('fs');
function imm(){
    console.log(` this is imm function`);
    return 10;
}
function fuckyou(num){
    return num * 2;
}
function *gen(val){
    console.log("let's begin~~~");
    var a = 10 * (yield imm(val));
    console.log(` step A's value is ${a}`);
    var b = yield a / 20;
    console.log(` step B's value is ${b}`);
    var c = 10 * (yield fuckyou(b));
    console.log(` step C's value is ${c}`);
}
// var g = gen(10);
// var a,b,c;
// a = g.next();
// b = g.next(2);
// c = g.next(10);
// g.next(20);
// console.log(a,b,c);
function writeFile(val){
    fs.writeFile("D:/generators/1.txt",val,{"encoding":"utf8"},(err) =>{
        if(err){
            console.log('error ocurre');
            return false;
        }
        console.log("writefile suceess");
    })
}
//
function checkDIR(val){
    var r = fs.exists(val,function(exists){
        console.log(` exists: ${exists} `);
        console.log(gen.next(exists),"  ######");
    });
}
function makeDIR(isexists,val){
    console.log(isexists,val);
    if(!isexists){
        fs.mkdir(val,(err) =>{
            if(err){
                console.log(` makedir error `);
                return;
            }
            console.log(` make dir success `);
            console.log(gen.next("2.txt"));
        });
    }else{
        console.log("@@@@@@@@@@@@@@@");
        setImmediate(function(){
            gen.next("fuck");
        });
    }
}
function WriteFile(path,val){
    console.log("!!!!!!!!!!!!!!!!");
    fs.writeFile(path,val,(error) =>{
        if(error){
            console.log(` WriteFile error `);
            return false;
        }
        console.log(` writefile success `);
    })
}
function *file(val){
    console.log('read file began~~');
    var a = yield checkDIR(val);
    console.log(a,' aaaaaaaaaaaaaaaaaaaaa');
    var b = yield makeDIR(a,val);
    console.log(b,' bbbbbbbbbbbbbb');
    var c = yield WriteFile(val + "/1.txt",b);
}
var gen = file("D:/generators");
var z,x,c,v,d;
z = gen.next();

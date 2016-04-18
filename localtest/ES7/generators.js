'use strict';
var fs = require('fs');
function imm(){
    console.log(` this is imm function`);
    return 10;
}
function fuckyou(num){
    console.log(num,'num');
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
var g = gen(10);
var a,b,c;
a = g.next();
b = g.next(2);
c = g.next(10);
g.next(20);
// g.next();
// for(var s of g){
//     console.log(s);
// }
console.log(a,b,c);

function *automatic(){
    while(true){
        console.log("one");
        yield;
        console.log("two");
        yield;
    }
}
var tick = automatic();
var count = 0;
// console.log(tick.return);
// for(var s of tick){
//     count++;
//     if(count>10){
//         tick.return(true);
//     }
//     console.log(tick[s]);
// }
// tick.next();
// tick.next();
// tick.next();
// tick.next();
// tick.next();
// tick.next();
// tick.next();
// tick.next();
// tick.next();
// tick.next();
// tick.next();
// tick.next();

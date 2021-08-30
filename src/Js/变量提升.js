// 1 
function a() {

}
var a;
typeof(a); // function

// 2
console.log(b);
if(!(b in window)) {
    var b = 1
}
console.log(b) // undefined

// 3
var c = 1;
function c(c) {
    console.log(c); 
    var c = 3; // 重新声明并重新赋值
    console.log(c); 
}
c(2); //报错


// // 3.1 预解析
var c;
function c(c) {
    console.log(c);
    var c = 3;
}
// 3.2 执行
c = 1;
// 所以c不是一个function
c(2); //报错

// 
var a = 3;
function fn() {
    console.log(a); // undefined
    var a = 4;
}
fn();

var a = 0,
b = 0;

// 4
// a++ 先跟别人运算再自身累加
// ++a 先自身累加再跟别人运算
function A(a) {
A = function (b) {
    console.log('a, b', a, b);
    console.log('1', a+b++)
}
console.log('2', a++);
}

console.log('A-1', A);
A(1);
console.log('A-2', A);
A = [];
console.log('A-3', A);
// A(3);
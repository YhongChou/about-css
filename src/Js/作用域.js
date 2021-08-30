// var
// if (true) {
//     var a = 1;
// }
// console.log(a); // 1 var会提升，没有块级，可以提升到全局

// function fun1() {
//     if (true) {
//         var a = 1; 
//     }
// }
// console.log(a); // 报错

// var a = 2;
// function fun1() {
//     if (true) {
//         var a = 1;
//     }
// }
// console.log(a);  // 2

// let
// 1. 暂时性死区
// var a = a;
// console.log(a); //undefined

// let b = b;
// console.log(b); // 报错

// var c = 1;
// {
//     // 取的是当前块级作用的同名变量
//     let c = c; // 报错
//     console.log(c);
// }

// function fn1(x = 1, y = x) {
//     console.log(x, y);
// }
// console.log(fn1()); // 1 1
// console.log(fn1(1)); // 1 1 
// console.log(fn1(1, 2)); // 1 2

// 3. 只在当前作用域有效
// 3.1 
// var arr = [];
// for(var i = 0; i < 10; i++) {
//     arr[i] = function() {
//         console.log(i);
//     }
// }

// for(let i = 0; i < 10; i++) {
//     arr[i]();
//     // console.log(arr[i]()); // 0 - 9
// }
// for(let i = 0; i < 10; i++) {
//     arr[i] = function() {
//         console.log(i);
//     }
// }

// for(let i = 0; i < 10; i++) {
//     arr[i]()
//     // console.log(arr[i]()); // 0 - 9
// }

// 3.2
// for(var i = 0; i < 10; i++) {
//     // i = 'a'; // 1 只执行一次 'a'
//     i = 7; // 2 死循环 7
//     var i = 'a'; // 3 'a' 与1情况一致，因为都在全局var了i
//     console.log(i);
// }

// 3.3
// for()中的作用域和{}中的作用域是两个作用域
// () 父级作用域 {} 子作用域
// for(let i = 0; i < 10; i++) {
//     // i = 'a'; // 1 只执行一次 'a'
//     // i = 7; // 2 死循环
//     // var i = 'a'; // 3 重复定义了
//     // let i = 'a'; // 4 输出9次'a' 每一次都重新赋值
//     console.log(i);
// }

// 3.4 let相当于重新创建了一个块级作用域，可以模拟立即执行函数
// if(1) {
//     let a = 1;
//     {
//         let a = 'a';
//         console.log(a); // ''a
//     }
//     (function() {
//         let a = 'b';
//         console.log(a); // 'b'
//         // var i = 0;
//     })();
//     // console.log(i); // ReferenceError: i is not defined
//     console.log(a) // 1

//     // var b = 10;
//     // {
//     //     let b = 1;
//     // }
//     // console.log(b); // 10
//     // let b = 10;
//     // {
//     //     var b = 1;//Uncaught SyntaxError: Identifier 'b' has already been declared
//     // }
//     // console.log(b);
// }

// 3.4 函数声明提升 在当前作用域
// {
//     var a = 'a';
//     // {
//     //     // 函数提升，提升到当前块级作用域的前面
//     //     function a() {
//     //         console.log('fun 1')
//     //     }
//     //     a();
//     // }

//     // 可以使用函数表达式重新赋值
//     // a = function() {
//     //     console.log('fun 2')
//     // }

//     // 重复声明
//     function a() {
//         console.log('fun 1')
//     }
//     a();
//     // var a = 'b';
// }

// {
//     const obj = {};
//     Object.freeze(); // 不能再更改值
//     obj.age = 18;
//     console.log(obj) // obj指向的指针不变，但是栈地址内部的内容有改变
// }


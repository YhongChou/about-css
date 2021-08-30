// 1 形参向上找 找到全局的
// let x = 1;
// function fun1(y = x) {
//     // // 01
//     console.log(x); // 1

//     // 02
//     let x = 2;
//     console.log(x); // 2

//     // 03
//     console.log(x); // 报错 在初始化前使用
//     let x = 2;
//     console.log(x); 
// }
// fun1();

// 2 形参跟{}不是一个层级，但特殊情况，这时候重复定义会报错
// 取值可以，但是重定义不行
// function fun2(y = 2) {
//     let y = 3; //报错
//     console.log(y) // 1
// }
// fun2(5);

// 3 形参向上找 找到全局的
// let y = 1;
// function fun3(y = y) { // 拿不到父级的
//     console.log(y) // 报错
// }
// fun3();

// // 类似于
// let x = 1;
// {
//     let x = x; // 可以理解为形参就是用let关键字定义的，所以这时候不会向父级找，只会找同级的
//     console.log(x); // 报错
// }

// // 案例1 
// var w = 1, z = 2;
// function foo(x = w + 1, y = x + 1, z = z + 1) {
//     console.log(x, y, z);// z报错 看的都是同级的
// }
// foo();

// 案例2 
let a = 99;
function foo(b = a + 1) {
    console.log(b);
}
foo(); // 100
a = 100;
foo(); // 101
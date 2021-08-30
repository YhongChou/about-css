// 解构赋值 或 模式化赋值 结构一样就可以进行匹配
// 1. 数组的模式匹配
// let [a, b, c] = [1, 2, 3];
// let [d, [b], [c]] = [1, [2], [3]];
// let [d, [b, e], [c]] = [1, [2, 4], [3]];

// 2 结构失败 通常是结构不一样 多变量了
// let [d, [b, ], [c]] = [1, [2, 4], [3]];
// console.log(d, b, c); // 1 2 3

// 3 不完全解构 多值了
// let [d, [b, e], [c]] = [1, [2, ], [3]];
// console.log(d, b, e, c); // 1 2 undefined 3

// 4 数组解构
// 4.1 默认值为值、对象
// let [a = 6] = [1]; // 1
// let [a = 6] = []; // 6

// let [a, b = 2] = [1]; // 1 2
// let [a, b = 2] = [1, undefined]; // 1 2
// let [a, b = 2] = [1, null]; // 1 null
// let [a, b = 2] = [1, false]; // 1 false

// 4.2 默认值为函数
// function test() {
//     console.log('test');
// }
// let [x = test()] = [1]; // 1
// let [x = test()] = []; // test()执行的结果
// console.log(x);

// 4.3 
// let [x = 1, y = x] = [];
// console.log(x, y); // 1 1

// let x = 2; // var同理
// let [x = 1, y = x] = []; // 解构赋值也是定义变量 x重复定义了
// console.log(x, y); // 报错

// let [x = y, y = 1] = [];
// console.log(x, y); // 报错，y在使用前就定义了

// 5 对象
// 5.1 定义对象
// let obj = {};
// let obj = new Object();
// // 原型为null
// let obj = Object.create(null);

// // 5.2 使用
// obj.name = 'ni';
// obj['name'] = 'hao';
// delete obj.name;

// var name = 'hao';
// var person = {
//     // es6对象简写 一样时，可省略
//     // name: name, // 属性名：变量名
//     name, 
//     age: 12,
//     color: 'blue',
//     eat: function() {

//     },
//     // es6 function简写
//     foo() { 

//     }
// }
// console.log(person);

// let a = 'a';
// let c = 'c';
// let name = 'ni';
// let person = {
//     // es6 拼接属性名
//     [a + c] : name,
//     [a + 'c'] : name,
//     ['a' + 'c'] : name,
// }
// console.log(person);

// 6 对象解构 通过变量名去匹配的 跟变量的顺序无关
// 6.1 解构简写
// // {变量名: 属性名} 
// let {a: a, b: b, c: c} = {a: 1, b: 2, c: 3};
// // 简写
// let {a, b, c} = {a: 1, b: 2, c: 3};
// 6.2 解构失败
// let {a = 1, b, c, d, e} = {b: 2, c: 3};
// console.log(a, b, c, d, e); // 1 2 3 undefined undefined

// 6.3 解构的默认值 不完全解构
// let {a = 2, b, c} = {b: 2, c: 3, e: 9, f: 12};
// console.log(a, b, c); // 2 2 3 没解构到a


// 案例1
var person = {
    name: 'ni',
    age: 10,
    son: {
        name: 'hao',
        age: 22,
        son: {
            name: 'ss',
            age: 44,
        }
    }
}

let {son: {son: {age: myage}}} = person;
console.log(myage);


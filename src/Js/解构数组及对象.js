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

// let x = 2, y; // var同理
// let [x = 1, y = x] = []; // 解构赋值也是定义变量 x重复定义了
// console.log(x, y); // 报错
// 可改写为
// let x = 2, y; // var同理 先定义y
// ([x = 1, y = x] = []); // 用()变为表达式
// console.log(x, y); // 1 1

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
// var person = {
//     name: 'ni',
//     age: 10,
//     son: {
//         name: 'hao',
//         age: 22,
//         son: {
//             name: 'ss',
//             age: 44,
//         }
//     }
// }

// let {son: {son: {age: myage}}} = person;
// console.log(myage);

// // 匹配同一个属性
// let {a: x, a: y} = {a: 1};
// console.log(x, y); // 1 1

// ()语法
// let {a} = {a: 1};
// // 用()等价于 将解构变成一个赋值
// let a;
// ({a} = {a: 1}); // 1

// let/var 声明 + ()会报错  let ([x]) = [];
// let [(a)] = [1]; // 报错
// let {a: (b)} = {}; // 报错

// // 7 数组&对象 
// // 7.1数组可以解构给对象，数组也是对象。
// // 案例1 [arr.length - 1]是一个表达式
// let arr = ['a', 'b', 'c'];
// let {0: first, [arr.length - 1]: last} = arr;
// console.log(first, last);

// // 7.2 两侧的变量规则相同，才能进行匹配
// // 两侧的变量规则不同
// ([a]) = [1]; // 失败
// //()将式子变为表达式赋予了b默认值，而不是匹配得到的
// ({a: (b) = {}}); // {}
// // 
// let a = {};
// //(a.b)一个表达式
// [(a.b)] = [3]; // 等价于[a.b]=[3]
// console.log(a.b); // 3
// console.log(b); // b is not defined

// // 案例2 
// let a = 'x';
// let b = 'y';
// let obj = {};
// {a: obj[a + b]} = {a: 2}; // 失败
// // {}也是一个块级作用域，所以用()变为表达式
// ({a: obj[a + b]} = {a: 2}); // 匹配

// // 案例3
// let obj = {a: 1, b: 2, c: 3};
// let obj2 = {};
// {a: obj2.a, b: obj2.b, c: obj2.c} = obj; // 失败
// ({a: obj2.a, b: obj2.b, c: obj2.c} = obj);

// // 案例3
// let obj = {a: 1, b: 2, c: 3};
// let obj2 = {};
// // {a: obj2.a, b: obj2.b, c: obj2.c} = obj; // 失败
// let ({a: obj2.a, b: obj2.b, c: obj2.c} = obj); // 报错
// ({a: obj2.a, b: obj2.b, c: obj2.c} = obj);

// // 7.3 交换值
// let a = 10, b = 20;
// [a, b] = [b, a]; 
// console.log(a, b); // 20 10

// // 案例3
// var x = 100, y = 200, z = 300;
// var obj1 = {x: {y: 42}, z: {y: z}};

// // 匹配属性名y，并重命名为变量x,重写了上面的var x,变量x的默认值是x = {y: 200}
// // 属性名y匹配不到，所以用默认值 
// ({y: x = {y : y}} = obj1); 
// ({z: y = {y : z}} = obj1); 
// ({x: z = {y : x}} = obj1); 
// console.log(x.y, y.y, z.y); // 200 300 42

// // 案例4
// let x = 100, y = 200, z = 300;
// var obj1 = {x: {y: 42}};

// // 找的是全局的变量y, 
// ({z: y = {y : y}} = obj1); 
// ({x: z = {y : y}} = obj1); 
// console.log(y,z); // y = { y : 200} z = { y: 42 }

let x = 10;
x = {
    x: x
};
console.log(x); // x = {x : 10}

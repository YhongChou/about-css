// 引入第三方库 
import $ from 'jquery';
// 统一引入模块
// 1. import xxx from 'path'
// import moduleA from './moduleA';
// import moduleB from './moduleB';

// 2.分别/统一方式暴露的都是一个对象，要用解构的方式进行引入
import * as moduleA from './moduleA';
import {fun1 as fun1B, arr} from './moduleB';

// 3. export default 默认暴露
import ModuleC from './moduleC';

console.log(moduleA);
moduleA.fun1();
// console.log(arr);
fun1B();
console.log(ModuleC);
// console.log(ModuleC.fun1());
// console.log(ModuleC.fun2());
// console.log(ModuleC.fun3());

// 4. 使用第三方库
$('body').css('background', 'pink');
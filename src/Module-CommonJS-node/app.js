// 引入第三方库
let uniq = require('uniq');

// 引入自定义模块
let moduleA = require('./modules/moduleA');
let moduleB = require('./modules/moduleB');
let moduleC = require('./modules/moduleC');

console.log(moduleA.name, 'moduleA.foo', moduleA.foo, 'moduleA.foo()', moduleA.foo());
// let result = uniq(moduleC.uniqArr);
// console.log(result);
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _moduleA = require('./moduleA');

var moduleA = _interopRequireWildcard(_moduleA);

var _moduleB = require('./moduleB');

var _moduleC = require('./moduleC');

var _moduleC2 = _interopRequireDefault(_moduleC);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入第三方库 
console.log(moduleA);

// 3. export default 默认暴露

// 统一引入模块
// 1. import xxx from 'path'
// import moduleA from './moduleA';
// import moduleB from './moduleB';

// 2.分别/统一方式暴露的都是一个对象，要用解构的方式进行引入

moduleA.fun1();
// console.log(arr);
(0, _moduleB.fun1)();
console.log(_moduleC2.default);
// console.log(ModuleC.fun1());
// console.log(ModuleC.fun2());
// console.log(ModuleC.fun3());

// 4. 使用第三方库
(0, _jquery2.default)('body').css('background', 'pink');
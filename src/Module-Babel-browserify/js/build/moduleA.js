'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fun1 = fun1;
exports.fun2 = fun2;
// 分别export暴露模块 
function fun1() {
    console.log('moduleA fun1');
}

// 暴露模块
function fun2() {
    console.log('moduleA fun2');
}

var arr = exports.arr = [1, 2, 3];
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一export暴露模块
function fun1() {
    console.log('moduleB fun1');
}

function fun2() {
    console.log('moduleB fun2');
}

var arr = [4, 5, 6];
exports.fun1 = fun1;
exports.fun2 = fun2;
exports.arr = arr;
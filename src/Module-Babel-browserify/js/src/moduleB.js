// 统一export暴露模块
function fun1() {
    console.log('moduleB fun1')
}

function fun2() {
    console.log('moduleB fun2')
}

const arr = [4, 5, 6];
export {fun1, fun2, arr}
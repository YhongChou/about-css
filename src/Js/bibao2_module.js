// 1 
function myModule1() {
    var msg = 'bibao';
    // 定义闭包
    function fun1() {
        console.log('fun1', msg)
    }
    function fun2() {
        console.log('fun2', msg)
    }

    // 向外暴露闭包
    return {
        fun1,
        fun2
    }
}

// // 2 立即调用
// (function myModule(window) {
//     var msg = 'bibao';
//     // 定义闭包
//     function fun1() {
//         console.log('fun1', msg)
//     }
//     function fun2() {
//         console.log('fun2', msg)
//     }

//     // 向外暴露闭包
//     window.myModule = {
//         fun1,
//         fun2
//     }
// })(window)
// 1. export default默认暴露 引入时不需要用解构引入
// 2. export default可以暴露任意数据类型
// export 不能暴露箭头函数

// 3. 暴露单个
// export default () => {
//     console.log('modulC')
// }

// 4. 暴露多个
export default {
    arr: [1, 2, 3],
    fun1() {
        console.log('modulC fun1')
    },
    fun2: () => {
        console.log('modulC fun2')
    },
    fun3: function() {
        console.log('modulC fun32')
    }
}
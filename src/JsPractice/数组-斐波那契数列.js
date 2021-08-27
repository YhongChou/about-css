function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    let arr = [1, 1];
    // 要创建多少个
    let i = n + 1 -2;
    while(i > 0) {
        // 一个数列倒数两个数
        let a = arr[arr.length - 2];
        let b = arr[arr.length - 1];
        arr.push(a + b);
        i--;
    }
    // 返回最后一项的值
    return arr[arr.length - 1];
}

// function fibonacci(arr) {

// }

// 5表示索引
// [1, 1, 2, 3, 5, 8]
console.log(fibonacci(5));
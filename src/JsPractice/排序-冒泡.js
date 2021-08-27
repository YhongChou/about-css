function bubblue(arr) {
    let temp = null;
    // length - 1
    for(let i = 0; i < arr.length -1; i++) {
        // length - i 
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // 解构赋值交换两个变量的值
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
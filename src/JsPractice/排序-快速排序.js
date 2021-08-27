function quick(arr) {
    // 4 结束递归
    if (arr.length <=1){
        return arr;
    }
    // 1 找到中间项并移出
    let middleIndex = Math.floor(arr.length/2);
    let middleValue = arr.splice(middleIndex, 1)[0];

    // 2 准备两个中间数组,小了放中位数左边，反之右边
    let arrLeft = [];
    let arrRight = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        item < middleValue ? arrLeft.push(item) : arrRight.push(item);
    }

    // 3 递归方法处理排两边的数组
    return quick(arrLeft).concat(middleValue, quick(arrRight));

}

const arr = [12, 8, 15, 16, 1, 24];
const res = quick(arr);
console.log(res);
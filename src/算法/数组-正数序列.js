// 5 =》 2 3
function fn(count){
    let result = [];
    // 1 中间值
    let middle = Math.ceil(count/2);
    // 2 从1开始累加
    for(let i = 1; i < middle; i++) {
        // 3 累加多少次
        for(let j = 2;;j++) {
            // 4 累加多次的和 i j之间所有的最大值
            let total = (i + (i + j -1)) * (j/2);
            if(total > count) {
                break;
            }else if(total === count) {
                // 最大的，数组长度
                result.push(createArr(i, j));
                break;
            }
        }
    }
    return result;
}

// 创建连续数列
function createArr(n, len) {
    let arr = new Array(len).fill(null);
    let temp = [];
    arr[0] = n;
    arr = arr.map((item, index) => {
        if (item === null) {
            item = temp[index - 1] + 1;
        }
        temp.push(item);
        return item;
    });
    return arr;
}

console.log(fn(5));
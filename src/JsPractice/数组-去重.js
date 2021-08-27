function unique(arr) {
    // 1 用map
    // const newMap = new Map();
    // let res = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (newMap.has(arr[i])) {
    //         console.log('1');
    //         continue;
    //         // break;
    //     } else {
    //         newMap.set(arr[i], 1);
    //         res.push(arr[i]);
    //     }
    //     console.log('2')     
    // }

    // 2 用set set的键值是唯一的
    const set = new Set(arr);
    const res = [...set];

    // 3 filter indexOf返回第一个
    res = arr.filter((item, index) => arr.indexOf(item) === index)

    return res;
}

const arr = [1, 2, 3, 2];
const res = unique(arr);
console.log(res);

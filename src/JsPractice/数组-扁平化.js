function flat(arr) {

    // 1 Array.flat()
    // const res = arr.flat(Infinity)

    // 2 正则
    // const str = JSON.stringify(arr).replace(/\[|\]/g, '');
    // 或
    // const str = arr.toString().replace(/\[|\]/g, '');
    // const res = str.split(',');

    // 3 JSON.stringify + JSON.parse
    // const str = JSON.stringify(arr).replace(/\[|\]/g, '');
    // 或
    // const str = arr.toString().replace(/\[|\]/g, '');
    // const res = JSON.parse('[' + str + ']');

    // 4 递归
    // const res = [];
    // const fn = subArr => {
    //     for (let i = 0; i < subArr.length; i++) {
    //         if (Array.isArray(subArr[i])) {
    //             fn(subArr[i])
    //         } else {
    //             res.push(subArr[i])
    //         }
    //     }
    // }
    // fn(arr);

    // 5 reduce
    // const res = arr => {
    //     return arr.reduce((pre, cur) => {
    //         return pre.concat(
    //             Array.isArray(cur) 
    //             ? res(cur) : cur
    //         )
    //     }, [])
    // }
    // return res(arr)


    // 6 some
    while(arr.some(item => Array.isArray(item))) {
        // arr = [].concat(...arr);
    }
    return arr;
}

// const arr = [0, 1, 2, , ,[[[3, 4]]]];
const arr = [0, 1, 2, [[[3, 4]]]];
const res = flat(arr);
console.log(res);
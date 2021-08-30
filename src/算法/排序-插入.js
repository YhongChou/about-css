function inset(arr) {
    // 1 用于存储比较完的数，初始值是arr[0]
    let handle = [];
    handle.push(arr[0]);

    // 2 从第二张arr[1]开始依次比较
    for(let i = 1; i < arr.length; i++){
        // 新数
        let A = arr[i];
        // 3 和handle中已经存在的数进行比较，从后往前
        for(let j = handle.length - 1; j > 0; j--) {

            let B = handle[j];
            // 4 新数大，把新数放在后面 
            if(A > B) {
                handle.splice(j+1, 0, A);
                break;
            }
            // 5 已经比较了一遍
            if(j === 0) {
                handle.unshift(A)
            }
        }
    }
    return handle;
}
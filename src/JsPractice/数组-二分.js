//旋转数组查找目标值
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length;
    let mid = 0;

    while(start <= end) {
        // mid = start + Math.floor((end - start) / 2));
        // mid = start + (end - start) >> 1));
        mid = parseInt(start + (end - start) / 2);
        if(arr[mid] === target)return mid;
        if(arr[start] <= arr[mid]) {
            if(target <= arr[mid] && target >= arr[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(target <= arr[end] && target >= arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
}
function longestSubstring(str) {
    let map = new Map();
    let leftIndex = 0;
    let longestLength = 0;
    // let preIndex = 0;
    for(let i = 0; i < str.length; i++) {
        // 值是'undefined'类型 typeof(map.get(s[i])) === undefined true
        if(map.get(s[i]) !== undefined && map.get(s[i]) >= leftIndex) {
            leftIndex = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
        longestLength = Math.max(i - leftIndex + 1, longestLength);
    }
    return longestLength;
}
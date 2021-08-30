// 'ABC00你' -> 'abc00'
function lowCase(str) {
    const subStr = str.replace(/[a-zA-Z]/g, res => {
        // res 每次正则匹配的结果 每一项处理后再返回
        // 校验大小写 
        // 1 转换 2 比较ASCII码 大写65-90
        // if (res.charCodeAt() >= 65 && res.charCodeAt() <= 90)

        return res.toUpperCase() === res ? res.toLowerCase() : res.toUpperCase();



    })
    return subStr;
}

console.log(lowCase('ABCd00'));
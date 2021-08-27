function addSpace(str) {
    // [a-z]出现多次，且开头结尾都需要是字母
    const reg = /\b[a-z]+\b/ig;
    let res = '';
    res = str.replace(reg, res => {
        return " " + res + " "
    }).trim();
    return res;
}

const str = "U能U上啊";
console.log(addSpace(str));
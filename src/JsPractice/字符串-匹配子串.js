// 在字符串'adfag'是否能找到'ad'子串

function myIndexOf(T) {
    // this指向S
    // 1 循环每一项 截取T.length个，向后找，找到返回索引
    // let lenT = T.length;
    // let lenS = this.length;
    // let res = -1;
    // if (lenT > lenS) {
    //     return res;
    // }
    // for(let i = 0; i < lens - lenT + 1; i++) {
    //     if (this.substr(i, lenT) === T) {
    //         res = i;
    //         break;
    //     }
        
    // }

    // return res;

    // 2 正则 将T转换为正则
    // 如果是/\T/ 代表的是字符串T，这里T不是变量
    const reg = new RegExp(T);
    let res = reg.exec(this);

    return res === null ? -1 : res.index;
};

String.prototype.myIndexOf = myIndexOf;

const S = 'nihaoya';
const T = 'oa';
console.log(S.myIndexOf(T));
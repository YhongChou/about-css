function shallowCopy(obj) {
    var target = {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            target[key] = obj[key];
        }
    }
    return target
}

function deepCopy(obj) {
    let res = new obj.constructor();
    // 等价的
    // let res = {};
    console.log('res', obj.constructor());
    // 递归的出口
    if (typeof obj !== 'object' 
        || obj === null
    ) 
        return obj;
    // instanceof：obj.__proto__ === Date.prototype 
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepCopy(obj[key])
        }
    }
    return res;
}

const person = {
    name: '小李',
    hobbies: [
        '学习',
        [
            '游戏',
            '运动'
        ]
    ],
    fn: function() {},
    date: new Date()
}

// 赋值
// 复制第一层地址(比如name的地址)，指向同一块堆内存地址，不管是哪种数据类型
// const person1 = person;

// 浅拷贝
// 基本数据类型：开辟新的堆内存地址存储复制最外面的地址(比如name指向的地址)
// 引用类型：不重新开辟，还是指向对象最外面的地址
// 最外层：比如指向hobbies最外层的地址，不是hobbies[1]的地址
// const person1 = shallowCopy(person);

// 深拷贝
const person1 = deepCopy(person);
// 深拷贝的方法之一，但是有弊端,reg date json格式的会被忽略掉
// const person1 = JSON.parse(JSON.stringify(person));


person1.name = '小王';
// person1.hobbies[0] = '电影';
person1.hobbies[1] = '电影';
// console.log(person1, person);
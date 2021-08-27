// (5).add(3).minus(4) 数字可以调用add minus

// 每个方法都要Number类的实例，才可以调用Number中的方法

// 自调用函数
(function () {
    function check(n) {
        n = Number(n);
        return isNaN(n) ? 0 : n;
    }
    function add(n) {
        console.log('add');
        n = check(n);
        // this指向被调用的对象
        return this + n;
    }
    
    function minus(n) {
        n = check(n);
        return this - n;
    }
    
    // ["add", "minus"].forEach(item => {
    //     Number.prototype[item] = eval(item)
    // });
    // 或
    Number.prototype.add = add;
    Number.prototype.minus = minus;
})();

// 在调用的时候执行add等方法
// function check(n) {
//     n = Number(n);
//     return isNaN(n) ? 0 : n;
// }
// function add(n) {
//     console.log('add');
//     n = check(n);
//     // this指向被调用的对象
//     return this + n;
// }

// function minus(n) {
//     n = check(n);
//     return this - n;
// }

// Number.prototype.add = add;
// Number.prototype.minus = minus;


// console.log((5).add(2).minus(2));

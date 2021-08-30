// module.exports = value
module.exports = {
    name: 'abc',
    age: 19,
    foo() {
        console.log('using moduleA');
        return 'foo function'
    }
}

// 下面的会覆盖上面的对象
// module.exports = {
//     foo: 'overwrite'
// }


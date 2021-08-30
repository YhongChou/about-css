// 1
var x = 10;
function fn() {
    console.log(x); // 10 执行的是在window上的
}
function show(f) {
    var x = 20;
    f();
}
show(fn);

// 2
var fn = function() { // let同理
    console.log(fn) // function
}
fn()

var obj = {
    fn2: function() {
        console.log(this.fn2); // 指定寻找的作用域为obj
        console.log(fn2) // 同级作用域没有，往上找，全局也没有
    }
}
obj.fn2()


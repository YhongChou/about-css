function foo() {
    console.log(1)
}

function bar1() {
    console.log(2)
}

function bar2() {
    console.log(3)
}

let a = 3;

const obj = {
    a,
    foo,
    bar1,
    bar2
}

// commonJS
module.exports.obj = obj;
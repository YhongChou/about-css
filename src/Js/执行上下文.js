console.log('global begain', i);

var i = 1;
foo(1);
function foo(i) {
    if (i === 4) {
        return
    }

    console.log('foo begain', i);
    foo(i + 1);
    console.log('foo end', i);
}
console.log(i);
// function* generatorTest() {
//     yield 'test';
//     return 'ending';
//   }

//   // 调用这个方法，返回一个 迭代器
//   const gt = generatorTest();
//   console.log(gt.next());

// function foo(a) {
//     console.log('foo(a)', a);
// }

// function* gen(a,b) {
//     // foo(yield '1');
//     const res = yield(a + b);
//     yield 'step1';
//     yield 'step2';
//     return res;
//     // yield 'step1';
//     // yield 'step2';
// }
// const res = gen();
// console.log(res.next());
// console.log([...gen()]); // 取到值 数组
// console.log(Array.from(gen())); // 取到值 数组
// const [x] = gen(); // 解构赋值 数组[0]
// console.log(x);
// console.log(gen(1, 2).next());
// console.log(gen().throw(new Error('出错了')).next());
// console.log(Array.isArray([...gen()]));
// console.log([...gen()] instanceof Array);
// console.log([...gen()].__proto__ === Array.prototype);
// console.log(Object.prototype.toString.call([...gen()]));
// console.log(Array.prototype.isPrototypeOf([...gen()]));
// for (let item of gen()) {
//     console.log('item', item);
// }
// for (let item in gen()) {
//     console.log('item-in', item);
// }

// function* gen(a,b) {
//     // foo(yield '1');
//     let res = '';
//     yield '1';
//     try {
//         res = yield(a + b);
//         res = yield 'step1';
//         res = yield 'step2';
//     }
//     catch (e) {
//         console.log('catch', e)
//     }
//     yield 'finally';
//     return res;
// }
// const res = gen(1, 2);
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.return('9'));

// const throwRes = res.throw(new Error('出错了'));
// const throwRes = res.return('throwRes');
// const throwRes = res.next();
// const throwRes2 = res.next('2');



// const throwRes = res.next().next().throw(new Error('出错了'));
// console.log('throwRes', throwRes, throwRes2);

function* foo() {
    yield 2;
    yield 3;
    return "foo";
  }
  
  function* bar() {
    yield 1;
    var v = yield* foo();
    // var v = yield foo();
    console.log("v: " + v); 
    yield 4;
  }
  
  var it = bar();
  
  console.log(it.next()) // {value: 1, done: false}
  console.log(it.next()) // {value: 1, done: false}
  console.log(it.next()) // {value: 1, done: false}
  console.log(it.next()) // {value: 1, done: false}
  console.log(it.next()) // {value: 1, done: false}
//   it.next() // {value: 2, done: false}
//   it.next() // {value: 3, done: false}
//   it.next() // "v: foo" {value: 4, done: false}
//   it.next() // {value: undefined, done: true}
  
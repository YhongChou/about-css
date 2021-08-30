// 自定义Promise函数模块: IIFE

(function (window) {

    const PENDING = 'pending';

    const REJECTED = 'rejected';

    const RESOLVED = 'resolved';
    /*
    * Promise 构造函数
    * excutor: 执行器函数(同步执行), 也就是Promise传递过来的callback回调函数(resolve, reject) => {}这个整体
    */
    function Promise(excutor) {

        // 将当前promise对象保存起来
        const self = this;

        // promise对象执行的状态status,初始为pending
        self.status = PENDING;
        // promise对象存储数据的属性
        self.data = undefined;
        // status为成功/失败的回调,结构:{onResolved(){}, onReject(){}}
        self.callbacks = [];

        // 将状态改为resolved
        // 注意:
        // 因为resolve在外面是直接调用,所以resolve里面的this指向window
        // 所以需要把匿名函数中的this存储起来
        function resolve(value) {
            console.log('resolve');
            // 如果当前状态不是pending, 直接结束
            if (self.status !== PENDING) {
                return;
            }
            // 将状态改为resolved
            self.status = RESOLVED;
            // 存储数据
            self.data = value;
            // 如果有待执行的callback(promise状态改变的回调函数,因为状态改变的回调和状态改变的顺序不一定)函数
            // 立即异步执行回调函数onResolved
            if (self.callbacks.length > 0) {
                // 异步执行所有回调
                setTimeout(() => {
                    self.callbacks.forEach(callbackObj => {
                        callbackObj.onResolved(value)
                    })
                })
            }
        }

        function reject(reason) {
            console.log('reject');
            // 如果当前状态不是pending, 直接结束
            if (self.status !== PENDING) {
                return;
            }
            // 将状态改为reject
            self.status = REJECTED;
            // 存储数据
            self.data = reason;
            // 如果有待执行的callback(promise状态改变的回调函数,因为状态改变的回调和状态改变的顺序不一定)函数,立即异步执行回调函数
            if (self.callbacks.length > 0) {
                // 异步执行所有回调
                setTimeout(() => {
                    self.callbacks.forEach(callbackObj => {
                        callbackObj.onRejected(reason)
                    })
                })
            }
        }

        // 要捕获执行器里面的异常
        try {
            console.log('excutor');
            excutor(resolve, reject)
        } catch (e) {
            // 在throw Error时把promise的状态改为失败rejected
            reject(e)
        }
    }

    /*
    * Promise原型对象的then()
    * 指定promise内部执行结果 成功/失败 的回调
    * 返回一个新的promise对象
    * */
    Promise.prototype.then = function (onResolved, onRejected) {

        // 传递成功的value
        onResolved = typeof onResolved === 'function' ? onResolved : value => value

        // 传递失败的reason
        // 指定默认的失败的回调(实现错误/异常透传的关键点)
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        const self = this;

        // .then()返回一个新的promise对象
        return new Promise((resolve, reject) => {

            // 调用指定的回调函数,避免代码重复
            function handle(callback) {
                try {
                    const result = callback(self.data)
                    // 3 如果回调函数返回的是promise，return的promise结果就是返回的是promise的状态
                    if (result instanceof Promise) {
                        result.then(
                            value => resolve(value), // result的promise结果成功则return出去的也成功
                            reason => reject(reason) // result的promise结果失败则return出去的也失败
                        )

                        result.then(resolve, reject)
                    } else {
                        // 3 如果回调函数返回的是promise，return的promise结果就是返回的是promise的状态
                        resolve(result)
                    }
                } catch (e) {
                    // 1 如果执行抛出异常,return的promise状态是失败
                    reject(e)
                }
            }

            if (self.status === PENDING) {
                // 假设当前状态还是pending,将回调保存起来
                // 不仅要保存回调,这个回调也是会执行的的,只是异步执行
                // 所以保存到回调队列里的onResolved方法要能执行,从而改变当前promise的状态
                self.callbacks.push({
                    onResolved () {
                        handle(onResolved)
                    },
                    onRejected () {
                        handle(onRejected)
                    }
                })

            } else if (self.status === RESOLVED) {
                // onResolved执行情况:
                // 1 如果执行抛出异常,return的promise状态是失败
                // 2 如果回调函数返回不是promise,return的promise状态是成功
                // 3 如果回调函数返回的是promise，return的promise结果就是返回的是promise的状态

                // resolve() 用setTimeout因为是异步执行
                setTimeout(() => {
                    handle(onResolved)
                })
            } else {
                // reject()
                setTimeout(() => {
                    handle(onRejected)
                })
            }
        })
    }

    function fn() {

    }

    /*
    * Promise原型对象的catch()
    * 指定promise内部执行结果 失败 的回调
    * 返回一个新的promise对象
    * */
    Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
    }

    /*
    * Promise函数对象的resolve方法
    * 返回一个值是value的成功的promise
    *
    * */
    Promise.resolve = function (value) {
        // 返回一个成功/失败的promise
        return new Promise((resolve, reject) => {
            // value是promise
            if  (value instanceof Promise) {
                value.then(resolve, reject)
            // value不是promise
            } else {
                resolve(value)
            }
        })
    }

    /*
    * Promise函数对象的reject方法
    * 返回一个值是reason的失败的promise
    * */
    Promise.reject = function (reason) {
        // 返回一个失败的promise
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    /*
    * Promise函数对象的all方法
    * 返回一个promise,只有所有promise都成功时才成功
    * */
    Promise.all = function (promises) {

    }

    /*
    * Promise函数对象的race方法
    * 返回一个promise,其结果由第一个完成的promise决定
    * */
    Promise.race = function (promises) {

    }

    // 向外暴露Promise函数
    window.Promise = Promise
})(window)

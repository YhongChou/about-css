import React, { useReducer, useState } from 'react';

const App = () => {

    // const [count, setCount] = useState(1);

    // 1.1 传入值 或函数的返回值都行
    // const onClick = e => {
    //     setCount(count + 1);
            // 注意：取到此处的不是最新的state
    //     // console.log(count); // 0 1 2
    // }
    // const onClick = e => {
    //     setCount(() => {
    //         return count + 1
    //     });
    // }

    // 1.2 不能直接操作state
    // const onClick = e => {
    //     // setCount(count++) // 报错, 取的是state里原本的count
    //     // setCount(++count) // 报错
    // } 
    // 等价于
    // const onClick = e => {
    //     setCount(count = count + 1)
    // } 

    // // 1.3 可以修改为
    // const onClick = e => { 
    //     setCount((arg) => { // 没有直接修改state，而是返回一个count的复制
    //         arg++;
    //         return arg;
    //     })
    // } 

    // 2 触发重新渲染
    // state的类型是值，只要不相等就不会重新渲染
    // state的类型是对象，每次都会重新渲染
    // const onClick = e => {
    //     // setCount(0)  // 值如果不想等，就不会重新渲染
    //     // setCount(arg => arg) // 还是原来的值，不重新渲染
        
    // } 

    // 2 state 传入对象 
    const [count, setCount] = useState({type: 'add', value: 0});

    // return {} 每次都会更新
    // const onClick = e => {
    //     setCount(precount => {
    //         return {}
    //     })
    // };

    // return 原来的state 不会更新
    // const onClick = e => {
    //     setCount(precount => {
    //         return {}
    //     })
    // };

    // // 注意：此时最好用useRaducer
    const onClick = e => {
        setCount(precount => {
            if (precount.type === 'add') {
                return {
                    ...precount,
                    value: precount.value + 1
                }
            } 
            return precount;
        })
    };

    // // 3 传入对象时使用useRaducer去更新
    // const [count, countDispatch] = useReducer(countReducer, 0);

    // const countReducer = (state, action) => {
    //     switch(action.type) {
    //         case 'add':
    //             return state + 1;
    //         case 'minus':
    //             return state - 1;
    //         default:
    //             return state
    //     }
    // }

    // const onClick = e =>{
    //     countDispatch({type: 'add'})
    // }

    console.log(count.value); 

    return(
        <div>
            <div>{count.value}</div>
            <button onClick={onClick}>button +1</button>
        </div>
    )
}

export default App;
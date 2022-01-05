import React, { useEffect, useReducer, useState } from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    const onClick = e => {
        setCount(count + 1)
    }

    // // 1 依赖某个state 只有count更新时执行
    // 每次都清理 新开计时器
    // useEffect(() => {
    //     console.log('timer-1');
    //     let timer = setInterval(() => {
    //     console.log('timer-2');
    //         setCount(count + 1)
    //     }, 2000);
    //     console.log('useEffect');

    //     return () => {
    //         console.log('useEffect return');
    //         clearInterval(timer)
    //     }
    // }, [count])

    // // 2 依赖[] 谁也不依赖 只会在render之后执行一次，相当于componentDidMount
    // 会在第二次render前执行一次清理，用得是同2个定时器
    // useEffect(() => {
    //     console.log('timer-1');
    //     let timer = setInterval(() => {
    //         console.log('timer-2');
    //         setCount(count + 1)
    //     }, 2000);
    //     console.log('useEffect');

    //     return () => {
    //         console.log('useEffect return');
    //         clearInterval(timer)
    //     }
    // }, [])

    // 3 []依赖 + set为箭头函数
    // 每次不会清理，用得是同一个定时器，清理函数只有在卸载是执行
    // useEffect(() => {
    //     console.log('timer-1');
    //     let timer = setInterval(() => {
    //         console.log('timer-2');
    //         setCount(count => count + 1)
    //     }, 2000);
    //     console.log('useEffect');

    //     return () => {
    //         console.log('useEffect return');
    //         clearInterval(timer)
    //     }
    // }, [])

    console.log('APP render'); 

    return(
        <div>
            <div>{count}</div>
            <button onClick={onClick}>button +1</button>
        </div>
    )
}

export default App;
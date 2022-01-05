import React, { useEffect, useReducer, useState } from 'react';

// 自定义hook
// 关键点分离，确认effect的调用顺序，先调用useCount
const useCount = () => {
    const [count, setCount] = useState(0);

    // 只用来处理title这块的effect
    useEffect(() => {
        console.log('useCount useEffect');
        // 没有触发重新render
        document.title = `nihao + ${count}`
    })

    console.log('useCount render');

    return [count, setCount];

}

const App = () => {

    // 1 可以使用多个useEffect，但执行顺序不保证
    // const [count, setCount] = useState(0);
    // const onClick = e => {
    //     setCount(count + 1)
    // }
    // useEffect(() => {
    //     console.log('useEffect 1');
    //     document.title = `nihao + ${count}`
    // })
    // useEffect(() => {
    //     console.log('useEffect 2');
    // })

    // 2 多个useEffect可以使用自定义hook
    const [count, setCount] = useCount();

    const onClick = e => {
        setCount(count + 1)
    }

    useEffect(() => {
        // 如果在这里setState，那么会造成循环render
        // setCount(count => count + 1)
        console.log('APP useEffect');
        return () => {
            console.log('APP useEffect return');
        }
    })

    console.log('APP render'); 

    return(
        <div>
            <div>{count}</div>
            <button onClick={onClick}>button +1</button>
        </div>
    )
}

export default App;
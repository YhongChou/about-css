import { useEffect, useState } from "react"

function App (){
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
        setVisible(!visible);
    }

    // 1 useEffect 做副作用 在真实DOM构建后执行函数中的内容
    // 引起副作用的操作：修改DOM 修改全局变量 ajax请求 计时器
    // 可以理解为componentDidMount + componentDidUpdate结合
    // 会在组件初次render之后以及组件更新完成之后执行  
    // useEffect(() => {
    //     document.title = `nihao + ${count}`
    // })

    // 2 在useEffect中拿到的state，是最新的state
    // 每次更新都会执行
    // useEffect(() => {
    //     console.log(count);
    // })

    // 3.1 清理函数
    // 第二次render时，就先执行清理函数 
    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         setCount(count + 1)
    //     }, 2000);
    //     console.log('useEffect');
    //     return () => {
    //         console.log('useEffect return');
    //         clearInterval(timer);
    //     }
    // })

    // 3.2 清理时机
    // return后面跟的不是一个空函数就会在每次渲染前执行
    // useEffect(() => {
    //     console.log('useEffect');
    //     return () => {
    //         // 1 清理
    //         console.log('useEffect return');
    //         // return {};
    //         // return null;
    //         // return undefined;
    //         // return;
    //         // 2 不清理:啥可执行的语句都没有
    //     }
    // })

    console.log('render');

    const [visible, setVisible] = useState(true);

    return(
        <div>
            {
                visible && <Foo />
            }
            <div>{count}</div>
            <button onClick={onClick}>button +1</button>
        </div>
    )
}

const Foo = () => {

    useEffect(() => {
        console.log('Foo useEffect');
        // 4 组件卸载时直接执行清理函数,不执行前面的内容
        return () => {
            console.log('Foo useEffect return');
        }
    })

    console.log('Foo render');

    return (
        <div>
            foo
        </div>
    )
}

export default App;
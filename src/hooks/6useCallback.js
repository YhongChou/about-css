import { memo, useCallback, useState } from "react";

const Foo = memo(props => {
    return(
        <ul>
            {/* 函数需要执行 */}
            {props.funRender()}
        </ul>
    )
})

const App = () => {

    const [range, setRange] = useState({min: 10, max: 1000});
    const [count, setCount] = useState(0);

    // funRender方法是一个对象，每次都render的时候都会重新定义和执行，所以都是不同的引用
    // 1 使用useCallback 结合memo 包裹函数，并且加依赖
    // 返回的是一个函数，保证在子组件的都是函数的同一个引用，需要在子组件执行
    const funRender = useCallback(args => {
        let list = [];
        for(let i = 0; i < range.max; i++) {
            list.push(<li key={i}>{i}</li>)
        }
        return list
        // 依赖项：哪个值变时重新执行
    }, [range])

    return(
        <div>
            <Foo funRender={funRender}/>
        </div>
    )
}

export default App
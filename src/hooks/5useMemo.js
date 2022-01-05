import { memo, useMemo, useState } from "react";

// 1 memo优化组件，不希望重新刷新时用
// 当值类型的props没有变时，不重新渲染
// 但当props是对象、函数时，会变化
// const Foo = memo(props => {
//     console.log('foo render', props)
//     return(
//         <ul>
//             {props.range}
//         </ul>
//     )
// })

// 2 useMemo + momo配合使用
const Foo = memo(props => {
    console.log('foo render', props)
    return(
        <ul>
            {/* funRender已经是函数值行的值 */}
            {props.funRender}
        </ul>
    )
})

const App = () => {

    const [range, setRange] = useState({min: 10, max: 1000});
    const [count, setCount] = useState(0);

    // // funRender方法是一个对象，每次都render的时候都会重新定义和执行，所以都是不同的引用
    // const funRender = args => {
    //     let list = [];
    //     for(let i = 0; i < range.max; i++) {
    //         list.push(<li key={i}>{i}</li>)
    //     }
    //     return list
    // }

    // useMemo固定值
    // 包裹的东西只用来渲染
    // useMemo返回的是里面的函数执行完的结果，只执行一次
    // 需要配合momo使用
    const funRender = useMemo(args => {
        console.log('funRender')
        let list = [];
        for(let i = 0; i < range.max; i++) {
            list.push(<li key={i}>{i}</li>)
        }
        return list
        // 依赖项：哪个值变时重新执行
    }, [range]) 
    return(
        <div>
            {/* <Foo range={1} /> */}
            <button onClick={e => setCount(count + 1)}>增加</button>
            <Foo funRender={funRender}/>
        </div>
    )
}

export default App
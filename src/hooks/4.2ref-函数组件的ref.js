import { createContext, createRef, forwardRef, useRef } from "react";

function App() {
    const fooRef = useRef();

    const onClick = e => {
        fooRef.current.focus(); // 取到的挂载ref的Dom节点
    }

    // 2 在父组件中访问函数子组件的ref
    return(
        <div>
            <button onClick={onClick}>父组件</button>
            <Foo ref={fooRef}/>
        </div>
    )
}

// function Foo() {

//     // 1声明ref 两种api都可以
//     // const fooRef = useRef();
//     const fooRef = createRef()

//     const onClick = e => {
//         fooRef.current.focus();
//     }

//     return(
//         <div>
//             <input type="text" ref={fooRef}/>
//             <button onClick={onClick}>聚焦-子组件</button>
//         </div>
//     )
// }

// 2 在父组件中访问函数子组件的ref
const Foo = forwardRef((props, fooRef) => {

    const onClick = e => {
        fooRef.current.focus(); // 取到的是Dom节点
    }

    return(
        <div>
            <input type="text" ref={fooRef}/>
            <button onClick={onClick}>聚焦-子组件</button>
        </div>
    )
})

// // 下面这个写法不行，会导致在父组件中获取不到Foo
// forwardRef(function Foo(props, fooRef) {

//     const onClick = e => {
//         fooRef.current.focus(); // 取到的是Dom节点
//     }

//     return(
//         <div>
//             <input type="text" ref={fooRef}/>
//             <button onClick={onClick}>聚焦-子组件</button>
//         </div>
//     )
// })

export default App;
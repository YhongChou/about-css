import { Component, createRef } from "react";

class Foo extends Component{

    inputRef = createRef();

    onClick = e => {
        this.inputRef.current.focus();
    }

    render(){
        return(
            <div>
                <input ref={this.inputRef}/>
                <button onClick={this.onClick}>聚焦-子组件</button>
            </div>
        )
    }
}

class App extends Component {

    // // 1 字符串回调型 
    // handleInput = e => {
    //     this.inputE = e;
    // }
    // onClick = e => {
    //     this.inputE.focus();
    // }

    // 2 createRef 不一定放在文中的哪一块，声明了就行
    // inputRef = createRef();

    // 3 子组件是类组件，获取子组件的实例
    // 注意：此时父组件是函数、类组件都行
    // const fooRef = createRef();

    // const onClick = e => {
    //     fooRef.current.onClick();
    // }

    onClick = e => {
        this.fooRef.current.onClick();
    }

    fooRef = createRef();

    render(){
        return(
            <div>
                {/* 1 字符串回调型  */}
                {/* <input ref={this.handleInput}/> */}
                {/* 2  createRef*/}
                {/* <input ref={this.inputRef}/> */}
                {/* 3 子组件是类组件，获取子组件的实例 */}
                <Foo ref={this.fooRef}/>
                <button onClick={this.onClick}>聚焦-父组件</button>
            </div>
        )
    }

}

export default App;
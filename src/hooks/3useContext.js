import React, { Component, createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

// 在函数组件中 useContext
const Foo = () => {
    const value = useContext(AppContext);
    return (
        <div>
            {value}
        </div>
    )
}

// 类组件 AppContext.Consumer
class Bar extends Component {
    render() {
        const value = AppContext;
        return (
            <AppContext.Consumer>
                {
                    value => 
                        <div>
                            {value}
                        </div>
                }
    
            </AppContext.Consumer>
    
        )
    }
}


const App = () => {
    console.log('APP render'); 

    // 在父组件挂载 AppContext.Provider
    return(
        <AppContext.Provider value={'父组件'}>
            <div>
                <Foo />
                <Bar />
            </div>
        </AppContext.Provider>

    )
}

export default App;
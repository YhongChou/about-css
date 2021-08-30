// import React, {PureComponent} from 'react';
// import MyCounter from './Counter';
import React, {lazy, PureComponent, Suspense} from 'react';
import './style.styl';

const MyCounter = lazy(
    () => import(
        /* webpackChunkName: "MyCounter" */ './Counter'
    ).then(
        MyCounter => {
            console.log('MyCounter', MyCounter);
            return MyCounter
        },
        MyCounter => {
            console.log('MyCounter', MyCounter);
        },
    ).catch(
        error => console.log('MyCounter e', error)
    )
);

export default class LazyComponent extends PureComponent {

    state = {
        isShowCounter: false,
        hasError: false
    }

    // getDerivedStateFromError\componentDidCatch中对hasError的操作执行一个
    static getDerivedStateFromError(e) {
        console.log('getDerivedStateFromError-1', e);
        return {
            hasError: true
        }
    }

    componentDidCatch(e) {
        console.log('componentDidCatch-2', e);
        // 定义setState
        // this.setState({
        //     hasError: true
        // })
    }

    handleCounterVisible = () => this.setState({isShowCounter: !this.state.isShowCounter})

    render() {
        const {isShowCounter} = this.state;
        const content = isShowCounter ? '隐藏' : '显示';
        console.log('hasError', this.state.hasError);
        if (this.state.hasError) {
            return <div>error</div>
        }

        return (
            <div className="main">
                <button onClick={this.handleCounterVisible}>{content}</button>
                {
                    isShowCounter &&
                    <Suspense fallback={<div>Loading</div>}>
                        <MyCounter />
                    </Suspense>
                }
            </div>
        )
    }
}

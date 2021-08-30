import React, {PureComponent} from 'react';
import './style.css';

export default class Counter extends PureComponent {

    state = {
        value: 100,
    }

    handlePlus = e => {
        const {value} = this.state;
        this.setState({
            value: value + 1
        })
    }

    handleMinus = e => {
        const {value} = this.state;
        this.setState({
            value: value - 1
        })
    }

    render() {
        const {value} = this.state;
        let list = [];
        for (let i = 0, length = value; i < length; i++){
            list.push(<li key={i}>{i}</li>)
        }
        if (this.state.value === 99) {
            throw new Error('component error');
        }
        const displayList = [];
        for (let i = 0, length = 1000; i < length; i++){
            displayList.push(
                <ul key={length+i}>{list}</ul>
            );
        }

        return (
            <>
                <div className="counter-wrapper">
                    <span>{value}</span>
                    <button onClick={this.handlePlus}>+1</button>
                    <button onClick={this.handleMinus}>-1</button>
                    <div className="suspense-wrapper">
                        {displayList}

                    </div>

                </div>
            </>
        )
    }
}

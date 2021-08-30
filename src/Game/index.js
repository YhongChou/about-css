import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
	// 定义子类的构造函数，需以super(props)开始
	constructor(props){
		super(props);
		this.state={
			value:null,
		};
	};

	render() {
		return (
			// <button className="square" onClick={function(){alert('click');}}>
			<button
				className="square"
				onClick={()=>this.setState({value:'X'})}
			>
				{/* {this.props.value} */}
				{this.state.value}
			</button>
		);
	}
}

// eslint-disable-next-line no-lone-blocks
{/* 渲染9个方块，每一个{}代表一个方块 */}
class Board extends React.Component {
	//    将每个棋盘封装为一个模块叫做
	renderSquare(i) {
	//   return <Square />;
		return <Square value={i}/>;
	}

	render() {
		console.log('Board');
		const status = 'Next player: X';

		return (
		<div>
			<div className="status">{status}</div>
			<div className="board-row">
			{this.renderSquare(0)}
			{this.renderSquare(1)}
			{this.renderSquare(2)}
			</div>
			<div className="board-row">
			{this.renderSquare(3)}
			{this.renderSquare(4)}
			{this.renderSquare(5)}
			</div>
			<div className="board-row">
			{this.renderSquare(6)}
			{this.renderSquare(7)}
			{this.renderSquare(8)}
			</div>
		</div>
		);
	}
}


// 渲染带默认值的棋盘
class Game extends React.Component {

	constructor () {
		super();
		// console.log('constructor');
		this.state = {
			name: 'test'
		}
	};

	// testThis = () => {
	// 	console.log('this', this);
	// }

	testThis() {
		console.log('this', this);
	}

	boardRef = React.createRef();

	render() {
		const {name} = this.state;
		this.testThis();
		console.log('game');
		return (
			<div className="game">
				<div>
					{name}
				</div>
			<div className="game-board">
				<Board
					ref={this.boardRef}
				/>
			</div>
			<div className="game-info">
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</div>
			</div>
		);
	}
}

export default Game;

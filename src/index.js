import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
// import Counter from './Counter';
// import LazyComponent from './Suspense';

ReactDOM.render(
    <Game />,
    // <Counter />,
    // <Suspense fallback={
    //     <div>Counter import loading</div>
    // }
    // >
    //     <MyCounter />
    // </Suspense>,
    // <LazyComponent />,
    document.getElementById('root')
);

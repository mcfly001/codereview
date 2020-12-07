import React from 'react';

const ReducerType = props => {
    const { dispatch } = props;

    return (
        <div>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </div>
    );
};

export default ReducerType;
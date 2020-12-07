import React, { useReducer } from 'react';
import ReducerType from './ReducerType.js';

function init(initialCount) {
    return {count: initialCount};
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('当前类型不存在');
    }
}

const HookUseReducer = ({initialState}) => {
    // 第一种方式初始化
    // const [state, dispatch] = useReducer(reducer, { count: 1 });

    // 第二种方式初始化
    const [state, dispatch] = useReducer(reducer, initialState, init);

    return (
        <div>
            <div>Count: {state.count}</div>
            <ReducerType dispatch={dispatch} />
        </div>
    );
};

export default HookUseReducer;
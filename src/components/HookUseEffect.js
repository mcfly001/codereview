import React, { useState, useEffect } from 'react';

const HookUseEffect = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState({ name: '', age: 10 });

    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        document.title = `You clicked ${count2.name} times`;
    }, [count2]);

    return (
        <div>
            <p>
                You clicked {count} { count2.name } times
            </p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCount2(Object.assign({}, count2, { age: count2.name + 1}))}>Click me</button>
        </div>
    );
};

export default HookUseEffect;
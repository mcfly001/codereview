import React, { useState, useEffect, useDebugValue } from 'react';

const HookUseDebugValue = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        useDebugValue(count, count => console.log(count))

        console.log(1222)
    })

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>新增</button>
        </div>
    );
};

export default HookUseDebugValue;
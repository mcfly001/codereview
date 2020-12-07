import React, { useState, useRef, useEffect } from 'react';

const NoFirstRender = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        if (intervalRef.current) {
            console.log('update')
        }

        return () => {
            intervalRef.current = true;
        }
    })

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>新增</button>
        </div>
    );
};

export default NoFirstRender;
/*
 * @Descripttion: 
 * @Author: 豆豉
 * @Date: 2020-12-07 21:15:46
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-12-07 21:17:36
 */
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
console.log(55)
export default NoFirstRender;
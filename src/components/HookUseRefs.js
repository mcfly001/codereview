/*
 * @Descripttion: 
 * @Author: 豆豉
 * @Date: 2020-01-23 21:28:03
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-11-26 23:13:54
 */
import React, { useRef, useState, useEffect } from 'react';

const HookUseRefs = () => {
    const [count, setCount] = useState(0)
    const inputEl = useRef(null);
    const refCount = useRef();

    useEffect(() => {
      console.log(77)
      refCount.current = count
    })

    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();

        setCount(count + 1)
    };
    
    return (
        <div>
            <div>
                <span>当前值：{count}</span>
                <span>prev值：{refCount.current}</span>
            </div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}> Focus the input </button>
        </div>
    );
};

export default HookUseRefs;

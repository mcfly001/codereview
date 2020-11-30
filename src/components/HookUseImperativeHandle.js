import React, { useState, useImperativeHandle, forwardRef } from 'react';

const HookUseImperativeHandle = (props, parentRef) => {
    const [refValue, setRefValue] = useState(12);

    useImperativeHandle(parentRef, () => ({
        // 父组件可以调用这个方法
        onParentFunction: () => {
            // 这里可以返回任何值，
            return refValue;
        },
        alias: () => {
            console.log(333)
        }
    }));

    const handleChange = () => {
        setRefValue(refValue + 1)
    }

    return (
        <div>
           {refValue}
           <button type="button" onClick={handleChange}>修改ref的值</button>
        </div>
    );
};

export default forwardRef(HookUseImperativeHandle);
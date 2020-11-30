import { useState, useEffect } from 'react';

/**
 * 当修改nodeNum的值的时候这部分会被重新调用执行
 * @param {*} nodeNum 
 */
const useGetTree = nodeNum => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(nodeNum, 444)
        setCount(nodeNum)
    }, [nodeNum])

    return count;
};

export default useGetTree;
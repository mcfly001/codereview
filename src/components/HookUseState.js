import React, { useState } from 'react';

const HookUseState = props => {
    const [count, setCount] = useState(0);
    const { value } = props;

    return (
        <div>
            {value}
            <button onClick={() => setCount(count + 1)}>新增</button>
        </div>
    );
};

export default HookUseState;
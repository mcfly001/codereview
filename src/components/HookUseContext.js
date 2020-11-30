import React, { useContext } from 'react';
import { ThemeContext } from '../enum/index.js';

const HookUseContext = props => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <button style={{ background: theme.background, color: theme.foreground }} onClick={props.onChange}>context 主题</button>
        </div>
    );
};

export default HookUseContext;
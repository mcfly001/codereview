/*
 * @Descripttion: 
 * @Author: 豆豉
 * @Date: 2020-12-24 10:19:47
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-12-24 10:28:15
 */
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
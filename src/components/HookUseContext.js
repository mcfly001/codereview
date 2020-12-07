/*
 * @Descripttion: 
 * @Author: 豆豉
 * @Date: 2020-12-07 21:15:46
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-12-07 21:17:08
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

const a = 1

export default HookUseContext;
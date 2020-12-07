/*
 * @Descripttion: 
 * @Author: 豆豉
 * @Date: 2019-09-14 11:30:39
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-11-26 23:07:12
 */
import React, { useState, useRef } from 'react';
import HookUseState from './components/HookUseState.js';
import HookUseEffect from './components/HookUseEffect.js';
import HookUseContext from './components/HookUseContext.js';
import HookUseReducer from './components/HookUseReducer.js';
import HookUseRefs from './components/HookUseRefs.js';
import HookUseImperativeHandle from './components/HookUseImperativeHandle.js';
import NoFirstRender from './components/NoFirstRender.js';
import useGetTree from './customHook/useGetTree.js';
import { ThemeContext, themes } from './enum/index.js';
import './App.css';

function App() {
    // const [value, setValue] = useState(12);
    // const [themeColor, setThemeColor] = useState('dark');
    // const nodeNum = useGetTree(value);
    // const childRef = useRef();

    // // 修改state
    // const handleChangeValue = () => {
    //     setValue(value + 1);
    // };

    // // 修改主题
    // const handleChangeTheme = () => {
    //     const themeValue = themeColor === 'dark' ? 'light' : 'dark';
    //     setThemeColor(themeValue);
    // };

    // // 获取子组件refValue
    // const handleGetRefValue = () => {
    //     const value = childRef.current.onParentFunction();

    //     childRef.current.alias();
    //     console.log(value)
    // }

    return (
        <div className="App">
            
            {/* <div>
                <div>useState</div>
                <HookUseState value={value} />
                <button onClick={handleChangeValue}>
                    修改state{nodeNum}
                </button>
            </div> */}

            {/* <div>
                <div>useEffect</div>
                <HookUseEffect />
            </div> */}
{/* 
            <div>
                <div>useContext</div>
                <ThemeContext.Provider value={themes[themeColor]}>
                    <HookUseContext onChange={handleChangeTheme} />
                </ThemeContext.Provider>
            </div> */}

            {/* <div>
                <div>useReducer</div>
                <HookUseReducer initialState={1} />
            </div> */}

            <div>
                <div>useRefs</div>
                <HookUseRefs />
            </div>

            {/* <div>
                <div>useImperativeHandle</div>
                <div>useImperativeHandle可以让你通过父组件调用子组件的方法或者state，一般情况下不推荐用这种方式。</div>
                <HookUseImperativeHandle ref={childRef} />
                <button type="button" onClick={handleGetRefValue}>通过ref的方法获取子组件的refValue</button>
            </div> */}

            <NoFirstRender />
        </div>
    );
}

export default App;
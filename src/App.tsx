import React, {ChangeEvent, useEffect, useState} from 'react';
import InputAllStyle from '../src/components/input/InputAll.module.css'
import style from './App.module.css'

import {InputAll} from "./components/input/InputAll";
import {ButtonAll} from "./components/button/ButtonAll";
import {CounterSettings, CounterSettingsType} from "./components/counetSettings/CounterSettings";

function App() {
    const [count, setCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(0);
    const [minCount, setMinCount] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [editValueMode, setEditValueMode] = useState(false)
    const Increment = () => {
        return (
            setCount(count + 1)
        )
    };
    const ResetCount = (value: number) => {
        setCount(minCount)
    }

    const setCounterSettingsHandler = (value: CounterSettingsType) => {
        setCount(value.start)
        setMinCount(value.start)
        setMaxCount(value.max)
        setEditMode(!editMode)
    }
    const setEditModeHandler = () => {
        setEditMode(true)
    }
    const setEditValueModeHandler = () => {
        setEditValueMode(true)
    }
    const notSetEditValueModeHandler = () => {
        setEditValueMode(false)
    }
    const isResetDisabled = count === 0 || editMode
    const incDisabled = count === maxCount || editMode
    const className = count === maxCount || !count
        ? style.redCounter
        : style.whiteCounter
    return (
        <div className={style.app}>
            <header className={style.appHeader}>
                <CounterSettings
                    setEditMode={setEditModeHandler}
                    onChange={setCounterSettingsHandler}
                    editMode={editMode}
                    setEditValueMode={setEditValueModeHandler}
                    editValueMode={editValueMode}
                    notSetEditValueModeHandler={notSetEditValueModeHandler}
                />
                <div className={style.monitor}>
                    <div className={style.counter}>
                        <div className={className}
                        >{editValueMode ? count ? count : 'коунт фолс '  : count}</div>
                    </div>
                    <div className={style.buttonsCount}>
                        <ButtonAll
                            disabled={incDisabled}
                            maxCount={maxCount}
                            count={count}
                            onClick={Increment}
                            title={'inc'}
                        />
                        <ButtonAll
                            disabled={isResetDisabled}
                            count={count}
                            onClick={ResetCount}
                            title={'reset'}
                        />
                    </div>
                    {/*<div className={style.buttonsCount}>*/}
                    {/*    <button onClick={setToLocalStorageHandler}>setToLocalStorageHandler</button>*/}
                    {/*</div>*/}
                </div>
            </header>
        </div>
    );
}

export default App;

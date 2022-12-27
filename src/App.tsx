import React, {ChangeEvent, useEffect, useState} from 'react';
import InputAllStyle from '../src/components/input/InputAll.module.css'
import style from './App.module.css'

import {InputAll} from "./components/input/InputAll";
import {ButtonAll} from "./components/button/ButtonAll";
import {CounterSettings, CounterSettingsType} from "./components/counetSettings/CounterSettings";

function App() {
    const [count, setCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(0);
    const [editMode, setEditMode] = useState(false)
    const Increment = () => {
        return (
            setCount(count + 1)
        )
    };
    const ResetCount = () => {
        setCount(0)
    }


    // useEffect(() => {
    //     setToLocalStorageHandler()
    // }, [count])
    //
    // useEffect(() => {
    //     getFromLocalStorageHandler()
    // }, [])
    //
    // const setToLocalStorageHandler = () => {
    //     sessionStorage.setItem('counterValue', JSON.stringify(count))
    // }
    // const getFromLocalStorageHandler = () => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setCount(newValue)
    //     }
    // }

    const maxValueCounter = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        setMaxCount(maxValue)
    }
    const startValueCounter = (e: ChangeEvent<HTMLInputElement>) => {
        const startCounter = +e.currentTarget.value
        setCount(startCounter)
    }
    const setCounterSettingsHandler = (value:CounterSettingsType) => {
        setCount(value.start)
        setMaxCount(value.max)
        setEditMode(!editMode)
    }
    const setEditModeHandler = () => {
        setEditMode(true)
    }
    const isResetDisabled = count === 0 || editMode
    const incDisabled = count === maxCount || editMode
    return (
        <div className={style.app}>
            <header className={style.appHeader}>
                <CounterSettings
                    setEditMode={setEditModeHandler}
                    onChange={setCounterSettingsHandler}
                    editMode={editMode}
                />
                <div className={style.monitor}>
                    <div className={style.counter}>
                        <div className={`${count === maxCount ? style.redCounter : style.whiteCounter}`}>{count}</div>
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

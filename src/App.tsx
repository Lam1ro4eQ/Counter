import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './App.module.css'
import {ButtonAll} from "./components/button/ButtonAll";
import {CounterSettings, CounterSettingsType} from "./components/counetSettings/CounterSettings";

function App() {
    const [count, setCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(0);
    const [minCount, setMinCount] = useState(0)
    const [editMode, setEditMode] = useState(false)

    useEffect(()=> {
        getFromLocalMinCountHandler()
    },[])

    useEffect(()=>{
        setToLocalStorageMinCountHandler()
    },[minCount,maxCount])

    const setToLocalStorageMinCountHandler = () => {
        localStorage.setItem('counterValueMin', JSON.stringify(minCount))
        localStorage.setItem('counterValueMax', JSON.stringify(maxCount))
    }

    const getFromLocalMinCountHandler = () => {
        let valueAsStringMin = localStorage.getItem('counterValueMin')
        let valueAsStringMax = localStorage.getItem('counterValueMax')
        if (valueAsStringMin) {
            let newValueMin = JSON.parse(valueAsStringMin)
            setMinCount(newValueMin)
        }
        if (valueAsStringMax) {
            let newValueMax = JSON.parse(valueAsStringMax)
            setMaxCount(newValueMax)
        }
    }
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

    const isResetDisabled = count === 0 || editMode
    const incDisabled = count === maxCount || editMode

    const classNameColor = () => {
        if (minCount < 0 || maxCount < 0 || minCount >= maxCount || count === maxCount) {
            return style.redCounter
        } else {
            return style.whiteCounter
        }
    }
    const showScreenText = () => {

        if (minCount < 0 || maxCount < 0) {
            return 'enter a value greater than 0'
        }
        if (minCount >= maxCount) {
            return 'please enter correct value'
        }
        if (editMode) {
            return 'press set'
        } else {
            return count
        }

    }

    return (
        <div className={style.app}>
            <header className={style.appHeader}>
                <CounterSettings
                    setEditMode={setEditModeHandler}
                    inputMaxCount={maxCount}
                    setInputMaxCount={setMaxCount}
                    onChange={setCounterSettingsHandler}
                    editMode={editMode}
                    inputStartCount={minCount}
                    setInputStartCount={setMinCount}

                />
                <div className={style.monitor}>
                    <div className={style.counter}>
                        <div className={classNameColor()}
                        >{showScreenText()}</div>

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
// editValueMode ==='введи число, нажмите set' ? editValueMode : count
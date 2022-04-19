import React, {useEffect, useState} from 'react';

import style from './App.module.css'
import {ButtonInc} from "./ButtonInc";
import {ButtonReset} from "./ButtonReset";

function App() {
    const [count, setCount] = useState<number>(0);
    const maxCount = 5;
    let Increment = () => {
        return (
            setCount(count + 1)
        )
    };
    let ResetCount = () => {
        setCount(0)
    }

    useEffect( () => {
        setToLocalStorageHandler()
    },[count])

    useEffect( () => {
        getFromLocalStorageHandler()
    },[])

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }
    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }


    return (
        <div className={style.app}>
            <header className={style.appHeader}>
                <div className={style.monitor}>
                    <div className={style.counter}>
                        <div className={`${count === maxCount ? style.redCounter : style.whiteCounter}`}>{count}</div>
                    </div>
                    <div className={style.buttonsCount}>
                        <ButtonInc
                            maxCount={maxCount}
                            count={count}
                            Increment={Increment}
                        />
                        <ButtonReset
                            count={count}
                            ResetCount={ResetCount}
                        />
                    </div>
                    <div className={style.buttonsCount}>
                        <button onClick={setToLocalStorageHandler}>setToLocalStorageHandler</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;

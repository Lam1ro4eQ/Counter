import React, {useState} from 'react';
import style from './App.module.css'


type PropsType = {
    count: number
    ResetCount: () => void
}

export function ButtonReset(props:PropsType) {
    return (
        <button className={style.buttonCount} disabled={props.count == 0} onClick={props.ResetCount}>reset</button>
    )
}
import React, {useState} from 'react';
import style from "./App.module.css";


type PropsType = {
    count: number
    maxCount: number
    Increment: () => void
}

export function ButtonInc(props:PropsType) {
    return (
        <button className={style.buttonCount} disabled={props.count == props.maxCount} onClick={props.Increment}>inc</button>
    )
}
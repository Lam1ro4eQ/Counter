import React, {ChangeEvent, useState} from 'react';
import style from '../../App.module.css'


type PropsType = {
    count?: number
    maxCount?: number
    title: string
    onClick?: (any:any) => void
    disabled?: boolean
}


export function ButtonAll(props: PropsType) {

    return (
        <button className={style.buttonCount}
                disabled={props.disabled}
                onClick={props.onClick}
        >{props.title}</button>
    )
}
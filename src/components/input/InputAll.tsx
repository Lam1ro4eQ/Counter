import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
    type?: string
    onChange: (value:number) => void
    value: number
}


export function InputAll(props: PropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)
    }
    return (
        <input
            type={props.type}
            onChange={onChangeHandler}
            className={props.className}
            value={props.value}
        />
    )
}
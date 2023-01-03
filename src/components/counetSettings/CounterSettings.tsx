import React, {ChangeEvent, useState} from 'react';
import style from '../../components/counetSettings/CounterSettings.module.css'
import InputAllStyle from "../input/InputAll.module.css";
import {ButtonAll} from "../button/ButtonAll";
import {InputAll} from "../input/InputAll";


type PropsType = {
    setEditMode: () => void
    onChange: (value: CounterSettingsType) => void
    editMode: boolean
    ResetCount?: (value:number)=> void
    inputMaxCount: number
    setInputMaxCount : (maxCount : number) => void
    inputStartCount: number
    setInputStartCount : (minCount : number) => void
}

export type CounterSettingsType = {
    max: number
    start: number
}

export function CounterSettings(props: PropsType) {
    const onClickHandler = () => {
        const payload: CounterSettingsType = {
            max: props.inputMaxCount,
            start: props.inputStartCount,
        }
        // payload.start && props.ResetCount(payload.start)
        props.onChange(payload)

    }
    const onChangeMaxValueHandler = (value: number) => {
        props.setInputMaxCount(value)
        !props.editMode && props.setEditMode()
    }
    const onChangeValueHandler = (value: number) => {
        props.setInputStartCount(value)
        !props.editMode && props.setEditMode()
    }

    return (<div className={style.monitor}>
            <div className={style.counter}>
                <div>
                    <h3>max value:</h3>
                    <InputAll
                        value={props.inputMaxCount}
                        type={'number'}
                        className={props.inputMaxCount < 0 || props.inputMaxCount < props.inputStartCount ? InputAllStyle.errorInput : InputAllStyle.inputStyle}
                        onChange={onChangeMaxValueHandler}
                    />
                </div>
                <div>
                    <h3>start value:</h3>
                    <InputAll
                        value={props.inputStartCount}
                        type={'number'}
                        className={props.inputStartCount < 0 || props.inputMaxCount < props.inputStartCount ? InputAllStyle.errorInput : InputAllStyle.inputStyle}
                        onChange={onChangeValueHandler}
                    />
                </div>
            </div>
            <div className={style.ButtonDiv}>
                <ButtonAll
                    disabled={!props.editMode}
                    onClick={onClickHandler}
                    title={'set'}
                />
            </div>
        </div>
    )
}
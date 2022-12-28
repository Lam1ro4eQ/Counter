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
    setEditValueMode: () => void
    editValueMode: boolean
    notSetEditValueModeHandler: () => void
}

export type CounterSettingsType = {
    max: number
    start: number
}

export function CounterSettings(props: PropsType) {

    const [inputCount, setInputCount] = useState<number>(5);
    const [inputMaxCount, setInputMaxCount] = useState<number>(0);
    const onClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const payload: CounterSettingsType = {
            max: inputMaxCount,
            start: inputCount,
        }
        // payload.start && props.ResetCount(payload.start)
        props.onChange(payload)
        props.setEditValueMode()
    }
    const onChangeMaxValueHandler = (value: number) => {
        setInputMaxCount(value)
        !props.editMode && props.setEditMode()
        props.editValueMode && props.notSetEditValueModeHandler()
    }
    const onChangeValueHandler = (value: number) => {
        setInputCount(value)
        !props.editMode && props.setEditMode()
        props.editValueMode && props.notSetEditValueModeHandler()
    }


    return (<div className={style.monitor}>
            <div className={style.counter}>
                <div>
                    <h3>max value:</h3>
                    <InputAll
                        value={inputMaxCount}
                        type={'number'}
                        className={inputMaxCount <= 0 || inputMaxCount <= inputCount ? InputAllStyle.errorInput : InputAllStyle.inputStyle}
                        onChange={onChangeMaxValueHandler}
                    />
                </div>
                <div>
                    <h3>start value:</h3>
                    <InputAll
                        value={inputCount}
                        type={'number'}
                        className={inputCount <= 0 ? InputAllStyle.errorInput : InputAllStyle.inputStyle}
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
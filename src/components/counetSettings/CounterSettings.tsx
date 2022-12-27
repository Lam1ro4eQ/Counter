import React, {ChangeEvent, useState} from 'react';
import style from '../../App.module.css'
import InputAllStyle from "../input/InputAll.module.css";
import {ButtonAll} from "../button/ButtonAll";
import {InputAll} from "../input/InputAll";


type PropsType = {
    setEditMode: () => void
    onChange: (value: CounterSettingsType) => void
    editMode: boolean
}

export type CounterSettingsType = {
    max:number
    start:number
}

export function CounterSettings(props: PropsType) {
    // const maxValueCounter = (e: ChangeEvent<HTMLInputElement>) => {
    //     let maxValue = +e.currentTarget.value
    //     props.maxValueCounter(maxValue)
    // }

    const [inputCount, setInputCount] = useState<number>(5);
    const [inputMaxCount, setInputMaxCount] = useState<number>(0);
    const onClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const payload:CounterSettingsType = {
            max: inputMaxCount,
            start: inputCount,
        }
        props.onChange(payload)
    }
    const onChangeMaxValueHandler = (value:number) => {
        setInputMaxCount(value)
        !props.editMode && props.setEditMode()
    }
    const onChangeValueHandler = (value:number) => {
        setInputCount(value)
        !props.editMode && props.setEditMode()
    }


    return (<div className={style.monitor}>
            <div>
                <h3>max value:</h3>
                <InputAll
                    value={inputMaxCount}
                    type={'number'}
                    className={inputMaxCount <= 0 || inputMaxCount <= inputCount ? InputAllStyle.errorInput : ''}
                    onChange={onChangeMaxValueHandler}
                />
            </div>
            <div>
                <h3>start value:</h3>
                <InputAll
                    value={inputCount}
                    type={'number'}
                    className={inputCount <= 0 ? InputAllStyle.errorInput : ''}
                    onChange={onChangeValueHandler}
                />
            </div>
            <div>
                <ButtonAll
                    disabled={!props.editMode}
                    onClick={onClickHandler}
                    title={'set'}
                />
            </div>
        </div>
    )
}
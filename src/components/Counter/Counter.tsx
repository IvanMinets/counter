import React, {useState, useEffect, ChangeEvent} from 'react';
import SuperButton from "../SuperButton/SuperButton";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType} from "../../bll/store";
import {startValueChangeAC} from "../../bll/start-value-reducer";
import {setClickAC, setIncreaseClickAC, setResetClickAC} from "../../bll/counter-reducer";
import {maxValueChangeAC} from "../../bll/max-value-reducer";

type CounterProps = {}

const Counter: React.FC<CounterProps> = () => {
    console.log('counter rendered')
    // При загрузке компонента проверяем, есть ли значения в Local Storage и устанавливаем их
    // useEffect(() => {
    //     const savedStartValue = localStorage.getItem('startValue');
    //     const savedMaxValue = localStorage.getItem('maxValue');
    //
    //     if (savedStartValue && savedMaxValue) {
    //         setStartValue(parseInt(savedStartValue));
    //         setMaxValue(parseInt(savedMaxValue));
    //     }
    // }, []);

    // При изменении startValue или maxValue сохраняем их значения в Local Storage
    // useEffect(() => {
    //     localStorage.setItem('startValue', startValue.toString());
    //     localStorage.setItem('maxValue', maxValue.toString());
    // }, [startValue, maxValue]);

    const startValue = useSelector<CounterStateType, number>(state=>state.startValue)
    const maxValue = useSelector<CounterStateType, number>(state=>state.maxValue)
    const counter = useSelector<CounterStateType, string>(state =>state.counter !== undefined ? state.counter : 'enter values and press "set"')

    const dispatch = useDispatch();

    const handleStartValueChange = (element: ChangeEvent<HTMLInputElement>) => {
        dispatch(startValueChangeAC(element))
    };

    const handleMaxValueChange = (element: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValueChangeAC(element))
    };

    const handleSetClick = () => {
        dispatch(setClickAC(startValue))
    };

    const handleIncreaseClick = () => {
        dispatch(setIncreaseClickAC(maxValue))
    };

    const handleResetClick = () => {
        dispatch(setResetClickAC(startValue))
    };
    const isIncreaseDisabled = parseInt(counter) === maxValue || counter === 'enter values and press "set"';
    const isResetDisabled = parseInt(counter) === startValue || counter === 'enter values and press "set"';
    const isSetDisabled = startValue === maxValue || startValue > maxValue;

    return (
        <div>
            <div className={s.SettingsBlock}>
                <label>
                    Start value:
                    <input type="number" value={startValue} onChange={handleStartValueChange} min={0}/>
                </label>
                <br/>
                <label>
                    Max value:
                    <input type="number" value={maxValue} onChange={handleMaxValueChange}/>
                </label>
                <br/>
                <SuperButton onClick={handleSetClick} disabled={isSetDisabled}>Set</SuperButton>
                <br/>
            </div>
            <div className={s.CounterBlock}>
                <div className={s.CounterText}>{counter}</div>
                <br/>
                <SuperButton onClick={handleIncreaseClick} disabled={isIncreaseDisabled}>
                    Increase
                </SuperButton>
                <SuperButton onClick={handleResetClick} disabled={isResetDisabled}>
                    Reset
                </SuperButton>
            </div>
        </div>
    );
};

export default Counter;

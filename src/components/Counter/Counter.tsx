import React, {useState, useEffect, ChangeEvent} from 'react';
import SuperButton from "../SuperButton/SuperButton";
import s from './Counter.module.css'

type CounterProps = {}

const Counter: React.FC<CounterProps> = () => {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);
    const [counter, setCounter] = useState<string>('enter values and press "set"');

    // При загрузке компонента проверяем, есть ли значения в Local Storage и устанавливаем их
    useEffect(() => {
        const savedStartValue = localStorage.getItem('startValue');
        const savedMaxValue = localStorage.getItem('maxValue');

        if (savedStartValue && savedMaxValue) {
            setStartValue(parseInt(savedStartValue));
            setMaxValue(parseInt(savedMaxValue));
        }
    }, []);

    // При изменении startValue или maxValue сохраняем их значения в Local Storage
    useEffect(() => {
        localStorage.setItem('startValue', startValue.toString());
        localStorage.setItem('maxValue', maxValue.toString());
    }, [startValue, maxValue]);

    const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setStartValue(value);
        if (value >= 0) {
            setStartValue(value);
        }
    };

    const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMaxValue(value);
    };

    const handleSetClick = () => {
        setCounter(startValue.toString());
    };

    const handleIncreaseClick = () => {
        const currentValue = parseInt(counter);

        if (currentValue === maxValue) {
            return;
        }

        setCounter((currentValue + 1).toString());
    };

    const handleResetClick = () => {
        setCounter(startValue.toString());
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

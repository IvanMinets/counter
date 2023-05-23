import React, {useState, useEffect, ChangeEvent} from 'react';
import SuperButton from "./SuperButton";

type CounterProps = {}

const Counter: React.FC<CounterProps> = () => {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);
    const [counter, setCounter] = useState<string>('enter values and press "Set"');

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
        if (startValue >= maxValue) {
            alert('Start value must be less than Max value');
            return;
        }

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

    const isIncreaseDisabled = parseInt(counter) === maxValue || counter === 'enter values and press "Set"';
    const isResetDisabled = counter === 'enter values and press "Set"' || parseInt(counter) === startValue;

    return (
        <div>
            <label>
                Start value:
                <input type="number" value={startValue} onChange={handleStartValueChange} min={0}/>
            </label>
            <br />
            <label>
                Max value:
                <input type="number" value={maxValue} onChange={handleMaxValueChange} />
            </label>
            <br />
            <SuperButton onClick={handleSetClick} disabled={false}>Set</SuperButton>
            <br />
            <div>{counter}</div>
            <br />
            <SuperButton onClick={handleIncreaseClick} disabled={isIncreaseDisabled}>
                Increase
            </SuperButton>
            <SuperButton onClick={handleResetClick} disabled={isResetDisabled}>
                Reset
            </SuperButton>
        </div>
    );
};

export default Counter;

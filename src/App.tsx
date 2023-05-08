import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {IncreaseButton} from "./components/IncreaseButton";
import {ResetButton} from "./components/ResetButton";

function App() {
    const [count, setCount] = useState<number>(0);
    const [countMaxValue, setCountMaxValue] = useState<number>(0);
    const [countStartValue, setCountStartValue] = useState<number>(0);

    //функции для взятия текущего значения (перерисовки) инпута
    const onMaxValueChangeHandler = (e: any) => {
        setCountMaxValue(+e.currentTarget.value)
    }
    const onStartValueChangeHandler = (e: any) => {
        setCountStartValue(+e.currentTarget.value)
    }
    // функция проверки допустимых значений счётчика
    const valueChecker = () => {
        if (countStartValue >= countMaxValue) {
            return true
        }
        else {
            return false
        }
    }
    const StartValueChecker = () => {
    if (countStartValue < 0) {
            return true
        }
    }

    //функция для кнопки увеличения значения
    const increaseCount = () => {
        if (countStartValue < countMaxValue) {
            setCountStartValue(countStartValue + 1);
        }
    };
    //функция для кнопки ресета значения
    const resetCount = () => {
        setCountStartValue(0)
    };

    return (<div>
            <div className={"App"}>
                <div className={"Counter"}>
                    <div>Max value: <input className={valueChecker() ? "MaxValueInputError": "MaxValueInput"} type="number" value={countMaxValue} onChange={onMaxValueChangeHandler}/></div>
                    <div>Start value: <input className={StartValueChecker() ? "StartValueInputError": "StartValueInput"} type="number" value={countStartValue} onChange={onStartValueChangeHandler}/></div>
                    <button className = {"SetButton"} disabled={valueChecker() || StartValueChecker()}>Set</button>
                </div>
                <div className={"Counter"}>
                    <Counter countStartValue={countStartValue} countMaxValue={countMaxValue}/>
                    <IncreaseButton countStartValue={countStartValue} countMaxValue={countMaxValue} increaseCount={increaseCount}/>
                    <ResetButton countStartValue={countStartValue} countMaxValue={countMaxValue} resetCount={resetCount}/>
                </div>
            </div>
        </div>
    );
}

export default App;

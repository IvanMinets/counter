import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {IncreaseButton} from "./components/IncreaseButton";
import {ResetButton} from "./components/ResetButton";

function App() {
    const [count, setCount] = useState<number>(0);

    const increaseCount = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };
    const resetCount = () => {
        setCount(0)
    };

    return (
        <div className={"App"}>
            <div className={"Counter"}>
                <Counter counter={count}/>
                <IncreaseButton counter={count} increaseCount={increaseCount}/>
                <ResetButton counter={count} resetCount={resetCount}/>
            </div>
        </div>
    );
}

export default App;

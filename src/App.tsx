import React, {useState} from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState<number>(0);

    const increaseCount = () => {
        if (counter < 5) {
            setCounter(counter + 1);
        }
    };
    const resetCount = () => {
        setCounter(0)
    };

    return (
        <div className="App">
            <div className={counter === 5 ? "ValueMaxCheck" : 'ValueCheck'}>{counter}</div>
            <button className={"IncreaseButton"} disabled={counter === 5} onClick={increaseCount}>increase</button>
            <button className={"ResetButton"} disabled={counter !== 5} onClick={resetCount}>reset</button>
        </div>
    );
}

export default App;

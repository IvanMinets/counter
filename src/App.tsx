import React, {useState} from 'react';
import './App.css';

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
        <div className="App">
            <div className={count === 5 ? "ValueMaxCheck" : 'ValueCheck'}>{count}</div>
            <button className={"IncreaseButton"} disabled={count === 5} onClick={increaseCount}>increase</button>
            <button className={"ResetButton"} disabled={count !== 5} onClick={resetCount}>reset</button>
        </div>
    );
}

export default App;

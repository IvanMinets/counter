import React from 'react';

type CounterProps = {
    counter: number;
}

export function Counter (props: CounterProps) {

    return (
        <div>
            <div className={props.counter === 5 ? "ValueMaxCheck" : 'ValueCheck'}>{props.counter}</div>
        </div>
    )
}
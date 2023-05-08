import React from 'react';

type CounterProps = {
    countStartValue: number;
    countMaxValue: number;
}

export function Counter (props: CounterProps) {

    return (
        <div>
            <div className={props.countStartValue === props.countMaxValue ? "ValueMaxCheck" : "ValueCheck"}>{props.countStartValue}</div>
        </div>
    )
}
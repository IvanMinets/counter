import React from "react";

type IncreaseButtonPropsType = {
    countStartValue: number;
    countMaxValue: number;
    increaseCount: () => void
}

export function IncreaseButton (props: IncreaseButtonPropsType) {
    return (
        <span>
            <button className={"IncreaseButton"} disabled={props.countStartValue === props.countMaxValue && props.countStartValue !==0} onClick={props.increaseCount}>increase</button>
        </span>
    )
}
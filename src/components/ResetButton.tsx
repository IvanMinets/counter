import React from "react";

type ResetButtonPropsType = {
    countStartValue: number;
    countMaxValue: number;
    resetCount: () => void
}

export function ResetButton (props: ResetButtonPropsType) {
    return (
        <span>
            <button className={"ResetButton"} onClick={props.resetCount}>reset</button>
        </span>
    )
}
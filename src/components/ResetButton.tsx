import React from "react";

type ResetButtonPropsType = {
    counter: number
    resetCount: () => void
}

export function ResetButton (props: ResetButtonPropsType) {
    return (
        <span>
            <button className={"ResetButton"} disabled={props.counter !== 5} onClick={props.resetCount}>reset</button>
        </span>
    )
}
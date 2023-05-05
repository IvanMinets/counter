import React from "react";

type IncreaseButtonPropsType = {
    counter: number
    increaseCount: () => void
}

export function IncreaseButton (props: IncreaseButtonPropsType) {
    return (
        <span>
            <button className={"IncreaseButton"} disabled={props.counter === 5} onClick={props.increaseCount}>increase</button>
        </span>
    )
}
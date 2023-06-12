import React from "react";

export type setClickActionType = {
    type: 'SET-CLICK',
    startValue: number
}
export type setIncreaseClickActionType = {
    type: 'SET-INCREASE-CLICK',
    maxValue: number
}
export type setResetClickActionType = {
    type: 'SET-RESET-CLICK',
    startValue: number
}

type ActionsType = setClickActionType | setIncreaseClickActionType | setResetClickActionType;

const initialState: string = 'enter values and press "set"';

export const counterReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-CLICK':
            return state = action.startValue.toString();
        case 'SET-INCREASE-CLICK':
            let currentValue = parseInt(state);
            if (currentValue === action.maxValue) {
                return;
            }
            return state = (currentValue + 1).toString();
        case 'SET-RESET-CLICK':
            return state = action.startValue.toString();
        default:
            return state
    }
}

export const setClickAC = (startValue: number):setClickActionType  => {
    return {type: 'SET-CLICK', startValue: startValue} as const
}
export const setIncreaseClickAC = (maxValue: number): setIncreaseClickActionType => {
    return {type: 'SET-INCREASE-CLICK', maxValue: maxValue} as const
}
export const setResetClickAC = (startValue: number): setResetClickActionType => {
    return {type: 'SET-RESET-CLICK', startValue: startValue} as const
}
import React, {ChangeEvent} from "react";

const initialState: number = 0;
export const startValueReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'START-VALUE-CHANGE':
           return state = parseInt(action.element.target.value)
        default:
            return state
    }
}

export const startValueChangeAC = (element: ChangeEvent<HTMLInputElement>) => {
    return {type: 'START-VALUE-CHANGE', element: element} as const
}
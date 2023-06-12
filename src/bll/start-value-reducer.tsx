import React, {ChangeEvent} from "react";

export type startValueChangeActionType = {
    type: 'START-VALUE-CHANGE',
    element: ChangeEvent<HTMLInputElement>
}

const initialState: number = 0;
export const startValueReducer = (state = initialState, action: startValueChangeActionType) => {
    switch (action.type) {
        case 'START-VALUE-CHANGE':
           return state = parseInt(action.element.target.value)
        default:
            return state
    }
}

export const startValueChangeAC = (element: ChangeEvent<HTMLInputElement>): startValueChangeActionType => {
    return {type: 'START-VALUE-CHANGE', element: element} as const
}
import React, {ChangeEvent} from "react";

const initialState: number = 10;
export const maxValueReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'MAX-VALUE-CHANGE':
            return state = parseInt(action.element.target.value)
        default:
            return state
    }
}

export const startValueChangeAC = (element: ChangeEvent<HTMLInputElement>) => {
    return {type: 'MAX-VALUE-CHANGE', element: element} as const
}
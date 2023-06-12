import React, {ChangeEvent} from "react";

export type maxValueChangeActionType = {
    type: 'MAX-VALUE-CHANGE',
    element: ChangeEvent<HTMLInputElement>
}

const initialState: number = 10;
export const maxValueReducer = (state = initialState, action: maxValueChangeActionType) => {
    switch (action.type) {
        case 'MAX-VALUE-CHANGE':
            return state = parseInt(action.element.target.value)
        default:
            return state
    }
}

export const startValueChangeAC = (element: ChangeEvent<HTMLInputElement>): maxValueChangeActionType => {
    return {type: 'MAX-VALUE-CHANGE', element: element} as const
}
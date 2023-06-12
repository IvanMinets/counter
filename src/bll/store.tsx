import React from "react";
import {combineReducers, createStore, legacy_createStore} from 'redux';
import {startValueReducer} from "./start-value-reducer";
import {maxValueReducer} from "./max-value-reducer";
import {counterReducer} from "./counter-reducer";

export const rootReducer = combineReducers( {
    startValue: startValueReducer,
    maxValue: maxValueReducer,
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer);

export type CounterStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
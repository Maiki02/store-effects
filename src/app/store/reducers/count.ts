import { createReducer, on } from "@ngrx/store";
import * as actions from "../actions/count";
import { CountReducer } from "../../shared/interfaces";

export const initialState:CountReducer = {count: 0};

export const countReducer = createReducer(
  initialState,

on(actions.setCount, (state, action) => (
    {
        ...state, count: action.count
    }
)),

);
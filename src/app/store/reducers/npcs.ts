import { createReducer, on } from "@ngrx/store";
import * as actions from "../actions/npc";
import { CountReducer, NpcsReducer } from "../../shared/interfaces";

export const initialState:NpcsReducer = {npcs: [], messageError:''};

export const npcsReducer = createReducer(
  initialState,

    on(actions.setNpcsSuccess, (state, action) => (
        {
            ...state,
            npcs: action.npcs,
            messageError: ''
        }
    )),

    on(actions.setNpcsFailed, (state, action) => (
        {
            ...state,
            npcs: [],
            messageError: action.messageError
        }
    ))

);
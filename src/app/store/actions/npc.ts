import { createAction, props } from "@ngrx/store"

export const setNpcs = createAction(
    '[Count] Set Npcs'
)

export const setNpcsSuccess = createAction(
    '[Count] Set Npcs Success', props<{ npcs: any[] }>()
)
export const setNpcsFailed = createAction(
    '[Count] Set Npcs Failed', props<{ npcs: any[], messageError:string }>()
)
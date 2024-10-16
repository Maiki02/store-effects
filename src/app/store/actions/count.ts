import { createAction, props } from "@ngrx/store";


export const setCount = createAction(
    '[Count] Set Count', props<{ count: number }>()
)
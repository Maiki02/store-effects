/*import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { NpcsAgustinService } from '../../shared/services/npcs-agustin.service';
import { setNpcs, setNpcsFailed, setNpcsSuccess } from '../actions/npc';

@Injectable()
export class NpcEffects {
    constructor(
        private actions$: Actions,
        private agustin: NpcsAgustinService
      ) {
        console.log("Constructor effect")
      }

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(setNpcs),

    tap( () => {  console.log("setNpcs effect") }),

    exhaustMap(() => this.agustin.getAll()
      .pipe(
        map(npcs => (setNpcsSuccess({npcs: npcs}))),
        catchError(() => of(setNpcsFailed({npcs: [], messageError: 'Error'})))
      ))
    )
  );


}*/

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { NpcsAgustinService } from "../../shared/services/npcs-agustin.service";
import { setNpcs, setNpcsFailed, setNpcsSuccess } from "../actions/npc";

@Injectable()
export class npcsEffects {
  constructor(private actions$: Actions, private DataService: NpcsAgustinService) {
    // console.logthis.actions$.pipe()
  }
  //Creo el efecto que va a escuchar cuando se despache la accion(en este caso la peticion de los datos)
  loadNpcData$ = createEffect(() =>
    // console.log(this.actions$)
    //Mediante actions$ intercepto el flujo de datos del observable y manipulo el flujo de datos con pipe()
    this.actions$.pipe(
      //Elijo el tipo de action especifcia que quiero escuchar
      ofType(setNpcs),
      tap(() => console.log("npcRetrieveAction dispatched")),
      //Toma el flujo de datos de uno o mas observables, los mapea indvidualmente y los retorna como un unico flujo de datos
      mergeMap(() =>
        //Se llama a DataService para que haga el llamado a la API, devuelva un observable y con pipe se manipule esa data
        this.DataService.getData().pipe(
          map((npcData) => setNpcsSuccess({ npcs: npcData })),
          catchError(error => of(setNpcsFailed({ npcs: [], messageError: error })))
        )
      )
    )
  )
}
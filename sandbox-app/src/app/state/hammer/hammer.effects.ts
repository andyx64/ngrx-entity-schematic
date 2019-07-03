import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {
  exhaustMap,
  map,
  catchError,
  tap,
  switchMap,
  mergeMap
} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import {
  HammerActionTypes,
  QueryHammer,
  QueryHammerFail,

  CreateHammer,
  CreateHammerSuccess,
  CreateHammerFail,

  UpdateHammer,
  UpdateHammerSuccess,
  UpdateHammerFail,

  DeleteHammerById,
  DeleteHammerByIdSuccess,
  DeleteHammerByIdFail,


} from './hammer.actions';
import { Hammer } from './hammer.model';
import { HammerDatabaseService } from './hammer.database.service';

@Injectable()
export class HammerEffects {
  // ========================================= QUERY
  @Effect()
  query:  Observable<Action> = this.actions$
      .pipe(
        ofType<QueryHammer>(HammerActionTypes.QueryHammer),
        switchMap(() => {
          return this.service.query();
        }),
        mergeMap(actions => actions),
        map(action => {
          console.log(action.payload.doc.data())
          return {
            type: `[Hammer] ${action.type}`,
            payload: {
              ...action.payload.doc.data(),
              id: action.payload.doc.id
            }
          };
        }),
        catchError(({ message }) =>
          of(new QueryHammerFail({ error: message }))
        )
      )

  // ========================================= CREATE
  @Effect()
  create: Observable<Action> = this.actions$
    .pipe(
      ofType<CreateHammer>(HammerActionTypes.CreateHammer),
      exhaustMap((action) =>
        this.service.create(action.payload.hammer).pipe(
          map((hammer: Hammer) => new CreateHammerSuccess({ result: hammer })),
          catchError(({ message }) =>
            of(new CreateHammerFail({ error: message }))
          )
        )
      )
    );
  // ========================================= UPDATE
  @Effect()
  update: Observable<Action> = this.actions$
  .pipe(
      ofType<UpdateHammer>(HammerActionTypes.UpdateHammer),
      exhaustMap((action) =>
        this.service.update(action.payload.hammer).pipe(
          map((hammer: Hammer) =>
            new UpdateHammerSuccess({
              update: {
                id: hammer.id,
                changes: hammer
              } as Update<Hammer>
            })
          ),
          catchError(({ message }) =>
            of(new UpdateHammerFail({ error: message }))
          )
        )
      )
    );

  // ========================================= DELETE
  @Effect()
  delete: Observable<Action> = this.actions$
  .pipe(
      ofType<DeleteHammerById>(HammerActionTypes.DeleteHammerById),
      exhaustMap((action) =>
        this.service.deleteById(action.payload.id).pipe(
          map((id: string) => new DeleteHammerByIdSuccess({ id })),
          catchError(({ message }) =>
            of(new DeleteHammerByIdFail({ error: message }))
          )
        )
      )
    );




  constructor(private actions$: Actions, private service: HammerDatabaseService) {}
}

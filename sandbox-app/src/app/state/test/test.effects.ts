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
  TestActionTypes,
  QueryTest,
  QueryTestFail,

  CreateTest,
  CreateTestSuccess,
  CreateTestFail,

  UpdateTest,
  UpdateTestSuccess,
  UpdateTestFail,

  DeleteTestById,
  DeleteTestByIdSuccess,
  DeleteTestByIdFail,


} from './test.actions';
import { Test } from './test.model';
import { TestService } from './test.service';

@Injectable()
export class TestEffects {
  // ========================================= QUERY
  @Effect()
  query:  Observable<Action> = this.actions$
      .pipe(
        ofType<QueryTest>(TestActionTypes.QueryTest),
        switchMap(() => {
          return this.service.query();
        }),
        mergeMap(actions => actions),
        map(action => {
          console.log(action.payload.doc.data())
          return {
            type: `[Test] ${action.type}`,
            payload: {
              ...action.payload.doc.data(),
              id: action.payload.doc.id
            }
          };
        }),
        catchError(({ message }) =>
          of(new QueryTestFail({ error: message }))
        )
      )

  // ========================================= CREATE
  @Effect()
  create: Observable<Action> = this.actions$
    .pipe(
      ofType<CreateTest>(TestActionTypes.CreateTest),
      exhaustMap((action) =>
        this.service.create(action.payload.test).pipe(
          map((test: Test) => new CreateTestSuccess({ result: test })),
          catchError(({ message }) =>
            of(new CreateTestFail({ error: message }))
          )
        )
      )
    );
  // ========================================= UPDATE
  @Effect()
  update: Observable<Action> = this.actions$
  .pipe(
      ofType<UpdateTest>(TestActionTypes.UpdateTest),
      exhaustMap((action) =>
        this.service.update(action.payload.test).pipe(
          map((test: Test) =>
            new UpdateTestSuccess({
              update: {
                id: test.id,
                changes: test
              } as Update<Test>
            })
          ),
          catchError(({ message }) =>
            of(new UpdateTestFail({ error: message }))
          )
        )
      )
    );

  // ========================================= DELETE
  @Effect()
  delete: Observable<Action> = this.actions$
  .pipe(
      ofType<DeleteTestById>(TestActionTypes.DeleteTestById),
      exhaustMap((action) =>
        this.service.deleteById(action.payload.id).pipe(
          map((id: string) => new DeleteTestByIdSuccess({ id })),
          catchError(({ message }) =>
            of(new DeleteTestByIdFail({ error: message }))
          )
        )
      )
    );




  constructor(private actions$: Actions, private service: TestService) {}
}

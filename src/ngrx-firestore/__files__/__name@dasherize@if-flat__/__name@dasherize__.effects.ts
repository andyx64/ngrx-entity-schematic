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
  <%= classify(name) %>ActionTypes,
  Query<%= classify(name) %>,
  Query<%= classify(name) %>Fail,

  Create<%= classify(name) %>,
  Create<%= classify(name) %>Success,
  Create<%= classify(name) %>Fail,

  Update<%= classify(name) %>,
  Update<%= classify(name) %>Success,
  Update<%= classify(name) %>Fail,

  Delete<%= classify(name) %>ById,
  Delete<%= classify(name) %>ByIdSuccess,
  Delete<%= classify(name) %>ByIdFail,


} from './<%= dasherize(name) %>.actions';
import { <%= classify(name) %> } from './<%= dasherize(name) %>.model';
import { <%= classify(name) %>DatabaseService } from './<%= dasherize(name) %>.database.service';

@Injectable()
export class <%= classify(name) %>Effects {
  // ========================================= QUERY
  @Effect()
  query:  Observable<Action> = this.actions$
      .pipe(
        ofType<Query<%= classify(name) %>>(<%= classify(name) %>ActionTypes.Query<%= classify(name) %>),
        switchMap(() => {
          return this.service.query();
        }),
        mergeMap(actions => actions),
        map(action => {
          console.log(action.payload.doc.data())
          return {
            type: `[<%= classify(name) %>] ${action.type}`,
            payload: {
              ...action.payload.doc.data(),
              id: action.payload.doc.id
            }
          };
        }),
        catchError(({ message }) =>
          of(new Query<%= classify(name) %>Fail({ error: message }))
        )
      )

  // ========================================= CREATE
  @Effect()
  create: Observable<Action> = this.actions$
    .pipe(
      ofType<Create<%= classify(name) %>>(<%= classify(name) %>ActionTypes.Create<%= classify(name) %>),
      exhaustMap((action) =>
        this.service.create(action.payload.<%= name %>).pipe(
          map((<%= name %>: <%= classify(name) %>) => new Create<%= classify(name) %>Success({ result: <%= name %> })),
          catchError(({ message }) =>
            of(new Create<%= classify(name) %>Fail({ error: message }))
          )
        )
      )
    );
  // ========================================= UPDATE
  @Effect()
  update: Observable<Action> = this.actions$
  .pipe(
      ofType<Update<%= classify(name) %>>(<%= classify(name) %>ActionTypes.Update<%= classify(name) %>),
      exhaustMap((action) =>
        this.service.update(action.payload.<%= name %>).pipe(
          map((<%= name %>: <%= classify(name) %>) =>
            new Update<%= classify(name) %>Success({
              update: {
                id: <%= name %>.id,
                changes: <%= name %>
              } as Update<<%= classify(name) %>>
            })
          ),
          catchError(({ message }) =>
            of(new Update<%= classify(name) %>Fail({ error: message }))
          )
        )
      )
    );

  // ========================================= DELETE
  @Effect()
  delete: Observable<Action> = this.actions$
  .pipe(
      ofType<Delete<%= classify(name) %>ById>(<%= classify(name) %>ActionTypes.Delete<%= classify(name) %>ById),
      exhaustMap((action) =>
        this.service.deleteById(action.payload.id).pipe(
          map((id: string) => new Delete<%= classify(name) %>ByIdSuccess({ id })),
          catchError(({ message }) =>
            of(new Delete<%= classify(name) %>ByIdFail({ error: message }))
          )
        )
      )
    );




  constructor(private actions$: Actions, private service: <%= classify(name) %>DatabaseService) {}
}

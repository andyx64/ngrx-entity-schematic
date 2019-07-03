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
  AccountActionTypes,
  QueryAccount,
  QueryAccountFail,

  CreateAccount,
  CreateAccountSuccess,
  CreateAccountFail,

  UpdateAccount,
  UpdateAccountSuccess,
  UpdateAccountFail,

  DeleteAccountById,
  DeleteAccountByIdSuccess,
  DeleteAccountByIdFail,


} from './account.actions';
import { Account } from './account.model';
import { AccountFetchService } from './account.service';

@Injectable()
export class AccountEffects {
  // ========================================= QUERY
  @Effect()
  query:  Observable<Action> = this.actions$
      .pipe(
        ofType<QueryAccount>(AccountActionTypes.QueryAccount),
        switchMap(() => {
          return this.service.query();
        }),
        mergeMap(actions => actions),
        map(action => {
          console.log(action.payload.doc.data())
          return {
            type: `[Account] ${action.type}`,
            payload: {
              ...action.payload.doc.data(),
              id: action.payload.doc.id
            }
          };
        }),
        catchError(({ message }) =>
          of(new QueryAccountFail({ error: message }))
        )
      )

  // ========================================= CREATE
  @Effect()
  create: Observable<Action> = this.actions$
    .pipe(
      ofType<CreateAccount>(AccountActionTypes.CreateAccount),
      exhaustMap((action) =>
        this.service.create(action.payload.account).pipe(
          map((account: Account) => new CreateAccountSuccess({ result: account })),
          catchError(({ message }) =>
            of(new CreateAccountFail({ error: message }))
          )
        )
      )
    );
  // ========================================= UPDATE
  @Effect()
  update: Observable<Action> = this.actions$
  .pipe(
      ofType<UpdateAccount>(AccountActionTypes.UpdateAccount),
      exhaustMap((action) =>
        this.service.update(action.payload.account).pipe(
          map((account: Account) =>
            new UpdateAccountSuccess({
              update: {
                id: account.id,
                changes: account
              } as Update<Account>
            })
          ),
          catchError(({ message }) =>
            of(new UpdateAccountFail({ error: message }))
          )
        )
      )
    );

  // ========================================= DELETE
  @Effect()
  delete: Observable<Action> = this.actions$
  .pipe(
      ofType<DeleteAccountById>(AccountActionTypes.DeleteAccountById),
      exhaustMap((action) =>
        this.service.deleteById(action.payload.id).pipe(
          map((id: string) => new DeleteAccountByIdSuccess({ id })),
          catchError(({ message }) =>
            of(new DeleteAccountByIdFail({ error: message }))
          )
        )
      )
    );




  constructor(private actions$: Actions, private service: AccountFetchService) {}
}

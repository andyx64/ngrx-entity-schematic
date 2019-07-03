import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Account} from './account.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {getAccountById, account, accountIds} from '.';

@Injectable({
  providedIn: 'root'
})
export class AccountSelectorService {

  constructor(private _store: Store<Account>) { }

  getAccountById(accountId: string) {
    return this._store.select(getAccountById(accountId));
  }

  getAllAccounts() {
    return this._store.select(account);
  }
}

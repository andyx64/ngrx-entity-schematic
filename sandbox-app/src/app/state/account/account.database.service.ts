import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {from, Observable, of, pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { Account } from './account.model';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AccountDatabaseService {
  accountCollection = this.af.collection<Account>('accounts')

  constructor(private httpClient: HttpClient, private af: AngularFirestore) {}

  query() {
    return this.accountCollection.stateChanges();
  }

  create(account: Account): Observable<Account> {
    return from(this.accountCollection.add(account)).pipe(map(() => account));
  }

  update(account: Account): Observable<Account> {
    return from(this.accountCollection.doc(account.id.toString()).update(account)).pipe( map( () => account ));
  }

  deleteById(id: string): Observable<string> {
    return from(this.accountCollection.doc(id).delete()).pipe( map (() => id));
  }

}

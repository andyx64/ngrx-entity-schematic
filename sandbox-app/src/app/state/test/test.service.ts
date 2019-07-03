/*
 * TODO:
 * This file should not remain in the state folder. Move it to somewhere within
 * your app code.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {from, Observable, of, pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { Test } from './test.model';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  testCollection = this.af.collection<Test>('tests')

  constructor(private httpClient: HttpClient, private af: AngularFirestore) {}

  query() {
    return this.testCollection.stateChanges();
  }

  create(test: Test): Observable<Test> {
    return from(this.testCollection.add(test)).pipe(map(() => test));
  }

  update(test: Test): Observable<Test> {
    return from(this.testCollection.doc(test.id.toString()).update(test)).pipe( map( () => test ));
  }

  deleteById(id: string): Observable<string> {
      return from(this.testCollection.doc(id).delete()).pipe( map (() => id));
  }

}

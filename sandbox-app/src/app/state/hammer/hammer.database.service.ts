import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {from, Observable, of, pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { Hammer } from './hammer.model';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class HammerDatabaseService {
  hammerCollection = this.af.collection<Hammer>('hammers')

  constructor(private httpClient: HttpClient, private af: AngularFirestore) {}

  query() {
    return this.hammerCollection.stateChanges();
  }

  create(hammer: Hammer): Observable<Hammer> {
    return from(this.hammerCollection.add(hammer)).pipe(map(() => hammer));
  }

  update(hammer: Hammer): Observable<Hammer> {
    return from(this.hammerCollection.doc(hammer.id.toString()).update(hammer)).pipe( map( () => hammer ));
  }

  deleteById(id: string): Observable<string> {
    return from(this.hammerCollection.doc(id).delete()).pipe( map (() => id));
  }

}

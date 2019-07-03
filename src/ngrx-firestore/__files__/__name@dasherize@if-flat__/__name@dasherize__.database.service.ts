import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {from, Observable, of, pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { <%= classify(name) %> } from './<%= name %>.model';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>DatabaseService {
  <%= name %>Collection = this.af.collection<<%= classify(name) %>>('<%= name %>s')

  constructor(private httpClient: HttpClient, private af: AngularFirestore) {}

  query() {
    return this.<%= name %>Collection.stateChanges();
  }

  create(<%= name %>: <%= classify(name) %>): Observable<<%= classify(name) %>> {
    return from(this.<%= name %>Collection.add(<%= name %>)).pipe(map(() => <%= name %>));
  }

  update(<%= name %>: <%= classify(name) %>): Observable<<%= classify(name) %>> {
    return from(this.<%= name %>Collection.doc(<%= name %>.id.toString()).update(<%= name %>)).pipe( map( () => <%= name %> ));
  }

  deleteById(id: string): Observable<string> {
    return from(this.<%= name %>Collection.doc(id).delete()).pipe( map (() => id));
  }

}

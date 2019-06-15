/*
 * TODO:
 * This file should not remain in the state folder. Move it to somewhere within
 * your app code.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {from, Observable, of, pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { <%= classify(name) %> } from './<%= dasherize(name) %>.model';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {
  <% if (firestore) { %>
  <%= name %>Collection = this.af.collection<<%= classify(name) %>>('<%= name %>s')

  constructor(private httpClient: HttpClient, private af: AngularFirestore) {}

  query() {
    return this.<%= name %>Collection.stateChanges();
  }

  create(<%= name %>: <%= classify(name)%>): Observable<<%= classify(name) %>> {
    return from(this.<%= name %>Collection.add(<%= name %>)).pipe(map(() => <%= name %>));
  }

  search(): Observable<Array<<%= classify(name) %>>> {
    return this.<%= name %>Collection.get().pipe(
      map(querySnapshot =>
        querySnapshot.docs.map( el => {
          return {id: el.id, name: el.data().name, description: el.data().description};
        }))
    );
  }

    getById(id: string): Observable<<%= classify(name) %>> {

      return this.<%= name %>Collection.doc<<%= classify(name) %>>(id).get().pipe(
        map(querySnapshot => querySnapshot.data().map( el => {
          return {...el.data()} as <%= classify(name) %>;
        }))
      );
  }

    update(<%= name %>: <%= classify(name) %>): Observable<<%= classify(name) %>> {
      return from(this.<%= name %>Collection.doc(<%= name %>.id.toString()).update(<%= name %>)).pipe( map( () => <%= name %> ));
  }

    deleteById(id: string): Observable<string> {
      return from(this.<%= name %>Collection.doc(id).delete()).pipe( map (() => id));
  }
  <% } else { %>
    BASE_URL = 'api/';

    constructor(private httpClient: HttpClient) {}

    create(<%= name %>: <%= classify(name) %>): Observable<<%= classify(name) %>> {
      return this.httpClient.post<<%= classify(name) %>>(`${this.BASE_URL}<%= name %>`, {
        ...<%= name %>,
        // We clear out the ID to indicate that this should be a new entry:
        id: null
      });
  }

    search(): Observable<Array<<%= classify(name) %>>> {
      // TODO: get based on state.paging (filter, sorting, page, limit)
      return this.httpClient.get<Array<<%= classify(name) %>>>(`${this.BASE_URL}<%= name %>`);
  }

    getById(id: string): Observable<<%= classify(name) %>> {
      return this.httpClient.get<<%= classify(name) %>>(`${this.BASE_URL}<%= name %>/${id}`);
  }

    update(<%= name %>: <%= classify(name) %>): Observable<<%= classify(name) %>> {
      return this.httpClient
        .put<<%= classify(name) %>>(`${this.BASE_URL}<%= name %>/${<%= name %>.id}`, <%= name %>)
      // The following pipe can be removed if your backend service returns the
      // edited value:
        .pipe(switchMap(() => of(<%= name %>)));
  }

    deleteById(id: string): Observable<string> {
      return this.httpClient.delete<void>(`${this.BASE_URL}<%= name %>/${id}`)
      // The following pipe can be removed if your backend service returns the
      // ID or body of the deleted entity:
        .pipe(switchMap(() => of(id)));
  }
  <% } %>
}

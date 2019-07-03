import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {<%= classify(name) %>} from './<%= name %>.model';
import {Create<%= classify(name) %>, Delete<%= classify(name) %>ById, Query<%= classify(name) %>, Update<%= classify(name) %>} from './<%= name %>.actions';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>DispatcherService {

  constructor(private _store: Store<<%= classify(name) %>>) { }

  Query<%= classify(name) %> (): void {
    this._store.dispatch(new Query<%= classify(name) %>());
  }

  Create<%= classify(name) %> (<%= name %>: <%= classify(name) %>): void {
    this._store.dispatch(new Create<%= classify(name) %>({<%= name %>: <%= name %>}));
  }

  Update<%= classify(name) %> (<%= name %>: <%= classify(name) %>): void {
    this._store.dispatch(new Update<%= classify(name) %>({<%= name %>: <%= name %>}));
  }

  Delete<%= classify(name) %>(<%= name %>Id: string): void {
    this._store.dispatch(new Delete<%= classify(name) %>ById({id: <%= name %>Id}));
  }
}

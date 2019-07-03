import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {<%= classify(name) %>} from './<%= name %>.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {get<%= classify(name) %>ById, <%= name %>, <%= name %>Ids} from '.';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>SelectorService {

  constructor(private _store: Store<<%= classify(name) %>>) { }

  get<%= classify(name) %>ById(<%= name %>Id: string) {
    return this._store.select(get<%= classify(name) %>ById(<%= name %>Id));
  }

  getAll<%= classify(name) %>s() {
    return this._store.select(<%= name %>);
  }
}

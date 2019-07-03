import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Hammer} from './hammer.model';
import {CreateHammer, DeleteHammerById, QueryHammer, UpdateHammer} from './hammer.actions';

@Injectable({
  providedIn: 'root'
})
export class HammerDispatcherService {

  constructor(private _store: Store<Hammer>) { }

  QueryHammer (): void {
    this._store.dispatch(new QueryHammer());
  }

  CreateHammer (hammer: Hammer): void {
    this._store.dispatch(new CreateHammer({hammer: hammer}));
  }

  UpdateHammer (hammer: Hammer): void {
    this._store.dispatch(new UpdateHammer({hammer: hammer}));
  }

  DeleteHammer(hammerId: string): void {
    this._store.dispatch(new DeleteHammerById({id: hammerId}));
  }
}

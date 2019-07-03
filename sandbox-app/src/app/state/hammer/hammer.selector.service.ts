import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Hammer} from './hammer.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {getHammerById, hammer, hammerIds} from '.';

@Injectable({
  providedIn: 'root'
})
export class HammerSelectorService {

  constructor(private _store: Store<Hammer>) { }

  getHammerById(hammerId: string) {
    return this._store.select(getHammerById(hammerId));
  }

  getAllHammers() {
    return this._store.select(hammer);
  }
}

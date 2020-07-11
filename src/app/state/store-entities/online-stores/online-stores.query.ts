import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { OnlineStoresStore, OnlineStoresState } from './online-stores.store';

@Injectable({ providedIn: 'root' })
export class OnlineStoresQuery extends QueryEntity<OnlineStoresState> {

  constructor(protected store: OnlineStoresStore) {
    super(store);
  }

}

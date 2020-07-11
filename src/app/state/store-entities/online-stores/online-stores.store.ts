import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { OnlineStore } from './online-store.model';

export interface OnlineStoresState extends EntityState<OnlineStore> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'onlineStores' })
export class OnlineStoresStore extends EntityStore<OnlineStoresState> {

  constructor() {
    super();
  }

}

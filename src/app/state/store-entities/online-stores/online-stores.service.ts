import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { OnlineStore } from './online-store.model';
import { OnlineStoresStore } from './online-stores.store';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OnlineStoresService {

  constructor(private onlineStoresStore: OnlineStoresStore, private http: HttpClient) {
  }


  get() {
    //using mock from sessionStorage to simulate http req
    return of(JSON.parse(sessionStorage.getItem('mockStores')) as OnlineStore[]).pipe(tap(entities => {
      this.onlineStoresStore.set(entities);
    }));
  }

  add(onlineStore: OnlineStore) {
    this.onlineStoresStore.add(onlineStore);
  }

  update(id, onlineStore: Partial<OnlineStore>) {
    this.onlineStoresStore.update(id, onlineStore);
  }

  remove(id: ID) {
    this.onlineStoresStore.remove(id);
  }

}

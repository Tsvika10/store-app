import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductsStore } from './products.store';
import { of, from } from 'rxjs';
import { OnlineStoresService } from '../online-stores/online-stores.service';
import { OnlineStoresQuery } from '../online-stores/online-stores.query';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(
    private productsStore: ProductsStore, 
    private http: HttpClient,
    private onlineStoreService:OnlineStoresService,
    private onlineStoresQuery:OnlineStoresQuery) {
  }


  get() {
    //using mock from sessionStorage to simulate http req
    return of(JSON.parse(sessionStorage.getItem('mockProcucts')) as Product[]).pipe(tap(entities => {
      this.productsStore.set(entities);
    }));
  }

  add(product: Product) {
    this.productsStore.add(product);
        //get the last products count in the store and update
        const lastStoreCount = this.onlineStoresQuery.getEntity(product.storeId).productCount;
        this.onlineStoreService.update(product.storeId,{productCount: lastStoreCount + 1})
  }

  update(id, product: Partial<Product>) {
    this.productsStore.update(id, product);
  }

  remove(id: ID) {
    this.productsStore.remove(id);
  }

}

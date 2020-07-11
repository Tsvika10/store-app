import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductsStore } from './products.store';
import { of } from 'rxjs';
import { OnlineStoresService } from '../online-stores/online-stores.service';
import { OnlineStoresQuery } from '../online-stores/online-stores.query';
import { ProductsQuery } from './products.query';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(
    private productsStore: ProductsStore, 
    private http: HttpClient,
    private onlineStoreService:OnlineStoresService,
    private onlineStoresQuery:OnlineStoresQuery,
    private productQuery: ProductsQuery) {
  }


  get() {
    //using mock from sessionStorage to simulate http req
    return of(JSON.parse(sessionStorage.getItem('mockProcucts')) as Product[]).pipe(tap(entities => {
      this.productsStore.set(entities);
    }));
  }

  add(product: Product) {
    //get the largest id number of a saved product
    const lastId = this.productQuery.getAll().map(pr => pr.id).reduce((acc ,cur)=>(cur > acc? cur : acc), 0)
    this.productsStore.add({...product, id:lastId + 1});
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

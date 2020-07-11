import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductsStore } from './products.store';
import { of, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(private productsStore: ProductsStore, private http: HttpClient) {
  }


  get() {
    //using mock from sessionStorage to simulate http req
    return of(JSON.parse(sessionStorage.getItem('mockProcucts')) as Product[]).pipe(tap(entities => {
      this.productsStore.set(entities);
    }));
  }

  add(product: Product) {
    this.productsStore.add(product);
  }

  update(id, product: Partial<Product>) {
    this.productsStore.update(id, product);
  }

  remove(id: ID) {
    this.productsStore.remove(id);
  }

}

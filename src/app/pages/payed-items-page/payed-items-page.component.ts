import { Component, OnInit } from '@angular/core';
import { ProductsQuery } from 'src/app/state/products/products.query';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-payed-items-page',
  templateUrl: './payed-items-page.component.html',
  styleUrls: ['./payed-items-page.component.css']
})
export class PayedItemsPageComponent implements OnInit {

  constructor(private productsQuery:ProductsQuery) { }

  ngOnInit() {
  }

  getItems(){
    return this.productsQuery.selectAll({filterBy:({received}) => !received});
  }

}

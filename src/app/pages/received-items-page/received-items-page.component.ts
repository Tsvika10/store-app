import { Component, OnInit } from '@angular/core';
import { ProductsQuery } from 'src/app/state/products/products.query';

@Component({
  selector: 'app-received-items-page',
  templateUrl: './received-items-page.component.html',
  styleUrls: ['./received-items-page.component.css']
})
export class ReceivedItemsPageComponent implements OnInit {

  constructor(private productsQuery: ProductsQuery) { }

  ngOnInit() {
  }

  getItems(){
    //get only received items
    return this.productsQuery.selectAll({filterBy:({received}) => received});
  }

}

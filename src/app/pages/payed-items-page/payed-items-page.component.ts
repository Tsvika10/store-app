import { Component, OnInit } from '@angular/core';
import { ProductsQuery } from 'src/app/state/store-entities/products/products.query';
import { tap } from 'rxjs/operators';
import { ProductsService } from 'src/app/state/store-entities/products/products.service';

@Component({
  selector: 'app-payed-items-page',
  templateUrl: './payed-items-page.component.html',
  styleUrls: ['./payed-items-page.component.css']
})
export class PayedItemsPageComponent implements OnInit {

  constructor(private productsQuery:ProductsQuery, private productsService:ProductsService) { }

  ngOnInit() {
  }

  getItems(){
    return this.productsQuery.selectAll({filterBy:({received}) => !received});
  }

  itemConfirmReceived(itemId){
    this.productsService.update(itemId, {received: true})
  }

}

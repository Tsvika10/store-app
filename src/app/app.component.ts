import { Component, OnInit } from '@angular/core';
import { setMock } from './utils/mockHelper';
import { ProductsService } from './state/products/products.service';
import { UiService } from './state/ui.service';
import { OnlineStoresService } from './state/online-stores/online-stores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'store-app';

  constructor(private productsService:ProductsService, private onlineStoresService:OnlineStoresService, private uiService: UiService){

  }

  ngOnInit(){
    //add mock data
    setMock();
    this.uiService.updateCurrencyConversion().subscribe();
    setInterval(() => this.uiService.updateCurrencyConversion(), 10000);
    this.productsService.get().subscribe();
    this.onlineStoresService.get().subscribe();
  }
}

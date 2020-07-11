import { Component, OnInit, OnDestroy } from '@angular/core';
import { setMock } from './utils/mockHelper';
import { ProductsService } from './state/store-entities/products/products.service';
import { UiService } from './state/ui.service';
import { OnlineStoresService } from './state/store-entities/online-stores/online-stores.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'store-app';
  isNavOpen:boolean = false;

  private unsubscribe$ = new Subject<void>()

  constructor(private productsService:ProductsService, private onlineStoresService:OnlineStoresService, private uiService: UiService){

  }

  ngOnInit(){
    //add mock data
    setMock();
    this.uiService.updateCurrencyConversion().pipe(takeUntil(this.unsubscribe$)).subscribe();
    setInterval(() => this.uiService.updateCurrencyConversion(), 10000);
    this.productsService.get().pipe(takeUntil(this.unsubscribe$)).subscribe();
    this.onlineStoresService.get().pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

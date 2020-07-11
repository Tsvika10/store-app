import { Component, OnInit } from '@angular/core';
import { OnlineStoresQuery } from 'src/app/state/online-stores/online-stores.query';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {

  constructor(private storesQuery:OnlineStoresQuery) { }

  ngOnInit() {
  }

  getStores(){
    return this.storesQuery.selectAll();
  }

}

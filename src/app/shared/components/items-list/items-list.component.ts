import { Component, OnInit, Input } from '@angular/core';
import { OnlineStoresQuery } from 'src/app/state/online-stores/online-stores.query';
import { map } from 'rxjs/operators';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UiQuery } from 'src/app/state/ui.query';
import { Product } from 'src/app/state/products/product.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() items:Array<any>;
  @Input() notReceived:Array<any>;

  constructor(private onlineStoresQuery: OnlineStoresQuery, public dialog: MatDialog, private uiQuery:UiQuery) { }

  ngOnInit() {
  }

  onAdd(){
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe();
  }

  getItemPrice(item :Product){
    return this.uiQuery.select('currencyConversion').pipe(
      map(v => (
      (v * item.price).toFixed(2)
    )))
  }

  getStoreName(id: number){
    return this.onlineStoresQuery.selectEntity(id).pipe(map(s => s.title))
  }

}

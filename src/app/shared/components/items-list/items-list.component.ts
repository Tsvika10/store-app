import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { OnlineStoresQuery } from 'src/app/state/online-stores/online-stores.query';
import { map, takeUntil } from 'rxjs/operators';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UiQuery } from 'src/app/state/ui.query';
import { Product } from 'src/app/state/products/product.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit, OnDestroy {
  @Input() items:Array<any>;
  @Input() notReceived:Array<any>;
  @Output() onConfirmReceived:EventEmitter<number> = new EventEmitter<number>();

  private unsubscribe$ = new Subject<void>()

  constructor(private onlineStoresQuery: OnlineStoresQuery, public dialog: MatDialog, private uiQuery:UiQuery) { }

  ngOnInit() {
  }

  onAdd(){
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe();
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

  confirmReceived(id){
    this.onConfirmReceived.emit(id);
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

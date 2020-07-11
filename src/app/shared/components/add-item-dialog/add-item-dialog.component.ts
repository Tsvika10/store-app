import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/state/products/product.model';
import { OnlineStoresQuery } from 'src/app/state/online-stores/online-stores.query';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/state/products/products.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private unsubscribe$ = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    private onlineStoresQuery: OnlineStoresQuery,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productsService:ProductsService,
    private fb:FormBuilder,) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(){
    if (!this.form.valid) return;
    this.productsService.add({...this.data});
    this.dialogRef.close();
  }

  getStoresList(){
    return this.onlineStoresQuery.selectAll();
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ["", Validators.required],
      storeId:[null, Validators.required],
      price: [null, Validators.required],
      received: [false, Validators.required],
      deliveryDate: [null, Validators.required]
    });
    this.form.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(v => this.data = v as Product)
  }

  minDate(){
    return new Date()
  }

  
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

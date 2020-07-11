import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/state/products/product.model';
import { OnlineStoresQuery } from 'src/app/state/online-stores/online-stores.query';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/state/products/products.service';
import { ProductsQuery } from 'src/app/state/products/products.query';
import { OnlineStoresService } from 'src/app/state/online-stores/online-stores.service';


@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    private onlineStoresQuery: OnlineStoresQuery,
    private onlineStoreService:OnlineStoresService,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productsService:ProductsService,
    private fb:FormBuilder,
    private productQuery: ProductsQuery) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(){
    if (!this.form.valid) return;
    //get the largest id number of a saved product
    const lastId = this.productQuery.getAll().map(pr => pr.id).reduce((acc ,cur)=>(cur > acc? cur : acc), 0)
    this.productsService.add({...this.data, id:lastId + 1});
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
    this.form.valueChanges.subscribe(v => this.data = v as Product)
  }

  minDate(){
    return new Date()
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayedItemsPageComponent } from './payed-items-page/payed-items-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceivedItemsPageComponent } from './received-items-page/received-items-page.component';



@NgModule({
  declarations: [PayedItemsPageComponent, ReceivedItemsPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }

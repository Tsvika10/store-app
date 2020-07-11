import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayedItemsPageComponent } from './pages/payed-items-page/payed-items-page.component';
import { ReceivedItemsPageComponent } from './pages/received-items-page/received-items-page.component';


const routes: Routes = [
  { path:'payed-items', component:PayedItemsPageComponent },
  { path:'received-items', component:ReceivedItemsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

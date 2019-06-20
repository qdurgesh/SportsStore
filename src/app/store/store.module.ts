import {  NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './cartCheckout.component';
import { RouterModule } from '@angular/router';

 




@NgModule({

  imports:[ModelModule,BrowserModule,FormsModule,RouterModule],
  declarations:[StoreComponent,CounterDirective,CartSummaryComponent,CartDetailComponent,CheckoutComponent],
  exports:[StoreComponent,CartDetailComponent,CheckoutComponent]


})

export class StoreModule{

}

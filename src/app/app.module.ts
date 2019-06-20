import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { StoreModule } from './store/store.module';

import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/cartCheckout.component';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGurad } from './store/storeFirst.guard';






@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    StoreModule,
    RouterModule.forRoot(
      [
        { path:'store',component: StoreComponent,canActivate:[StoreFirstGurad]},
        {path:"cart",component:CartDetailComponent,canActivate:[StoreFirstGurad]},
        {path:"checkout",component:CheckoutComponent,canActivate:[StoreFirstGurad]},
        {
          path: "admin",
          loadChildren: "./admin/admin.module#AdminModule"
        },
        {path:"*",redirectTo:"/store"}
    ]
    )]
  ,
  providers: [StoreFirstGurad],
  bootstrap: [AppComponent]
})
export class AppModule { }

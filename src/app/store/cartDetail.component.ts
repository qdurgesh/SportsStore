import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { RouterModule } from '@angular/router';


@Component(
    {
        templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
    constructor(public cart: Cart) { }
}
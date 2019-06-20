import { Injectable } from "@angular/core";
import { Product } from './product.model';

@Injectable()


export class Cart
{
   public lines:CartLine[]=[];
   public itemCount:number;
   public cartPrice:number;

   addLine(product:Product,quantity:number=1){

    let line=this.lines.find(line=>line.product.id==product.id);
    if(line !=undefined){

        line.quantity+=quantity;

    }
    else{

             this.lines.push(new CartLine(product,quantity));
    
         }

       this.recalculate();

   }
   updateQuantity(product: Product, quantity: number) {
    let line = this.lines.find(line => line.product.id == product.id);
    if (line != undefined) {
    line.quantity = Number(quantity);
    }
    this.recalculate();
    }
    removeLine(id: number) {
    let index = this.lines.findIndex(line => line.product.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
    }
    clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
    }
     recalculate()
     {
        this.cartPrice=0;
        this.itemCount=0;
        this.lines.forEach(x=>{
          this.itemCount +=x.quantity;
          this.cartPrice += (x.quantity * x.product.price);

        })
     }


}
export class CartLine
{


    constructor(public product:Product,public quantity:number){}

    get lineTotal()
    {

        return  this.product.price * this.quantity;
    }
}
import { Component } from "@angular/core";
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';
import { Router } from "@angular/router"

@Component(
{
  selector:"store",
  templateUrl:"store.component.html"




})

export class StoreComponent{
  
public selectedCategory=null;
public productsPerPage=4;
public selectedPage=1



  constructor(private productRepository:ProductRepository, private cart:Cart,private router:Router){}

  get products():Product[]{
  let pageIndex =(this.selectedPage-1) * this.productsPerPage;
    return this.productRepository.getProducts(this.selectedCategory).slice(

        pageIndex,pageIndex+ this.productsPerPage
    );
  }
  get categories():string[]{

    return this.productRepository.getCategories();
  }

  changeCategory(newCategory?:string){

    this.selectedCategory=newCategory;
  }
   /* get pageNumbers():number[]{

    return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage))
      .fill(0).map((x,i)=>i+1);
   } */

   get pageCount():number {


   return  Math.ceil(this.productRepository
      .getProducts(this.selectedCategory).length / this.productsPerPage)

   }
   changePage(newPage:number)
   {
       return this.selectedPage=newPage;
   }
   changePageSize(newSize:number)
   {
       this.productsPerPage=Number(newSize);
       this.changePage(1);
   }

   addProductToCart(product:Product){

    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
   }
   
   
}

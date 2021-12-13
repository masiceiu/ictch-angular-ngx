import { Component } from '@angular/core';

//import { ProductModel } from './../../../models/product/product-model
import { CartService } from './../../../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:any[] = [] ;
 constructor(private cartService : CartService){
    //this.products =  (new ProductModel()).all;
    this.products =  this.cartService.getProducts();
 }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be identified when this product goes on sale');
  }
}
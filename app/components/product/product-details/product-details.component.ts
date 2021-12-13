import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ProductModel } from '../../../models/product/product-model
import { CartService } from './../../../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  products:any[] = [] ;
  constructor(private activatedRoute : ActivatedRoute, private cartService : CartService) { 
    //this.products =  (new ProductModel()).all;
  }
//cart
  addToCart(product:any){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
  
	//private subscriber: any;
  //routuing for details
  ngOnInit() {
   this.activatedRoute.params.subscribe(param => {
      this.product = this.products[+param.id];
    });
    /*
    this.activatedRoute.paramMap.subscribe(param=>{
      this.product = this.products[+param.get('id')];
    })*/
  }

}
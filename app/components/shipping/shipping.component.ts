import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts:Observable<any>;
  constructor(private cartService : CartService) { 

    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
    //this.shippingCosts = this.cartService.getShippingPrices();
  }

}
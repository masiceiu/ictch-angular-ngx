import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class CartService {
  items: any[] = [];
  constructor(private http: HttpClient) { }

  addToCart(product: any) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  getProducts() {

    let products = [{
      id: "1",
      name: "Doe John",
      Ccode: "D21ds12x",
      tags: ["cust2dsa12dsa"],
      last_name: "",
      price: 102,
      description: "Idasn2x2#, email@email.com",
      imageUrl: "https://avatars.githubusercontent.com/u/359395?v=4",
    }, 
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: 'A competetive phone having awesome functionalities'
    }];
    return products;
    //return of(products);
  }
  getShippingPrices() {
    //Observable<any>
    //return this.http.get('/assets/shipping.json');
    return of([
      {
        "type": "Overnight",
        "price": 25.99
      },
      {
        "type": "2-Day",
        "price": 9.99
      },
      {
        "type": "Postal",
        "price": 2.99
      }
    ]);
  }

}
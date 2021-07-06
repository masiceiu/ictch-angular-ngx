import { Injectable } from '@angular/core';

const _years: number = 5;
const _productNames: string[] = 'Sample Product,Sample Product'.split(',');

@Injectable()
export class PagingService {
  getOrders(length = 5): object[] {
    let orders: object[] = [];
    for (let i = 0; i < length; i++) {
      let date = new Date();
      orders.push({
        No: i + 1,
        'Product name': this.randomArray(_productNames)+'-'+(i+1),
        'Bet date': this.addDays(date, -this.random(30)).toLocaleDateString(),
        'Amount': this.random(500, 10) * 100
      });
    }
    return orders;
  }

  random(max: number, min = 0): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomArray(items: any[]): any {
    return items[this.random(items.length)];
  }

  addDays(value: Date, days: number): Date {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate() + days);
  }
}
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    
    private customerList = new BehaviorSubject<any[] | null>(null);
    customerList$ = this.customerList.asObservable();

    readonly url = "";

    constructor(private http:HttpClient) { 
    }

    //get the list of customers
    get(){
        this.http.get<any[]>(this.url).pipe(
            ).subscribe(result => {
                if (result)
                    this.customerList.next(result)
            });
    }

    //add customer
    add(customer: any){
        this.http.post<any>(this.url, customer).subscribe(data => {
            let customer = data;
            if (customer.customerId > 0)  //if customer added successfully
                this.get();  //update the list of customers
        });
    }

    //update customer
    update(customer: any){
        this.http.put<any>(this.url + '\\' + customer.customerId, customer).subscribe(data => {
            let customer = data;
            if (customer.customerId > 0)  //if customer updated successfully
                this.get();  //update the list of customers
        });
    }

    delete(customer: any) {
        this.http.delete<number>(this.url + '\\' + customer.customerId).subscribe(data => {
            if (data > 0) //if deleted successfully
                this.get();  //update the list of customers
        });        
    }
    
}
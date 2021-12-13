import { Component, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
//import { any } from '../model/any';
import { CustomerService } from './services/customer.service';
//import { CustomerDialog } from './dialog/customer-dialog.component';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    displayedColumns: string[] = ['customerId', 'firstName', 'lastName', 'action'];
    //customerList: any[];

    constructor(private custService: CustomerService) {
        this.custService.get();
    }

    ngOnInit(){
        this.custService.customerList$.subscribe(data =>
            //this.customerList = data
        );
    }

    openAddDialog(){
        /*let dialogRef = this.custDialog.open(CustomerDialog, {
            width: '300px',
            data: {
                    action: 'add',
                    customer: { customerId: 0, firstName: '', lastName: '' }
                  } 
        });

        dialogRef.afterClosed().subscribe(result => {
            //add the customer
            if (result)
                this.custService.add(result)    
        });*/
    }

    openEditDialog(customer: any){
       /* let dialogRef = this.custDialog.open(CustomerDialog, {
            width: '300px',
            data: {
                    action: 'edit',
                    customer: {...customer} //shallow copy the customer using spread operator
                  }  
        });

        dialogRef.afterClosed().subscribe(result => {
            //update the customer
            if (result)
                this.custService.update(result)   
        });*/
    }

    delete(customer: any){
        this.custService.delete(customer);
    }

}

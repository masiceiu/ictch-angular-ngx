import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartService } from './../../service/cart.service';
import { CartComponent } from './cart.component';

/*[
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent}
    ]
    */
const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    /*children:[
      {
        path: 'list',
        component: UserListDataComponent
      },
      {
        path: 'add',
        component: InputUserFormComponent
      },
      {
        path: 'edit/:id',
        component: DisplayUserDataComponent
      },
      {
        path: 'view/:id',
        component: DisplayUserDataComponent,
        //outlet:"view"
      },
      {
        path: 'cancel/:id',
        component: DisplayUserDataComponent
      },
      { path: '', redirectTo: 'list'},
    ],*/
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    CartComponent
  ],
  declarations: [
    CartComponent,
  ],
  providers: [CartService]
})
export class CartModule { }
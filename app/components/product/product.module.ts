import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartModule } from './../cart/cart.module';
import { ShippingModule } from './../shipping/shipping.module';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { CartService } from './../../service/cart.service';
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
    component: ProductComponent,
    children:[
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'add',
        component: ProductListComponent
      },
      {
        path: 'edit/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'view/:id',
        component: ProductDetailsComponent,
        //outlet:"view"
      },
      {
        path: 'cancel/:id',
        component: ProductDetailsComponent
      },
      { path: '', redirectTo: 'list', pathMatch:"full"},
      //{ path: '**', component: ProductComponent}
    ],
  },
  //{ path: '**', component: ProductComponent}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CartModule,
    ShippingModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
  ],
  providers: [CartService]
})
export class ProductModule { }
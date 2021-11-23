import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UserModule } from './components/user/user.module';

import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { DefaultLayoutComponent } from './layouts/default/default.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    DefaultLayoutComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes),
    UserModule,
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
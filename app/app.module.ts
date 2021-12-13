import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { DefaultLayoutComponent } from './layouts/default/default.component';

import { HttpInterceptor } from './http.interceptor';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    DefaultLayoutComponent,
    NotFoundComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
  providers: [
    { provide: 'apiBaseUrl', useValue: 'https://reqres.in/api' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }
  ]
})
export class AppModule { }
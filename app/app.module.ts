import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UserModule } from './components/user/user.module';

import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { DefaultLayoutComponent } from './layouts/default/default.component';

import { SettingsService } from './settings.service';
export function loadSettings(settings: SettingsService) {
   return () => settings.load();
}
import { HttpInterceptor } from './http.interceptor';

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
  bootstrap: [AppComponent],
  providers: [
    SettingsService,
    { provide: 'apiBaseUrl', useValue: 'https://reqres.in/api' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: loadSettings, deps: [SettingsService], multi: true }
  ]
})
export class AppModule {
}
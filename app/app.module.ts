import { NgModule, 
  APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, 
  HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfileComponent } from "./pages/profile/profile.component";
import { PageNotFoundComponent } from './pages/page-not-found.component';

import { AppService } from './app.service';
import { HttpInterceptor } from './http.interceptor';
export function loadSettings(settings: AppService) {
   return () => settings.load();
}
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    { provide: 'apiBaseUrl', useValue: 'https://ictcarehome.com/' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: loadSettings, deps: [AppService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


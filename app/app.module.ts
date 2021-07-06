import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import 
{

} from './components/index';
import 
{ 
} from './pages/index';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { PopoverComponent } from './shared/popover/popover.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { CommonComponent } from './shared/components/common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    PopoverComponent,
    FeatureComponent,
    CommonComponent
    ],
  imports: [
    PopoverModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

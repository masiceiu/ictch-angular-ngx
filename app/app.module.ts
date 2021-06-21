import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import 
{

} from './components/index';
import 
{ 
} from './pages/index';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
    ],
  imports: [
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AyatCardModule } from './shared/components/ayat-card/ayat-card.module';
import { AddBtnFixedModule } from './shared/components/add-btn-fixed/add-btn-fixed.module';

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
import { ContainerComponent } from './shared/components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    PopoverComponent,
    FeatureComponent,
    CommonComponent,
    ContainerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    PopoverModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    AyatCardModule,
    AddBtnFixedModule,
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

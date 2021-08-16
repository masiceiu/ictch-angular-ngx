import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


import { AyatCardModule } from './shared/components/ayat-card/ayat-card.module';
import { AddBtnFixedModule } from './shared/components/add-btn-fixed/add-btn-fixed.module';
import { NavCarouselModule } from './shared/components/nav-carousel/nav-carousel.module';
import { AdviceInQuranModule } from './shared/views/advice-in-quran/advice-in-quran.module';
import { NavScrollerModule } from './shared/components/nav-scroller/nav-scroller.module';
import { SelectedIlmModule } from './shared/pages/selected-ilm/selected-ilm.module';
import { IlmChannelModule } from './shared/views/ilm-channel/ilm-channel.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
//import {} from './components/index';
//import {} from './pages/index';
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
    ContainerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PopoverModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    AyatCardModule,
    AddBtnFixedModule,
    NavCarouselModule,
    AdviceInQuranModule,
    NavScrollerModule,
    SelectedIlmModule,
    IlmChannelModule,
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

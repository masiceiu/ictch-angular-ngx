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
  ScrollTopComponent,
  ScrollTopTestComponent,
  GoogleInputToolsComponent,
  GoogleInputToolsTestComponent,
  AsyncHttpRequestTestComponent,
  AudioPlayerTestComponent,
  ReactiveFormTestComponent,
  ProfileEditorComponent,
  ReactiveFormTableComponent,
  PagerComponent,
  PagingComponent,
  PagingTestComponent,
  AmountInWordComponent
} from './components/index';
import 
{ 
  BlogComponent,
  BlogTestComponent, 
  OffcanvasTestComponent,
} from './pages/index';
import { PrintContentComponent } from './components/print-content/print-content.component';
import { PrintContainerComponent } from './components/print-container/print-container.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent, 
    BlogTestComponent,
    AsyncHttpRequestTestComponent,
    OffcanvasTestComponent,
    GoogleInputToolsComponent,
    GoogleInputToolsTestComponent,
    ScrollTopComponent,
    ScrollTopTestComponent,
    AudioPlayerTestComponent,
    ReactiveFormTestComponent,
    ProfileEditorComponent,
    ReactiveFormTableComponent,
    PagerComponent,
    PagingComponent,
    PagingTestComponent,
    AmountInWordComponent,
    PrintContentComponent,
    PrintContainerComponent
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

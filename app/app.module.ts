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

import { PrintPageModule } from './components/print-test/print-page.module';
import { ContentNestedModule } from './components/content-nested/content-nested.module';
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
    AmountInWordComponent
    ],
  imports: [
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ContentNestedModule,
    PrintPageModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

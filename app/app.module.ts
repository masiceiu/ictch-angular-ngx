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
import { ContentNestedModule } from './components/content-nested/content-nested.module';
import { DirectivesDirective } from './directives.directive';
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
    PrintContainerComponent,
    ContentNestedModule,
    DirectivesDirective
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
    ContentNestedModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

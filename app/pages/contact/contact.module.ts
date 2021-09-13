import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent, FilterPipe } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    FilterPipe,
    ContactComponent
  ]
})
export class ContactModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactRoutingModule } from './add-contact-routing.module';
import { AddContactComponent } from './add-contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [AddContactComponent],
  imports: [
    CommonModule,
    AddContactRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AddContactModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateContactRoutingModule } from './update-contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateContactComponent } from './update-contact.component';


@NgModule({
  declarations: [UpdateContactComponent],
  imports: [
    CommonModule,
    UpdateContactRoutingModule,
    FormsModule, ReactiveFormsModule, NgxPaginationModule,SharedModule
  ]
})
export class UpdateContactModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDevenezpropRoutingModule } from './add-devenezprop-routing.module';
import { AddDevenezpropComponent } from './add-devenezprop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [AddDevenezpropComponent],
  imports: [
    CommonModule,
    AddDevenezpropRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AddDevenezpropModule { }

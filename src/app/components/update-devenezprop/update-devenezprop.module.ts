import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDevenezpropRoutingModule } from './update-devenezprop-routing.module';
import { UpdateDevenezpropComponent } from './update-devenezprop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [UpdateDevenezpropComponent],
  imports: [
    CommonModule,
    UpdateDevenezpropRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class UpdateDevenezpropModule { }

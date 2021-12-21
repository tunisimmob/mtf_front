import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDevenezpropRoutingModule } from './list-devenezprop-routing.module';
import { ListDevenezpropComponent } from './list-devenezprop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ListDevenezpropComponent],
  imports: [
    CommonModule,
    ListDevenezpropRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListDevenezpropModule { }

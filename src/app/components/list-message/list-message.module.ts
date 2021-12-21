import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMessageRoutingModule } from './list-message-routing.module';
import { ListMessageComponent } from './list-message.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListMessageComponent],
  imports: [
    CommonModule,
    ListMessageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListMessageModule { }

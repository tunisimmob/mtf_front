import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContactRoutingModule } from './list-contact-routing.module';
import { ListContactComponent } from './list-contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListContactComponent],
  imports: [
    CommonModule,
    ListContactRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListContactModule { }

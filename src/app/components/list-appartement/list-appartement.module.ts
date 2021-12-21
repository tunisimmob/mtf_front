import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppartementRoutingModule } from './list-appartement-routing.module';
import { ListAppartementComponent } from './list-appartement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ListAppartementComponent],
  imports: [
    CommonModule,
    ListAppartementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxPaginationModule
  ]
})
export class ListAppartementModule { }

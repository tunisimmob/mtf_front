import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAppartementRoutingModule } from './add-appartement-routing.module';
import { AddAppartementComponent } from './add-appartement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [AddAppartementComponent],
  imports: [
    CommonModule,
    AddAppartementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AddAppartementModule { }

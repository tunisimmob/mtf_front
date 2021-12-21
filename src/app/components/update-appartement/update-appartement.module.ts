import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateAppartementRoutingModule } from './update-appartement-routing.module';
import { UpdateAppartementComponent } from './update-appartement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [UpdateAppartementComponent],
  imports: [
    CommonModule,
    UpdateAppartementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class UpdateAppartementModule { }

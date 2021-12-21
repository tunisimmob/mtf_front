import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePresentationRoutingModule } from './update-presentation-routing.module';
import { UpdatePresentationComponent } from './update-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [UpdatePresentationComponent],
  imports: [
    CommonModule,
    UpdatePresentationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class UpdatePresentationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPresentationRoutingModule } from './add-presentation-routing.module';
import { AddPresentationComponent } from './add-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [AddPresentationComponent],
  imports: [
    CommonModule,
    AddPresentationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AddPresentationModule { }

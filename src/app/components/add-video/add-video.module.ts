import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVideoRoutingModule } from './add-video-routing.module';
import { AddVideoComponent } from './add-video.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [AddVideoComponent],
  imports: [
    CommonModule,
    AddVideoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    NgxLoadingModule
  ]
})
export class AddVideoModule { }

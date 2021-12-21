import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateVideoRoutingModule } from './update-video-routing.module';
import { UpdateVideoComponent } from './update-video.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [UpdateVideoComponent],
  imports: [
    CommonModule,
    UpdateVideoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class UpdateVideoModule { }

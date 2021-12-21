import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVideoRoutingModule } from './list-video-routing.module';
import { ListVideoComponent } from './list-video.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListVideoComponent],
  imports: [
    CommonModule,
    ListVideoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListVideoModule { }

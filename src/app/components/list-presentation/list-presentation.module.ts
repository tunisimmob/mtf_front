import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPresentationRoutingModule } from './list-presentation-routing.module';
import { ListPresentationComponent } from './list-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListPresentationComponent],
  imports: [
    CommonModule,
    ListPresentationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListPresentationModule { }

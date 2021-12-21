import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { ListActualitesRoutingModule } from './list-actualites-routing.module';
import { ListActualitesComponent } from './list-actualites.component';


@NgModule({
  declarations: [ListActualitesComponent],
  imports: [
    CommonModule,
    ListActualitesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxPaginationModule
  ]
})
export class ListActualitesModule { }

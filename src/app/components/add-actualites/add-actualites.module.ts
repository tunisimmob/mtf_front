import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

import { AddActualitesRoutingModule } from './add-actualites-routing.module';
import { AddActualitesComponent } from './add-actualites.component';


@NgModule({
  declarations: [AddActualitesComponent],
  imports: [
    CommonModule,
    AddActualitesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AddActualitesModule { }

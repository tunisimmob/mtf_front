import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjetRoutingModule } from './add-projet-routing.module';
import { AddProjetComponent } from './add-projet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [AddProjetComponent],
  imports: [
    CommonModule,
    AddProjetRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AddProjetModule { }

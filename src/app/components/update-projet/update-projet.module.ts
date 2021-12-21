import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProjetRoutingModule } from './update-projet-routing.module';
import { UpdateProjetComponent } from './update-projet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [UpdateProjetComponent],
  imports: [
    CommonModule,
    UpdateProjetRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class UpdateProjetModule { }

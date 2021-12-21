import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjetRoutingModule } from './list-projet-routing.module';
import { ListProjetComponent } from './list-projet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListProjetComponent],
  imports: [
    CommonModule,
    ListProjetRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxPaginationModule
  ]
})
export class ListProjetModule { }

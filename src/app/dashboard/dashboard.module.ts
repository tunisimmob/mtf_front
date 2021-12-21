import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ChartsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

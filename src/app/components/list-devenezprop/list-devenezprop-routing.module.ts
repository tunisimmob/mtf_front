import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDevenezpropComponent } from './list-devenezprop.component';


const routes: Routes = [
  {
    path: '',
    component: ListDevenezpropComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDevenezpropRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDevenezpropComponent } from './add-devenezprop.component';


const routes: Routes = [
  {
    path: '',
    component: AddDevenezpropComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDevenezpropRoutingModule { }

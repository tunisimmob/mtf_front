import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDevenezpropComponent } from './update-devenezprop.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateDevenezpropComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDevenezpropRoutingModule { }

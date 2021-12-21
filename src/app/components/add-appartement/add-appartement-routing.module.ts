import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAppartementComponent } from './add-appartement.component';


const routes: Routes = [
  {
    path: '',
    component: AddAppartementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAppartementRoutingModule { }

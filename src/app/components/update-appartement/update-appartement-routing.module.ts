import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateAppartementComponent } from './update-appartement.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateAppartementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAppartementRoutingModule { }

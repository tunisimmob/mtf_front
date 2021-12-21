import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjetComponent } from './add-projet.component';


const routes: Routes = [
  {
    path: '',
    component: AddProjetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProjetRoutingModule { }

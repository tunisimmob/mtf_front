import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddActualitesComponent } from './add-actualites.component';


const routes: Routes = [
  {
    path: '',
    component: AddActualitesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddActualitesRoutingModule { }

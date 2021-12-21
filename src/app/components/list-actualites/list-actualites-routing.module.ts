import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListActualitesComponent } from './list-actualites.component';


const routes: Routes = [
  {
    path: '',
    component: ListActualitesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActualitesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAppartementComponent } from './list-appartement.component';


const routes: Routes = [
  {
    path: '',
    component: ListAppartementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAppartementRoutingModule { }

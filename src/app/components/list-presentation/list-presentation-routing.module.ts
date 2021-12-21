import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPresentationComponent } from './list-presentation.component';


const routes: Routes = [
  {
    path: '',
    component: ListPresentationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPresentationRoutingModule { }

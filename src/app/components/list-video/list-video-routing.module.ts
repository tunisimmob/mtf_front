import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVideoComponent } from './list-video.component';


const routes: Routes = [
  {
    path: '',
    component: ListVideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListVideoRoutingModule { }

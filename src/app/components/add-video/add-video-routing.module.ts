import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVideoComponent } from './add-video.component';


const routes: Routes = [
  {
    path: '',
    component: AddVideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddVideoRoutingModule { }

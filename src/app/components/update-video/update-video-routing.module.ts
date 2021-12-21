import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateVideoComponent } from './update-video.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateVideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateVideoRoutingModule { }

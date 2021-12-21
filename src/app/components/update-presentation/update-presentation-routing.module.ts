import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePresentationComponent } from './update-presentation.component';


const routes: Routes = [
  {
    path: '',
    component: UpdatePresentationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePresentationRoutingModule { }

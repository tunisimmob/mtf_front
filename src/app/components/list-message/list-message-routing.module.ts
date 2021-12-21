import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMessageComponent } from './list-message.component';


const routes: Routes = [  {
    path: '',
    component: ListMessageComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMessageRoutingModule { }

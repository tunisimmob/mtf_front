import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }

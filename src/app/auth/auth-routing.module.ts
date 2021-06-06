import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { redusers } from './store/reducers';

const routes: Routes = [
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', redusers)
  ]
})
export class AuthRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { BackendErrorMessageModule } from '../shared/backendErrorMessagesModule/backend-error-message/backend-error-message.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
    BackendErrorMessageModule
  ],
  exports: [],
  providers: [AuthService, PersistanceService]
})
export class AuthModule { }

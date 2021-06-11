import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { LoginAction, LoginFailureAction } from '../../store/actions/login.action';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  });
  public errors$ = this.store.pipe(select(LoginFailureAction));

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    const request: LoginRequestInterface = {
      user: this.loginForm.value
    };
    this.store.dispatch(LoginAction({login: request}));
  }

}

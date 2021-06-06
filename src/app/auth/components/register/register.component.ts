import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public regForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store
    ) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.store.dispatch(registerAction(this.regForm.value));
  }
}

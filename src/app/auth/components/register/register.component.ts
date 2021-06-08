import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable, Subject } from 'rxjs';
import { isSubmittingSelector } from '../../store/selectors';
import { AuthService } from '../../services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();
  public regForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]]
  });
  isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector));

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authSvc: AuthService
    ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.regForm.value
    };
    this.store.dispatch(registerAction({request}));
    // this.authSvc.register(this.regForm.value)
    // .pipe(
    //   takeUntil(this.ngUnsubscribe)
    // )
    // .subscribe({
    //   next: currentUser => {
    //     console.log(currentUser);
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
  }
}

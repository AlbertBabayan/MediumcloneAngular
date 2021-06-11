import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { LoginAction, LoginFailureAction, LoginSuccesAction } from '../actions/login.action';


@Injectable()

export class LoginEffect {
    login$ = createEffect(() => this.actions$.pipe(
        ofType(LoginAction),
        switchMap(({ login }) => {
            return this.authSvc.login(login)
                .pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.presistantSvc.setToken('accessToken', currentUser.token);
                        return LoginSuccesAction({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            LoginFailureAction({ errors: errorResponse.error.errors })
                        );
                    })
                );
        })
    ));

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(LoginSuccesAction),
        tap(() => {
            this.router.navigate(['/'], { relativeTo: this.activeRoute });
            // this.router.navigateByUrl('/');
        })
    ),
        { dispatch: false });
    constructor(
        private actions$: Actions,
        private authSvc: AuthService,
        private presistantSvc: PersistanceService,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) { }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { registerAction, registerFailurAction, registerSuccesAction } from '../actions/register.action';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable()

export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(              // stanum enq bolor action-nery
        ofType(registerAction),
        switchMap((request) => {                                    // switchMap-y petq e veradardzni action, aveli konkret dispatch e linum
            return this.authSvc.register(request).pipe(             //
                map((currentUser: CurrentUserInterface) => {        // succes, currentUser-y ekele servizic
                    this.presistantSvc.setToken('accesToken', currentUser.token);
                    return registerSuccesAction({ currentUser });   // poxancum enq tvyal actionin currentUser-y
                }),
                catchError((errorResponse: HttpErrorResponse) => {  // failur
                    return of(registerFailurAction({ errors: errorResponse.error.errors }));
                })
            );
        })
    ));

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(registerSuccesAction),
        tap(() => {                                                   // tap-y chi veradardznum action
            this.router.navigate(['/'], { relativeTo: this.activeRoute });
            // this.router.navigateByUrl('/');
        })
    ),
        { dispatch: false });                                           // petq e nshel vor action dispatch chi anum
    constructor(
        private actions$: Actions,
        private authSvc: AuthService,
        private presistantSvc: PersistanceService,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) { }
}

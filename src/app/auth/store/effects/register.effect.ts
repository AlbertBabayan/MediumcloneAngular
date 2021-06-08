import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { registerAction, registerFailurAction, registerSuccesAction } from '../actions/register.action';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { of } from 'rxjs';


@Injectable()

export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(          // stanum enq bolor action-nery
        ofType(registerAction),
        switchMap(({request}) => {                              // tvyal actioni prop-ery karoxenq kardal switchMap-i mej
            return this.authSvc.register(request).pipe(         //
                map((currentUser: CurrentUserInterface) => {    // succes, currentUser-y ekele servizic
                    return registerSuccesAction({currentUser}); // poxancum enq tvyal actionin currentUser-y
                }),
                catchError(() => {                            // failur
                    return of(registerFailurAction());
                })
            );
        })
    ));
    constructor(private actions$: Actions, private authSvc: AuthService) { }
}

import { createAction, props } from '@ngrx/store';

import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';


export const LoginAction = createAction(
    '[Auth] Login',
    props<{ login: LoginRequestInterface }>()
);

export const LoginSuccesAction = createAction(
    '[Auth] Login_Succes',
    props<{ currentUser: CurrentUserInterface }>()
);

export const LoginFailureAction = createAction(
    '[Auth] Login_Failure',
    props<{ errors: BackendErrorsInterface }>()
);

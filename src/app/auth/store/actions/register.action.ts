import { createAction, props } from '@ngrx/store';

import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { ActionTypes } from '../action.types';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    (data) => ({user: data})
);
export const registerSuccesAction = createAction(
    ActionTypes.REGISTER_SUCCES,
    props<{ currentUser: CurrentUserInterface }>()
);
export const registerFailurAction = createAction(
    ActionTypes.REGISTER_FAILUR,
    props<{ errors: BackendErrorsInterface }>()
);

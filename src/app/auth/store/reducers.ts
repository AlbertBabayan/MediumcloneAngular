import { createReducer, on, Action } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { registerAction, registerFailurAction, registerSuccesAction } from './actions/register.action';

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoggined: null,
    validationErrors: null,
    currentUser: null,

};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: !state.isSubmitting,
            validationErrors: null
        })
    ),
    on(
        registerSuccesAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: !state.isSubmitting,
            currentUser: action.currentUser,
            isLoggined: true
        })
    ),
    on(
        registerFailurAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: !state.isSubmitting,
            validationErrors: action.errors
        })
    )
);

export function reducer(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}

import { createReducer, on, Action } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { registerAction } from './actions/register.action';

const initialState: AuthStateInterface = {
    isSubmitting: false,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: !state.isSubmitting
        })
    )
);

export function reducer(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}

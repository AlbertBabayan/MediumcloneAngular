import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeathureSelectore = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
    authFeathureSelectore,
    (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    authFeathureSelectore,
    (authState: AuthStateInterface) => authState.validationErrors
);

export const isLogedinSelector = createSelector(
    authFeathureSelectore,
    (authState: AuthStateInterface) => authState.isLoggined
);

export const currentUserSelector = createSelector(
    authFeathureSelectore,
    (authState: AuthStateInterface) => authState.currentUser
);

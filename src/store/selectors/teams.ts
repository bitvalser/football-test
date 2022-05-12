import { AppState } from '@store/reducers';
import { createSelector } from 'reselect';

const teamsStoreSelector = (state: AppState) => state.teams;

export const teamsDataSelector = createSelector(teamsStoreSelector, (state) => state.keys.map((id) => state.teams[id]));
export const teamDetailsDataSelector = (id: number) => createSelector(teamsStoreSelector, (state) => state.teams[id]);
export const teamsLoadingSelector = createSelector(teamsStoreSelector, (state) => state.loading);
export const teamDetailsLoadingSelector = createSelector(teamsStoreSelector, (state) => state.teamLoading);

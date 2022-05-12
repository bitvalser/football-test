import { AppState } from '@store/reducers';
import { createSelector } from 'reselect';

const teamMatchesStoreSelector = (state: AppState) => state.teamMatches;

export const matchDataSelector = (id: number) => createSelector(teamMatchesStoreSelector, (state) => state.matches[id]);
export const teamMatchesDataSelector = (id: number) =>
  createSelector(teamMatchesStoreSelector, (state) => (state.teamMatches[id] || []).map((id) => state.matches[id]));
export const matchLoadingSelector = createSelector(teamMatchesStoreSelector, (state) => state.loadingMatches);

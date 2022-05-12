import { combineReducers } from '@reduxjs/toolkit';
import 'react-redux';
import * as fromTeams from './teams';
import * as fromTeamMatches from './team-matches';

export interface AppState {
  teams: fromTeams.State;
  teamMatches: fromTeamMatches.State;
}

export const rootReducer = combineReducers<AppState>({
  teams: fromTeams.reducer,
  teamMatches: fromTeamMatches.reducer,
});

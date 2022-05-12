import { createReducer } from 'typesafe-actions';
import { MatchModel } from '@core/interfaces/match.interface';
import { getTeamMatchesAction, TeamMatchesActionUnion } from '@store/actions/team-matches';

export interface State {
  loadingMatches: boolean;
  matches: {
    [matchId: number]: MatchModel;
  };
  teamMatches: {
    [teamId: number]: number[];
  };
}

const initialState: State = {
  loadingMatches: false,
  matches: {},
  teamMatches: {},
};

export const reducer = createReducer<State, TeamMatchesActionUnion>(initialState)
  .handleAction(getTeamMatchesAction.request, (state) => ({
    ...state,
    loadingMatches: true,
  }))
  .handleAction(getTeamMatchesAction.failure, (state) => ({
    ...state,
    loadingMatches: false,
  }))
  .handleAction(getTeamMatchesAction.success, (state, { payload: { matches, teamId } }) => ({
    ...state,
    loadingMatches: false,
    matches: {
      ...state.matches,
      ...matches.reduce(
        (acc, val) => ({
          ...acc,
          [val.id]: val,
        }),
        {},
      ),
    },
    teamMatches: {
      ...state.teamMatches,
      [teamId]: matches.map((item) => item.id),
    },
  }));

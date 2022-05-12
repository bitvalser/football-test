import { TeamModel } from '@core/interfaces/team.interface';
import { getTeamDetailAction, getTeamsAction, TeamsActionUnion } from '@store/actions/teams';
import { createReducer } from 'typesafe-actions';

export interface State {
  loading: boolean;
  teamLoading: boolean;
  teams: {
    [id: number]: TeamModel;
  };
  keys: number[];
}

const initialState: State = {
  loading: false,
  teamLoading: false,
  teams: {},
  keys: [],
};

export const reducer = createReducer<State, TeamsActionUnion>(initialState)
  .handleAction(getTeamsAction.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getTeamsAction.failure, (state) => ({
    ...state,
    loading: false,
  }))
  .handleAction(getTeamsAction.success, (state, { payload: teams }) => ({
    ...state,
    loading: false,
    teams: {
      ...state.teams,
      ...teams.reduce(
        (acc, val) => ({
          ...acc,
          [val.id]: val,
        }),
        {},
      ),
    },
    keys: teams.map((item) => item.id),
  }))
  .handleAction(getTeamDetailAction.request, (state) => ({
    ...state,
    teamLoading: true,
  }))
  .handleAction(getTeamDetailAction.failure, (state) => ({
    ...state,
    teamLoading: false,
  }))
  .handleAction(getTeamDetailAction.success, (state, { payload: team }) => ({
    ...state,
    teamLoading: false,
    teams: {
      ...state.teams,
      [team.id]: {
        ...(state.teams[team.id] || {}),
        ...team,
      },
    },
  }));

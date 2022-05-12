import { MatchModel } from '@core/interfaces/match.interface';
import { ActionType, createAsyncAction } from 'typesafe-actions';

export enum TeamMatchesTypes {
  GetTeamMatches = '[TeamMatchesTypes] GetTeamMatches',
  GetTeamMatchesSuccess = '[TeamMatchesTypes] GetTeamMatchesSuccess',
  GetTeamMatchesFailed = '[TeamMatchesTypes] GetTeamMatchesFailed',
}

export const getTeamMatchesAction = createAsyncAction(
  TeamMatchesTypes.GetTeamMatches,
  TeamMatchesTypes.GetTeamMatchesSuccess,
  TeamMatchesTypes.GetTeamMatchesFailed,
)<{ id: number }, { teamId: number; matches: MatchModel[] }, string>();

export type TeamMatchesActionUnion = ActionType<typeof getTeamMatchesAction>;

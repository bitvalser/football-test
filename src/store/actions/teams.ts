import { TeamModel } from '@core/interfaces/team.interface';
import { ActionType, createAsyncAction } from 'typesafe-actions';

export enum TeamsTypes {
  GetTeams = '[TeamsTypes] GetTeams',
  GetTeamsSuccess = '[TeamsTypes] GetTeamsSuccess',
  GetTeamsFailed = '[TeamsTypes] GetTeamsFailed',

  GetTeamDetail = '[TeamsTypes] GetTeamDetail',
  GetTeamDetailSuccess = '[TeamsTypes] GetTeamDetailSuccess',
  GetTeamDetailFailed = '[TeamsTypes] GetTeamDetailFailed',
}

export const getTeamsAction = createAsyncAction(
  TeamsTypes.GetTeams,
  TeamsTypes.GetTeamsSuccess,
  TeamsTypes.GetTeamsFailed,
)<void, TeamModel[], string>();

export const getTeamDetailAction = createAsyncAction(
  TeamsTypes.GetTeamDetail,
  TeamsTypes.GetTeamDetailSuccess,
  TeamsTypes.GetTeamDetailFailed,
)<{ id: number }, TeamModel, string>();

export type TeamsActionUnion = ActionType<typeof getTeamsAction | typeof getTeamDetailAction>;

import { TeamMatchStatus } from '@core/constants/team-match-status.constants';
import { MatchModel } from '@core/interfaces/match.interface';
import { TeamModel } from '@core/interfaces/team.interface';
import ApiClient from './api.service';

export const getTeams = (): Promise<TeamModel[]> => {
  return ApiClient.get<{ teams: TeamModel[] }>('/teams').then((response) => response.data.teams);
};

export const getTeam = (id: number): Promise<TeamModel> => {
  return ApiClient.get<TeamModel>(`/teams/${id}`).then((response) => response.data);
};

export const getTeamMatches = (
  id: number,
  status: TeamMatchStatus = TeamMatchStatus.Scheduled,
  limit: number = 10,
): Promise<MatchModel[]> => {
  return ApiClient.get<{ matches: MatchModel[] }>(`/teams/${id}/matches?limit=${limit}&status=${status}`).then(
    (response) => response.data.matches,
  );
};

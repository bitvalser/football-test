import { MatchModel } from '@core/interfaces/match.interface';
import { TeamModel } from '@core/interfaces/team.interface';
import ApiClient from './api.service';

export const getTeams = (): Promise<TeamModel[]> => {
  return ApiClient.get<{ teams: TeamModel[] }>('/teams').then((response) => response.data.teams);
};

export const getTeam = (id: number): Promise<TeamModel> => {
  return ApiClient.get<TeamModel>(`/teams/${id}`).then((response) => response.data);
};

export const getTeamMatches = (id: number, limit: number = 10): Promise<MatchModel[]> => {
  return ApiClient.get<{ matches: MatchModel[] }>(`/teams/${id}/matches?limit=${limit}`).then(
    (response) => response.data.matches,
  );
};

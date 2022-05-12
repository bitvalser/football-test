import { TeamMatchStatus } from '@core/constants/team-match-status.constants';
import { TeamMatchType } from '@core/constants/team-match-type.constants';

interface MatchTeam {
  id: number;
  name: string;
}

interface MatchScore {
  homeTeam: number;
  awayTeam: number;
}

export interface MatchModel {
  id: number;
  utcDate: string;
  status: TeamMatchStatus;
  score: {
    winner: TeamMatchType;
    fullTime: MatchScore;
    halfTime: MatchScore;
    extraTime: MatchScore;
    penalties: MatchScore;
  };
  competition: {
    id: number;
    name: string;
  };
  homeTeam: MatchTeam;
  awayTeam: MatchTeam;
}

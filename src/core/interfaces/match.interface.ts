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
  score: {
    winner: TeamMatchType;
    fullTime: MatchScore;
    halfTime: MatchScore;
    extraTime: MatchScore;
    penalties: MatchScore;
  };
  homeTeam: MatchTeam;
  awayTeam: MatchTeam;
}

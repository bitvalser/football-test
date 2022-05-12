import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMatchType } from '@core/constants/team-match-type.constants';
import * as Styled from './match-item.styles';
import { TeamMatchStatus } from '@core/constants/team-match-status.constants';

interface MatchItemProps {
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  competition: string;
  winner: TeamMatchType;
  status: TeamMatchStatus;
  date: string;
}

const MatchItem: FC<MatchItemProps> = memo(
  ({ awayScore, awayTeam, homeScore, homeTeam, winner, date, competition, status }) => {
    const [t] = useTranslation();

    const formattedDate = new Date(date).toLocaleDateString();

    return (
      <Styled.Container>
        <Styled.Header>
          <Styled.CompetitionName>{competition}</Styled.CompetitionName>
          <Styled.Date>{`\t${formattedDate}`}</Styled.Date>
        </Styled.Header>
        <Styled.Footer>
          <Styled.TeamName winner={winner === TeamMatchType.Home}>{homeTeam}</Styled.TeamName>
          <Styled.VersusText>{`\t${t('teams.versus')}\t`}</Styled.VersusText>
          <Styled.TeamName winner={winner === TeamMatchType.Away}>{awayTeam}</Styled.TeamName>
          {status === TeamMatchStatus.Finished ? (
            <Styled.ScoreText>{`\t\t${homeScore}:${awayScore}`}</Styled.ScoreText>
          ) : null}
        </Styled.Footer>
      </Styled.Container>
    );
  },
);

export default MatchItem;

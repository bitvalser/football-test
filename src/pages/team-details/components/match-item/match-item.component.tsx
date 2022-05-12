import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMatchType } from '@core/constants/team-match-type.constants';
import * as Styled from './match-item.styles';

interface MatchItemProps {
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  winner: TeamMatchType;
}

const MatchItem: FC<MatchItemProps> = memo(({ awayScore, awayTeam, homeScore, homeTeam, winner }) => {
  const [t] = useTranslation();

  return (
    <Styled.Container>
      <Styled.TeamName winner={winner === TeamMatchType.Home}>{homeTeam}</Styled.TeamName>
      <Styled.VersusText>{t('team.versus')}</Styled.VersusText>
      <Styled.TeamName winner={winner === TeamMatchType.Away}>{awayTeam}</Styled.TeamName>
      <Styled.ScoreText>{`${homeScore}:${awayScore}`}</Styled.ScoreText>
    </Styled.Container>
  );
});

export default MatchItem;

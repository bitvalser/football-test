import styled from 'styled-components/native';
import CommonStyles from '@theme/common';

export const Container = styled.View`
  ${CommonStyles.shadow}
  display: flex;
  flex-direction: column;
  padding: 6px 8px;
  margin: 4px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallette.light};
`;

export const TeamName = styled.Text<{ winner: boolean }>`
  font-size: 16px;
  font-weight: ${({ winner }) => (winner ? 'bold' : 500)};
  color: ${({ theme, winner }) => (winner ? theme.pallette.primary : theme.pallette.text)};
`;

export const ScoreText = styled.Text`
  margin-left: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.pallette.text};
`;

export const VersusText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.pallette.text};
`;

export const Header = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CompetitionName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.pallette.text};
`;

export const Date = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.pallette.text};
`;

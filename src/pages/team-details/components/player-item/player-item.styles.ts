import styled from 'styled-components/native';
import CommonStyles from '@theme/common';

export const Container = styled.View`
  ${CommonStyles.shadow}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 8px;
  margin: 4px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallette.light};
`;

export const PlayerName = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.pallette.text};
`;

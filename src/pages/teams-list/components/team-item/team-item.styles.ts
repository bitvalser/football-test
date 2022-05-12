import styled from 'styled-components/native';
import CommonStyles from '@theme/common';

export const Container = styled.View`
  ${CommonStyles.shadow}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  margin: 4px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallette.light};
`;

export const TeamName = styled.Text`
  margin-left: 6px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.pallette.text};
`;

export const Logo = styled.Image`
  width: 32px;
  height: 32px;
`;

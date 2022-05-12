import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SectionContainer = styled.View`
  padding: 4px;
  background-color: ${({ theme }) => theme.pallette.light};
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.pallette.text};
`;

export const LoadingContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const TeamInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const TeamName = styled.Text`
  margin-left: 6px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.pallette.text};
`;

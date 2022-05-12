import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SectionContainer = styled.View`
  padding: 4px;
  background-color: ${({ theme }) => theme.pallette.light};
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.pallette.text};
`;

export const LoadingContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

import { ComponentType } from 'react';
import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { TeamModel } from '@core/interfaces/team.interface';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.pallette.primary};
`;

export const TeamsList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`` as never as ComponentType<FlatListProps<TeamModel>>;

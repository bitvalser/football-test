import React, { FC, useCallback, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppRoutes, AppRoutesParamList } from '@navigators/root.navigator';
import { useNavigation } from '@react-navigation/native';
import { teamsDataSelector, teamsLoadingSelector } from '@store/selectors/teams';
import { getTeamsAction } from '@store/actions/teams';
import { EmptyList } from '@core/components/empty-list';
import * as Styled from './teams-list.styles';
import { TeamItem } from './components/team-item';
import { useTheme } from 'styled-components';

type TeamsListPageNavigationProp = NativeStackNavigationProp<AppRoutesParamList, AppRoutes.TeamsList>;

const TeamsListPage: FC = () => {
  const navigation = useNavigation<TeamsListPageNavigationProp>();
  const theme = useTheme();
  const dispatch = useDispatch();
  const teams = useSelector(teamsDataSelector);
  const isTeamsLoading = useSelector(teamsLoadingSelector);

  useEffect(() => {
    dispatch(getTeamsAction.request());
  }, [dispatch]);

  const handleUpdate = () => {
    dispatch(getTeamsAction.request());
  };

  const handleTeamSelect = useCallback(
    (id: number, name: string) => {
      navigation.navigate(AppRoutes.TeamDetails, { id, name });
    },
    [navigation],
  );

  return (
    <Styled.Container>
      <Styled.TeamsList
        refreshControl={
          <RefreshControl refreshing={isTeamsLoading} onRefresh={handleUpdate} colors={[theme.pallette.primary]} />
        }
        data={teams}
        renderItem={({ item }) => (
          <TeamItem id={item.id} logo={item.crestUrl} name={item.name} onSelect={handleTeamSelect} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<EmptyList />}
      />
    </Styled.Container>
  );
};

export default TeamsListPage;

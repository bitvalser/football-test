import React, { FC, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, RefreshControl, SectionList, SectionListData } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { TeamLogo } from '@core/components/team-logo';
import { MatchModel } from '@core/interfaces/match.interface';
import { PlayerModel } from '@core/interfaces/player.interface';
import { AppRoutes, AppRoutesParamList } from '@navigators/root.navigator';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getTeamMatchesAction } from '@store/actions/team-matches';
import { getTeamDetailAction } from '@store/actions/teams';
import { matchLoadingSelector, teamMatchesDataSelector } from '@store/selectors/team-matches';
import { teamDetailsDataSelector, teamDetailsLoadingSelector } from '@store/selectors/teams';
import { EmptyList } from '@core/components/empty-list';
import { MatchItem } from './components/match-item';
import { PlayerItem } from './components/player-item';
import * as Styled from './team-details.styles';

type TeamsListPageNavigationProp = RouteProp<AppRoutesParamList, AppRoutes.TeamDetails>;
type TeamSections = Readonly<[SectionListData<PlayerModel>, SectionListData<MatchModel>]>;

const TeamDetailsPage: FC = () => {
  const [t] = useTranslation();
  const { params } = useRoute<TeamsListPageNavigationProp>();
  const teamId = params.id;
  const dispatch = useDispatch();
  const theme = useTheme();
  const team = useSelector(teamDetailsDataSelector(teamId));
  const isTeamLoading = useSelector(teamDetailsLoadingSelector);
  const matches = useSelector(teamMatchesDataSelector(teamId));
  const isMatchLoading = useSelector(matchLoadingSelector);

  const sections = useMemo<TeamSections>(
    () => [
      {
        title: t('teams.players'),
        key: 'players',
        renderItem: ({ item }) => <PlayerItem name={item.name} />,
        data: team.squad || [],
        keyExtractor: (item) => item.id.toString(),
      },
      {
        title: t('teams.matches'),
        key: 'matches',
        renderItem: ({ item: { score, awayTeam, homeTeam, competition, utcDate, status } }) => (
          <MatchItem
            awayScore={score.fullTime.awayTeam}
            awayTeam={awayTeam.name}
            homeScore={score.fullTime.homeTeam}
            homeTeam={homeTeam.name}
            winner={score.winner}
            competition={competition.name}
            date={utcDate}
            status={status}
          />
        ),
        data: matches,
        keyExtractor: (item) => item.id.toString(),
      },
    ],
    [team, matches, t],
  ) as ReadonlyArray<SectionListData<PlayerModel | MatchModel>>;

  useEffect(() => {
    dispatch(getTeamDetailAction.request({ id: teamId }));
    dispatch(getTeamMatchesAction.request({ id: teamId }));
  }, [dispatch, teamId]);

  const handleUpdate = () => {
    dispatch(getTeamDetailAction.request({ id: teamId }));
  };

  return (
    <Styled.Container>
      <SectionList
        stickySectionHeadersEnabled
        refreshControl={
          <RefreshControl refreshing={isTeamLoading} onRefresh={handleUpdate} colors={[theme.pallette.primary]} />
        }
        sections={sections}
        renderSectionHeader={({ section }) => (
          <Styled.SectionContainer>
            <Styled.SectionTitle>{section.title}</Styled.SectionTitle>
          </Styled.SectionContainer>
        )}
        renderSectionFooter={({ section }) =>
          section.key === 'matches' && isMatchLoading ? (
            <Styled.LoadingContainer>
              <ActivityIndicator color={theme.pallette.primary} />
            </Styled.LoadingContainer>
          ) : null
        }
        ListEmptyComponent={<EmptyList />}
        ListHeaderComponent={
          team ? (
            <Styled.TeamInfoContainer>
              <TeamLogo url={team.crestUrl} size={64} />
              <Styled.TeamName>{team.name}</Styled.TeamName>
            </Styled.TeamInfoContainer>
          ) : null
        }
      />
    </Styled.Container>
  );
};

export default TeamDetailsPage;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TeamsListPage } from '@pages/teams-list';
import TeamDetailsPage from '@pages/team-details/team-details.component';
import { useTranslation } from 'react-i18next';

export enum AppRoutes {
  TeamsList = 'TeamsList',
  TeamDetails = 'TeamDetails',
}

export type AppRoutesParamList = {
  [AppRoutes.TeamsList]: {};
  [AppRoutes.TeamDetails]: {
    id: number;
    name: string;
  };
};

const RootStack = createNativeStackNavigator<AppRoutesParamList>();

export const RootNavigator = () => {
  const [t] = useTranslation();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{
            title: t('teams.title'),
          }}
          name={AppRoutes.TeamsList}
          component={TeamsListPage}
        />
        <RootStack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name={AppRoutes.TeamDetails}
          component={TeamDetailsPage}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

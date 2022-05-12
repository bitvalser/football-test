import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigators/root.navigator';
import { I18nextProvider } from 'react-i18next';
import { UIManager, Platform, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import i18n from './core/i18n';
import { defaultTheme } from './theme';
import { ErrorBoundary } from '@core/components/error-boundary';
import createStore from '@store/index';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const { store } = createStore();

const App = () => (
  <>
    <StatusBar hidden translucent backgroundColor="transparent" />
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={null}>
            <ErrorBoundary>
              <RootNavigator />
            </ErrorBoundary>
          </Suspense>
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  </>
);

export default App;

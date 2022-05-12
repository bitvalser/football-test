import { AppTheme } from '../theme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

declare module 'react-native-config' {
  export interface NativeConfig {
    FOOTBALL_API_URL: string;
  }
}

import React, { FC, memo } from 'react';
import emptyLogoImage from '@assets/images/no-pictures.png';
import { SvgUri } from 'react-native-svg';
import * as Styled from './team-logo.styles';

interface TeamLogoProps {
  url: string;
  size?: number;
}

const TeamLogo: FC<TeamLogoProps> = memo(({ url, size = 32 }) => {
  const isSvg = url && url.endsWith('svg');

  return !isSvg ? (
    <Styled.Logo size={size} source={url ? { uri: url } : emptyLogoImage} />
  ) : (
    <SvgUri width={size} height={size} uri={url} />
  );
});

export default TeamLogo;

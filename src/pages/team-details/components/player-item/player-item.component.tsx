import React, { FC, memo } from 'react';
import * as Styled from './player-item.styles';

interface PlayerItemProps {
  name: string;
}

const PlayerItem: FC<PlayerItemProps> = memo(({ name }) => {
  return (
    <Styled.Container>
      <Styled.PlayerName>{name}</Styled.PlayerName>
    </Styled.Container>
  );
});

export default PlayerItem;

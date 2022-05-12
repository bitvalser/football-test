import { TeamLogo } from '@core/components/team-logo';
import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Styled from './team-item.styles';

interface TeamItemProps {
  id: number;
  name: string;
  logo: string;
  onSelect: (id: number, name: string) => void;
}

const TeamItem: FC<TeamItemProps> = memo(({ id, logo, name, onSelect }) => {
  const handleClick = () => {
    onSelect(id, name);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Styled.Container>
        <TeamLogo url={logo} />
        <Styled.TeamName>{name}</Styled.TeamName>
      </Styled.Container>
    </TouchableOpacity>
  );
});

export default TeamItem;

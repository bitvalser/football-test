import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './empty-list.styles';

const EmptyList: FC = () => {
  const [t] = useTranslation();

  return (
    <Styled.Container>
      <Styled.Description>{t('common.emptyList')}</Styled.Description>
    </Styled.Container>
  );
};

export default EmptyList;

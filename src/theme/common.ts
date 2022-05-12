import { css } from 'styled-components/native';

const shadow = css`
  shadow-color: ${({ theme }) => theme.pallette.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 5;
`;

export default {
  shadow,
};

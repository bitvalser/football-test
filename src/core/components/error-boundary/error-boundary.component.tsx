import React, { PropsWithChildren } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import * as Styled from './error-boundary.styles';

type ErrorBoundaryProps = PropsWithChildren<WithTranslation>;
type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // TODO: handle error
  }

  render() {
    if (this.state.hasError) {
      return (
        <Styled.Content>
          <Styled.ErrorText>{this.props.t('errors.boundaryText')}</Styled.ErrorText>
        </Styled.Content>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);

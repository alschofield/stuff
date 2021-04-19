import React from 'react';
import { Container } from 'schofield-common-components';

import { withTheme } from 'schofield-themes';

const Home = ({ theme }) => {
  return (
    <Container theme={theme.home.container} data-testid='home-container'>

    </Container>
  );
}

export default withTheme(Home)

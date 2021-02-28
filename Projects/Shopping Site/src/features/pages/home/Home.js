import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '../../components';
import { withTheme } from '../../../themes';

const Home = ({ theme, todos, get, add }) => {
  useEffect(get, [get, todos.length])

  return (
    <Container theme={theme.home.container} data-testid='home-container'>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return ({

  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Home))

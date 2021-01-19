import React from 'react';
import Container from '../../components/Container/Container';

export default function Home() {
  const containerStyles = {
    paddingTop: '40px',
    minHeight: '100vh'
  }

  return (
    <Container { ...containerStyles } data-testid="home-container" >

    </Container>
  );
}

import React from 'react';
import Container from '../../components/Container/Container';

export default function Footer() {
  const containerStyles = {
    height: '60px',
    background: 'orange'
  }

  return (
    <Container { ...containerStyles } data-testid="footer-container">

    </Container>
  );
}

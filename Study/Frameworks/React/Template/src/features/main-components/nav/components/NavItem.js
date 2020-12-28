import React from 'react';
import Anchor from '../../../components/Anchor/Anchor';
import Button from '../../../components/Button/Button';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text'

export default function NavItem(props) {
  if (props.type === 'anchor') {
    return (
      <Anchor {...props} >
        <Text>{ props.value }</Text>
      </Anchor>
    );
  } else if (props.type === 'button') {
    return (
      <Button {...props} >
        <Text>{ props.value }</Text>
      </Button>
    );
  } else {
    return (
      <Container {...props} >
        <Text>{ props.value }</Text>
      </Container>
    );
  }
}

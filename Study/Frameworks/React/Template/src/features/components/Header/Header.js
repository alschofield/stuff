import React from 'react';
import styled from 'styled-components';

const sharedStyles = `
  margin-top: ${props => props.marginTop || 'initial'};
  padding-top: ${props => props.paddingTop || 'initial'};
`

const Headers = {
  h1: styled.h1`${sharedStyles}`,
  h2: styled.h2`${sharedStyles}`,
  h3: styled.h3`${sharedStyles}`,
  h4: styled.h4`${sharedStyles}`,
  h5: styled.h5`${sharedStyles}`,
  h6: styled.h6`${sharedStyles}`,
}

export default function Header(props) {
  const Item = Headers[props.type]

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Header.defaultProps = {
  type: 'h1',
  'data-testid': 'header-container'
}


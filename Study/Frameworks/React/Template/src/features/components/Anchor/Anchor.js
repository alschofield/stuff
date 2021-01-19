import React from 'react';
import styled from 'styled-components';

const Item = styled.a`
  position: ${props => props.position || 'relative'};
  display: ${props => props.display || 'inline'};
  min-width: ${props => props.minWidth || '40px'};
  height: ${props => props.height || 'auto'};
`;

export default function Anchor(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Anchor.defaultProps = {
  'data-testid': 'anchor-container'
}

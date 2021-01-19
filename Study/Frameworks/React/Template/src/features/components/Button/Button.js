import React from 'react';
import styled from 'styled-components';

const Item = styled.button`
  position: ${props => props.position || 'relative'};
  display: ${props => props.display || 'block'};
  min-width: ${props => props.minWidth || '40px'};
  height: ${props => props.height || 'auto'};
`;

export default function Button(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Button.defaultProps = {
  'data-testid': 'button-container'
}

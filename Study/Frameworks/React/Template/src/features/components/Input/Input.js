import React from 'react';
import styled from 'styled-components';

const Item = styled.input`
  position: ${props => props.position || 'relative'};
  display: ${props => props.display || 'inline'};
  min-width: ${props => props.minWidth || '80px'};
`;

export default function Input(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Input.defaultProps = {
  'data-testid': 'input-container'
}

import React from 'react';
import styled from 'styled-components'

export default function Input(props) {
  const Item = styled.input`
    position: ${props => props.position || 'relative'};
    display: ${props => props.display || 'inline'};
    min-width: ${props => props.minWidth || '80px'};
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

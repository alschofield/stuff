import React from 'react';
import styled from 'styled-components'

export default function Text(props) {
  const Item = styled.p`
    position: ${props => props.position || 'relative'};
    display: ${props => props.display || 'inline'};
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

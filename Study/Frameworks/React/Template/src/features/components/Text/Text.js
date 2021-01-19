import React from 'react';
import styled from 'styled-components';

const Item = styled.p`
  position: ${props => props.position || 'relative'};
  display: ${props => props.display || 'inline'};
  margin: ${props => props.margin || 'inline'};
  font-size: ${props => props.fontSize || 'inline'};
  font-weight: ${props => props.fontWeight || 'inline'};
  line-height: ${props => props.lineHeight || 'inline'};
  color: ${props => props.color || 'inline'};
`;

export default function Text(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Text.defaultProps = {
  'data-testid': 'text-container'
}

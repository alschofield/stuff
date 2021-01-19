import React from 'react';
import styled from 'styled-components';

const Item = styled.svg`
`;

export default function Svg(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Svg.defaultProps = {
  'data-testid': 'svg-container'
}

import React from 'react';
import styled from 'styled-components'

export default function Svg(props) {
  const Item = styled.svg`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

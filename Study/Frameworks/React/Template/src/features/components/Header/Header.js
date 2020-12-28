import React from 'react';
import styled from 'styled-components'

export default function Header(props) {
  const Item = styled.h1`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

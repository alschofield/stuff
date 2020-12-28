import React from 'react';
import styled from 'styled-components'

// add ability to do ul or ol
export default function List(props) {
  const Item = styled.ul`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

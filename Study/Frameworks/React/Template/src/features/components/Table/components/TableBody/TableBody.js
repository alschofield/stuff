import React from 'react';
import styled from 'styled-components'

export default function TableBody(props) {
  const Item = styled.tbody`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

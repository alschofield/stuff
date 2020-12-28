import React from 'react';
import styled from 'styled-components'

// make it so th or td is configurable
export default function TableItem(props) {
  const Item = styled.td`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

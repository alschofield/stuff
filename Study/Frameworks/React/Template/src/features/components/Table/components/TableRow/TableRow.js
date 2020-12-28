import React from 'react';
import styled from 'styled-components'

export default function TableRow(props) {
  const Item = styled.tr`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

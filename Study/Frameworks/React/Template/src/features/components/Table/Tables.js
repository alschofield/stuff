import React from 'react';
import styled from 'styled-components'

export default function Table(props) {
  const Item = styled.table`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

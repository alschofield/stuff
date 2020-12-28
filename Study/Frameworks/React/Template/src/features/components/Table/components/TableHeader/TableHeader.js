import React from 'react';
import styled from 'styled-components'

export default function TableHeader(props) {
  const Item = styled.thead`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

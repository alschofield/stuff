import React from 'react';
import styled from 'styled-components'

export default function TableFooter(props) {
  const Item = styled.tfoot`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

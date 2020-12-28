import React from 'react';
import styled from 'styled-components'

export default function ListItem(props) {
  const Item = styled.li`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

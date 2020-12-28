import React from 'react';
import styled from 'styled-components'

export default function Image(props) {
  const Item = styled.image`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

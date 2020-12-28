import React from 'react';
import styled from 'styled-components'

export default function Video(props) {
  const Item = styled.video`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

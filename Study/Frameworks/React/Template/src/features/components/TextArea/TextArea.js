import React from 'react';
import styled from 'styled-components'

export default function TextArea(props) {
  const Item = styled.textarea`
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

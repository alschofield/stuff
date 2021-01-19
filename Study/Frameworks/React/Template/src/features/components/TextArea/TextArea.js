import React from 'react';
import styled from 'styled-components';

const Item = styled.textarea`
`;

export default function TextArea(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

TextArea.defaultProps = {
  'data-testid': 'textarea-container'
}

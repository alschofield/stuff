import React from 'react';
import styled from 'styled-components';

const Item = styled.img`
`;

export default function Image(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Image.defaultProps = {
  'data-testid': 'image-container'
}


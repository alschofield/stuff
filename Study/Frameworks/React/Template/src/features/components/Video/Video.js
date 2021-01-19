import React from 'react';
import styled from 'styled-components';

const Item = styled.video`
`;

export default function Video(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Video.defaultProps = {
  'data-testid': 'video-container'
}

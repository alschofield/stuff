import React from 'react';
import styled from 'styled-components';

const Item = styled.tbody`
`;

export default function TableBody(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

TableBody.defaultProps = {
  'data-testid': 'tablebody-container'
}

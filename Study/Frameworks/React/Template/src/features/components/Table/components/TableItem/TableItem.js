import React from 'react';
import styled from 'styled-components';

const Item = styled.td`
`;

// make it so th or td is configurable
export default function TableItem(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

TableItem.defaultProps = {
  'data-testid': 'tableitem-container'
}

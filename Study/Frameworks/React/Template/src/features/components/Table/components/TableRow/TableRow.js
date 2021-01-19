import React from 'react';
import styled from 'styled-components';

const Item = styled.tr`
`;

export default function TableRow(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

TableRow.defaultProps = {
  'data-testid': 'tablerow-container'
}

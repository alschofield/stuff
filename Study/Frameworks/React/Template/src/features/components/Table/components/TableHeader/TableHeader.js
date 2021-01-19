import React from 'react';
import styled from 'styled-components';

const Item = styled.thead`
`;

export default function TableHeader(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

TableHeader.defaultProps = {
  'data-testid': 'tableheader-container'
}

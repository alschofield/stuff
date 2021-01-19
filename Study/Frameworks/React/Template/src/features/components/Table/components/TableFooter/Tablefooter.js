import React from 'react';
import styled from 'styled-components';

const Item = styled.tfoot`
`;

export default function TableFooter(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

TableFooter.defaultProps = {
  'data-testid': 'tablefooter-container'
}

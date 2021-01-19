import React from 'react';
import styled from 'styled-components';

const Item = styled.table`
`;

// similar to list tag, i want to be able to have the option to export a default table that accepts a data prop as well as export the table wrapper and the individual table components
export default function Table(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Table.defaultProps = {
  'data-testid': 'table-container'
}

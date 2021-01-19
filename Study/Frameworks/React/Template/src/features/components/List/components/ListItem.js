import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
`;

export default function ListItem(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

ListItem.defaultProps = {
  'data-testid': 'listitem-container'
}

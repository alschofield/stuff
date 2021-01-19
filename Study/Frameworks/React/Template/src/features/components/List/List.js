import React from 'react';
import styled from 'styled-components';
import ListItem from './components/ListItem';

const sharedStyles = ``;

const Lists = {
  ul: styled.ul`${sharedStyles}`,
  ol: styled.ol`${sharedStyles}`
}

// add ability to do ul or ol
export default function List(props) {
  const Item = Lists[props.type]

  switch(Array.isArray(props.list)) {
    case true:
      return (
        <Item {...props}>
          { props.list.map((item, index) => {
            return (
              <ListItem key={index}>{ item }</ListItem>
            )
          }) }
        </Item>
      )
    default:
      return (
        <Item {...props}>
          { props.children }
        </Item>
      )
  }
}

List.defaultProps = {
  type: 'ul',
  'data-testid': 'list-container'
}

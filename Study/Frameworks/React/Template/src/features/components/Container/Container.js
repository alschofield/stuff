import React from 'react';
import styled from 'styled-components'

export default function Container(props) {
  const Item = styled.div`
    position: ${props => props.position || 'relative'};
    display: ${props => props.display|| 'block'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    min-height: ${props => props.minHeight || 'initial'};
    top: ${props => props.top || 'initial'};
    left: ${props => props.left || 'initial'};
    background: ${props => props.background || 'initial'};
    padding-top: ${props => props.paddingTop || 'initial'};
    z-index: ${props => props.zIndex || 'initial'};
  `;

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

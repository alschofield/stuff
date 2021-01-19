import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  position: ${props => props.position || 'relative'};
  display: ${props => props.display|| 'block'};
  width: ${props => props.width || 'initial'};
  height: ${props => props.height || 'initial'};
  min-height: ${props => props.minHeight || 'initial'};
  top: ${props => props.top || 'initial'};
  left: ${props => props.left || 'initial'};
  right: ${props => props.right || 'initial'};
  bottom: ${props => props.bottom || 'initial'};
  background: ${props => props.background || 'initial'};
  background-position: ${props => props.backgroundPosition || 'initial'};
  background-size: ${props => props.backgroundSize || 'initial'};
  background-repeat: ${props => props.backgroundRepeat || 'initial'};
  padding: ${props => props.padding || 'initial'};
  padding-top: ${props => props.paddingTop || 'initial'};
  margin: ${props => props.margin || 'initial'};
  z-index: ${props => props.zIndex || 'initial'};
`;

export default function Container(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Container.defaultProps = {
  'data-testid': 'container'
}

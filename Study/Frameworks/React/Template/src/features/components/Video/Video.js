import React from 'react';
import styled from 'styled-components';
import Source from './Source/Source';

const Item = styled.video`
  position: ${props => props.theme.position || 'relative'};
  display: ${props => props.theme.display || 'initial'};
  height: ${props => props.theme.height || 'auto'};
  min-height: ${props => props.theme.minHeight || 'auto'};
  width: ${props => props.theme.width || 'auto'};
  min-width: ${props => props.theme.minWidth || '40px'};
  padding: ${props => props.theme.padding || '0px'};
  padding-top: ${props => props.theme.paddingTop || '0px'};
  padding-right: ${props => props.theme.paddingRight || '0px'};
  padding-bottom: ${props => props.theme.paddingBottom || '0px'};
  padding-left: ${props => props.theme.paddingLeft || '0px'};
  margin: ${props => props.theme.margin || '0px'};
  margin-top: ${props => props.theme.marginTop || '0px'};
  margin-right: ${props => props.theme.marginRight || '0px'};
  margin-bottom: ${props => props.theme.marginBottom || '0px'};
  margin-left: ${props => props.theme.marginLeft || '0px'};
  top: ${props => props.theme.top || 'initial'};
  left: ${props => props.theme.left || 'initial'};
  right: ${props => props.theme.right || 'initial'};
  bottom: ${props => props.theme.bottom || 'initial'};
  z-index: ${props => props.theme.zIndex || 'initial'};
  justify-content: ${props => props.theme.justifyContent || 'initial'};
  align-items: ${props => props.theme.alignItems || 'initial'};
  background: ${props => props.theme.background || 'initial'};
  background-color: ${props => props.theme.backgroundColor || 'initial'};
  background-position: ${props => props.theme.backgroundPosition || 'initial'};
  background-size: ${props => props.theme.backgroundSize || 'initial'};
  background-repeat: ${props => props.theme.backgroundRepeat || 'initial'};
  color: ${props => props.theme.color || 'initial'};
`;

export default function Video(props) {
  if (props.sources && !props.src) {
    return (
      <Item {...props}>
        {
          props.sources.map((item) => (
            <Source src={item} type={item.split('.')[-1]} />
          ))
        }
      </Item>
    );
  } else {
    return (
      <Item {...props}>
        { props.children }
      </Item>
    );
  }
}

Video.defaultProps = {
  'data-testid': 'video-container',
  autoplay: true,
  controls: true,
  loop: true,
  muted: true,
  preload: 'auto'
}

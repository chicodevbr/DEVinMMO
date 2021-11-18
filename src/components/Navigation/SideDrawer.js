import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const AsideStyled = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 60%;

  background: ${({ theme }) => theme.color.bar};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <AsideStyled>{props.children}</AsideStyled>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-root'));
};

export default SideDrawer;

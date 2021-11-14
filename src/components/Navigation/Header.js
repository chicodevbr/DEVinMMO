import styled from 'styled-components';

const HeaderStyled = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #f6683d;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 0 1rem;
  z-index: 5;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Header = (props) => {
  return <HeaderStyled>{props.children}</HeaderStyled>;
};
export default Header;

import styled from 'styled-components';

const TitleStyled = styled.h1`
  display: none;

  @media (min-width: 416px) {
    display: block;
    margin: 2rem;
  }

  @media (min-width: 1145px) {
    display: block;
    margin-right: 5rem;
  }
`;

const Title = (props) => {
  return <TitleStyled>{props.children}</TitleStyled>;
};

export default Title;

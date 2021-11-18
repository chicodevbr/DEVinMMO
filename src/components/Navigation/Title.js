import styled from 'styled-components';

const TitleStyled = styled.h1`
  @media (min-width: 416px) {
    margin: 2rem;
  }

  @media (min-width: 1145px) {
    margin-right: 5rem;
  }
`;

const Title = (props) => {
  return <TitleStyled>{props.children}</TitleStyled>;
};

export default Title;

import styled from 'styled-components';

const TitleStyled = styled.h1`
  margin-right: 5rem;
`;

const Title = (props) => {
  return <TitleStyled>{props.children}</TitleStyled>;
};

export default Title;

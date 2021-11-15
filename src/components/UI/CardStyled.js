import styled from 'styled-components';

const CardStyled = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  padding: 0 1.5rem;
  margin: 0.5rem;
  overflow: hidden;
  background: white;
  cursor: pointer;

  @media (min-width: 1145px) {
    margin: 0;
    padding: 0;
  }
`;

export default CardStyled;

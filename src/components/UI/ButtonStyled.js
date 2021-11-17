import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font: inherit;
  height: 2rem;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  color: white;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.bar};
  border-radius: 5px;
  background: ${({ theme }) => theme.color.bar};
  cursor: pointer;
  :hover,
  :active {
    background-color: ${({ theme }) => theme.color.hover};
    color: white;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.75em 0;
  padding: 1rem;
`;

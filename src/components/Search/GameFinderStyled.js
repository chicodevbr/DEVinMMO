import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: none;
  margin: 1rem;
  @media (min-width: 768px) {
    display: flex;
    width: 50%;
    margin: 2rem 5rem;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.color.grayInput};
`;

export const Line = styled.hr`
  width: 100%;
  color: #ccc;
`;

export const SubTitleFinder = styled.h4`
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

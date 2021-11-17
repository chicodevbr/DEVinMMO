import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50%;
    margin: 2rem 5rem;
  }
`;

export const InputStyled = styled.input`
  width: 200px;
  font: inherit;
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.color.grayInput};

  @media (min-width: 768px) {
    width: 100%;
  }
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

export const BoxSearchInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 280px;
`;

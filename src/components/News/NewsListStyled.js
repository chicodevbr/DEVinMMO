import styled from 'styled-components';

export const ListNews = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  @media (min-width: 1145px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 5rem;
  }
`;

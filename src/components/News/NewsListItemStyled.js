import styled from 'styled-components';

export const ListItemNews = styled.li`
  width: 100%;
  @media (min-width: 1145px) {
    width: 60%;
    margin-bottom: 1rem;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1145px) {
    flex-direction: row;
  }
`;

export const NewsSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const ImageNews = styled.img`
  width: 100%;
  @media (min-width: 1145px) {
    display: flex;
    margin: 10px;
    width: 350px;
    height: 200px;
  }
`;

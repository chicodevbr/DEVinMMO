import styled from 'styled-components';

export const ListItemNews = styled.li`
  margin: 1rem 0;
  width: 90vw;

  @media (min-width: 768px) {
    margin: 1rem;
    width: 40rem;
  }
  @media (min-width: 1114px) {
    margin: 1rem;
    width: 50rem;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: auto 1rem;

  @media (min-width: 1145px) {
    flex-direction: row;
  }
`;

export const NewsSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.75rem;
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

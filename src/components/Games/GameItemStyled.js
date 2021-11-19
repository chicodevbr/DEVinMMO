import styled from 'styled-components';

export const ItemList = styled.li`
  margin: 0.75rem;
  width: 90vw;

  @media (min-width: 768px) {
    margin: 1rem;
    width: 30rem;
  }
  @media (min-width: 1114px) {
    margin: 1rem;
    width: 25rem;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: auto 1rem;

  @media (min-width: 768px) {
    padding: auto 1rem;
  }
`;

export const Description = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0.75rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    height: 19em;
    padding: 1rem;
  }
`;

export const InfoContainer = styled.div`
  margin: 1rem 5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const InfoContent = styled.div`
  padding: 1rem;
  margin: 1rem;
`;

export const TitleItem = styled.h2`
  font-size: 1rem;
`;

export const SubTitle = styled.h5`
  margin-bottom: 2px;
`;

export const Paragraph = styled.p`
  margin-top: 0;
  padding-top: 0;
  font-size: 14px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const ListTitle = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

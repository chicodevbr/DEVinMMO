import styled from 'styled-components';

export const ItemList = styled.li`
  @media (min-width: 768px) {
    margin: 1rem;
    width: 30rem;
  }
  @media (min-width: 114px) {
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
`;

export const Description = styled.div`
  @media (min-width: 768px) {
    height: 15em;
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

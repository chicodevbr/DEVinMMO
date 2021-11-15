import styled from 'styled-components';

export const DetailsWrap = styled.div`
  margin: auto 1rem;
  @media (min-width: 376px) {
    margin: 1rem;
  }
  @media (min-width: 1145px) {
    margin: 1rem 5rem;
  }
`;

export const ImageBox = styled.div`
  margin: auto 1rem;

  @media (min-width: 1145px) {
    margin: auto 5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.article`
  margin: auto 1rem;
  @media (min-width: 376px) {
    margin-bottom: auto;
    margin-top: auto;
    margin-left: 1rem;
    margin-right: 5rem;
  }
  @media (min-width: 1145px) {
    margin: 2rem 5rem;
  }
`;

export const RequirementsCard = styled.div`
  width: 100%;
  height: 18rem;
  background: #ccc;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;

  @media (min-width: 376px) {
    width: 90%;
    height: 12rem;
  }

  @media (min-width: 1145px) {
    height: 20rem;
  }
`;

export const SubTitleRequirements = styled.h3`
  font-weight: 400;
  font-size: 16px;
  margin: 0.75rem;

  @media (min-width: 376px) {
    margin: 1rem;
  }

  @media (min-width: 1145px) {
    margin: 2rem 1rem;
  }
`;

export const ListTitle = styled.p`
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  margin: auto 1rem;

  @media (min-width: 1145px) {
    margin: 0 1rem;
  }
`;

export const ListDescription = styled.p`
  font-size: 15px;
  margin-bottom: 1px;
  margin: auto 1rem;
  @media (min-width: 1145px) {
    margin-left: 10rem;
  }
`;

export const TR = styled.tr`
  padding: 0;
`;

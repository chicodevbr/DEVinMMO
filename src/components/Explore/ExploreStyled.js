import styled from 'styled-components';

export const ExploreBox = styled.div`
  margin: 1rem;
  margin-top: 0.25rem;

  @media (min-width: 1145px) {
    display: flex;
    flex-direction: row;
    margin: 2rem 5rem;
    margin-top: 0.25rem;
  }
`;

export const TitleExploreItem = styled.h3`
  padding: 0 1rem;
`;

export const DescriptionExploreItem = styled.p`
  padding: 1rem;
`;

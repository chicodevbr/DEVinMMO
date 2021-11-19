import styled from 'styled-components';

export const ExploreBox = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;

  @media (min-width: 1145px) {
    display: flex;
    flex-direction: row;
    margin: 2rem 5rem;
    margin-top: 0.75rem;
  }
`;

export const TitleExploreItem = styled.h3`
  padding: 0 0.75rem;
`;

export const DescriptionExploreItem = styled.p`
  padding: 1rem;
`;

export const CardExplore = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 0;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 1145px) {
    margin: 1rem;
    padding: 0;
  }
`;

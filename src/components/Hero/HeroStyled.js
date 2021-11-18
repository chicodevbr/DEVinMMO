import styled from 'styled-components';

export const CarouselBox = styled.div`
  margin: 4rem 1rem;

  @media (min-width: 1145px) {
    margin: 5rem;
  }
`;

export const TitleExplore = styled.h3`
  margin: 1rem;
  margin-bottom: 0;

  @media (min-width: 1145px) {
    margin: 1rem 5rem;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color.span};
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  font-size: 14px;

  @media (min-width: 1145px) {
    margin: 1rem 5rem;
  }
`;

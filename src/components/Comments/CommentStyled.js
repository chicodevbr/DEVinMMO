import styled from 'styled-components';

export const CommentContainer = styled.div`
  margin: 3rem 1rem;
  @media (min-width: 376px) {
    margin: 1rem;
  }
  @media (min-width: 1145px) {
    margin: 2rem 0;
  }
`;

export const NameStyled = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
`;

export const Paragraph = styled.p`
  font-size: 12px;
`;

export const CommentFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonComment = styled.button`
  color: inherit;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

export const ErrorComment = styled.div`
  margin: 2px;
  color: red;
`;

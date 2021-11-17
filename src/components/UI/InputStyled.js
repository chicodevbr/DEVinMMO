import styled from 'styled-components';

export const InputStyled = styled.input`
  font: inherit;
  width: 100%;
  border: 1px groove #ccc;
  padding: 0.5rem;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.26);

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

export const TextAreaStyled = styled.textarea`
  font: inherit;
  width: 100%;
  border: 1px groove #ccc;
  padding: 1rem;
  border-radius: 7px;
  resize: none;
`;

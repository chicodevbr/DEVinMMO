import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-wrap: wrap;
`;

export const FormFooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const FieldsetStyled = styled.fieldset`
  width: 100%;
  border: none;
`;

export const FormContainerStyled = styled.div`
  width: 300px;

  @media (min-width: 380px) {
    width: 370px;
  }

  @media (min-width: 1145px) {
    width: 600px;
  }
`;

export const FormHeaderStyled = styled.div`
  width: 100%;

  @media (min-width: 1145px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

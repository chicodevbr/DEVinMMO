import styled from 'styled-components';

export const PlatformCard = styled.div`
  position: relative;
  float: left;
  width: 60px;
  height: 20px;
  margin-top: 1.2rem;
  margin-right: 0.75rem;
  padding: 5px 10px;
  border: 2px solid #772dae;
  background: transparent;
  border-radius: 10px;
  color: #772dae;
`;

export const PlatformParagraph = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: inherit;
  font-weight: 500;
`;

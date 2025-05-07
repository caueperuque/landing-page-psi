import styled from "styled-components";

export const DivisorContainer = styled.div`
  width: 100%;
  /* padding: 10px; */
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  /* text-align: center; */
`;

export const DivisorElement = styled.div`
  background-color: black;
  border: solid 1px ${props => props.theme['beige-600']};
  border-radius: 0.125rem;
  text-align: center;
  width: 95%;
`;

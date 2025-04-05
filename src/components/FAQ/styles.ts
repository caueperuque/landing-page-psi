// styles.ts
import styled from "styled-components";

export const FAQLayoutComponent = styled.div`
  padding: 1rem;
  font-family: "Poppins";
`;

export const FAQCardComponent = styled.div`
  position: relative;
  overflow: hidden; /* esconde o conteúdo que sai do container */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.3rem;
  gap: 2rem;
  height: 25rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["olive-green-100"]}; /* fallback */

  svg {
    width: 5rem;
    stroke-width: 0.5px;
  }

  button {
    align-self: flex-end;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2; /* pra ficar acima do conteúdo em movimento */
  }
`;

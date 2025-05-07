import styled from "styled-components";

export const FAQContainer = styled.div`
  @media (min-width: 720px) {
    display: flex;
    justify-content: center;
  }
`;

export const FAQLayoutComponent = styled.div`
  padding: 1rem;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    padding: 0;
    /* gap: 5rem; */
  }
`;

export const FAQCardComponent = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme["olive-green-100"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.3rem;
  gap: 2rem;
  height: 25rem;
  transition: background-color 0.3s ease;

  .faq-content {
    position: absolute;
    top: 1.3rem;
    left: 0;
    width: 100%;
    height: calc(100% - 2.6rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.3rem;
    padding: 2rem;
    padding-right: 5rem;
    box-sizing: border-box;
  }

  @media (min-width: 720px) {
    width: 23%;
    border-radius: 0.2rem;
  }

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
    z-index: 2;

    svg {
      width: 2rem;
      transition: transform 0.25s ease;
    }
  }
`;

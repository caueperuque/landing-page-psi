import styled from "styled-components";

export const AboutMeLayoutComponent = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const AboutMeContentComponent = styled.div`
  background-color: ${(props) => props.theme["beige-500"]};
  width: 65%;
  padding: 5rem 4rem 5rem 4rem;
  display: flex;

  h1 {
    margin-bottom: 2rem;
  }

  p {
    padding-right: 5rem;
    font-size: 1.2rem;
  }
`;

export const TextContentComponent = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
`;

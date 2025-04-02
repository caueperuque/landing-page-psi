import styled from "styled-components";

export const AboutMeLayoutComponent = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  height: 35rem;
`;

export const AboutMeContentComponent = styled.div`
  background-color: ${(props) => props.theme["beige-500"]};
  width: 100%;
  padding: 5rem 4rem 5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    background-color: ${(props) => props.theme["beige-500"]};
    margin-bottom: 2rem;
  }

  span {
    background-color: ${(props) => props.theme["beige-500"]};
  }

  p {
    background-color: ${(props) => props.theme["beige-500"]};

    padding-right: 2rem;
    font-size: 1.1rem;
  }

  .about-me-content {
    background-color: ${(props) => props.theme["beige-500"]};
    display: flex;
    align-items: center;
    width: 60%;
  }

  .about_text {
    background-color: ${(props) => props.theme["beige-500"]};
    padding: 1rem;
    margin-left: 3rem;
    width: 50%;
    height: 100%;
  }

  .about_header {
    background-color: ${(props) => props.theme["beige-500"]};
    margin-bottom: 2rem;
  }
`;

export const TextContentComponent = styled.div`
  background-color: ${(props) => props.theme["beige-500"]};
  /* border: 3px solid red; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: auto;

  p {
    margin-bottom: 1rem;
  }
`;

export const ImageComponent = styled.div`
  background-color: ${(props) => props.theme["beige-500"]};
`;

import styled from "styled-components";
import AmsterdamTwo from "../../assets/fonts/amsterdam-two-ttf.ttf";

export const HeroLayoutComponent = styled.div`
  background-color: ${(props) => props.theme["beige-400"]};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    width: 30%;
    border: 2px solid ${(props) => props.theme["beige-700"]};
    /* margin-bottom: 4rem; */
    position: absolute;
    top: 34.3rem;
  }

  h1 {
    @font-face {
      font-family: "AmsterdamTwo";
      src: url(${AmsterdamTwo}) format("truetype");
      font-weight: 700;
      font-style: normal;
    }
    color: ${(props) => props.theme["beige-700"]};
    font-size: 5rem;
    font-family: "AmsterdamTwo", sans-serif;
  }
`;

export const HeroContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${(props) => props.theme["beige-700"]};
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    /* margin-top: 2rem; */
  }
`;

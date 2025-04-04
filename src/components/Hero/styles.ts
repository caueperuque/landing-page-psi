import styled from "styled-components";
import AmsterdamTwo from "../../assets/fonts/amsterdam-two-ttf.ttf";

export const HeroLayoutComponent = styled.div`
  background-color: ${(props) => props.theme["beige-700"]};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    z-index: 2;
    width: 70%;
    border: 0.5px solid ${(props) => props.theme["beige-600"]};
    /* margin-bottom: 4rem; */
    position: absolute;
    top: 28rem;
    opacity: 1;
  }

  h1 {
    z-index: 2;
    background-color: transparent;

    @font-face {
      font-family: "AmsterdamTwo";
      src: url(${AmsterdamTwo}) format("truetype");
      font-weight: 700;
      font-style: normal;
    }

    color: ${(props) => props.theme["beige-600"]};
    font-size: 3rem;
    font-family: "AmsterdamTwo", sans-serif;
  }
`;

export const HeroBackgroundImage = styled.div`
  top: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  position: absolute;
  background-image: url("/src/components/Hero/bg-mobile.jpeg");
  background-size: cover;
  opacity: 0.1;
`;

export const HeroContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  p {
    z-index: 2;
    color: ${(props) => props.theme["beige-600"]};
    background-color: transparent;

    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    /* margin-top: 2rem; */
  }
`;

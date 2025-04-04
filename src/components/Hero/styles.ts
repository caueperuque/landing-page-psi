import styled from "styled-components";
import AmsterdamTwo from "../../assets/fonts/amsterdam-two-ttf.ttf";

export const HeroLayoutComponent = styled.div`
  background-color: ${(props) => props.theme["beige-700"]};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    position: absolute;
    top: 53%;
    left: 15%; //Se desejar centralizar horizontalmente com 70% de largura
    width: 70%;
    transform: translateY(-54%);
    border: 0.5px solid ${(props) => props.theme["beige-600"]};
    z-index: 2;
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

  /* iPhone 11 Pro, iPhone X, iPhone XS */
  @media (max-width: 375px) {
    hr {
      top: 54%;
    }
  }

  /* iPhone 12, iPhone 13, iPhone 14 */
  @media (max-width: 390px) {
  }

  /* Galaxy S20, Galaxy S21, Galaxy S22 */
  @media (max-width: 412px) {
  }

  /* iPhone 14 Pro, iPhone 14 Pro Max */
  @media (max-width: 430px) {
   
  }

  /* Galaxy S20 Ultra, Galaxy S21 Ultra, Galaxy S22 Ultra */
  @media (max-width: 440px) {
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

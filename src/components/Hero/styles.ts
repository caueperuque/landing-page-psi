import styled from "styled-components";
import AmsterdamTwo from "../../assets/fonts/amsterdam-two-ttf.ttf";
import bgMobile from "../../assets/Hero/bg-mobile.jpeg";

export const HeroLayoutComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -3;
  background-color: ${(props) => props.theme["beige-700"]};
`;

export const HeroBackgroundImage = styled.div`
  /* position: absolute; estava assim */
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100vh;
  background-image: url(${bgMobile});
  background-size: cover;
  background-position: center;
  opacity: 0.1;
`;

export const HeroContentComponent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

export const SignatureWrapper = styled.div`
  position: relative;       /* referência para o hr */
  display: inline-block;    /* ajusta ao tamanho do texto */
  /* margin-bottom: 0; */

  h1 {
    margin: 0;
    color: ${(props) => props.theme["beige-600"]};
    font-size: 3rem;
    font-family: "AmsterdamTwo", sans-serif;
    font-weight: 700;
    position: relative;

    /* importa a fonte */
    @font-face {
      font-family: "AmsterdamTwo";
      src: url(${AmsterdamTwo}) format("truetype");
      font-weight: 700;
      font-style: normal;
    }
  }

  hr {
    position: absolute;
    top: 78%;             
    left: 0;
    width: 100%;
    border: none;
    border-top: 1px solid ${(props) => props.theme["beige-600"]};
    opacity: 1;      
  }
`;

export const HeroParagraph = styled.p`
  z-index: 2;
  color: ${(props) => props.theme["beige-600"]};
  background-color: transparent;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;

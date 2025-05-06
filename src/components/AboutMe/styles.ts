import { styled } from "styled-components";

export const AboutMeLayoutComponent = styled.section`
  z-index: 2;
  padding: 1rem;

  h1,
  p,
  span {
    font-family: "Poppins";
  }

  p {
    font-size: 13px;
  }

  h1,
  span {
    text-align: center;
  }

  span {
    margin-top: 0.3rem;
    display: inline-block; /* Permite aplicar margin auto */
    position: relative;
    padding-bottom: 8px;
    font-size: 1rem;
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

  @media (min-width: 720px) {
    display: flex;
    /* border: solid 3px red; */
  }

  @media (min-width: 720px) {
    display: flex;
    justify-content: center;
    padding: 4rem;
  }
`;

export const Divisor = styled.div`
  border: 1px solid ${(props) => props.theme["beige-400"]};
  width: 100%;
  text-align: center;
  /* height: 20px; Ajuste conforme necessário */
`;

export const AboutMeContentComponent = styled.div`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme["beige-300"]} 0%,
    ${(props) => props.theme["beige-400"]} 100%
  );

  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    width: 50%;
    background: ${(props) => props.theme["beige-300"]};
    border-radius: 0.2rem;
  }
`;

export const AboutMeTextHeaderComponent = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const AboutMeTextComponent = styled.div`
  text-align: left;
  padding: 2rem;
`;

export const TextContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem;
`;

export const ImageComponent = styled.div`
  text-align: center;
  img {
    margin-top: 1rem;
    width: 19rem;
  }

  @media (min-width: 720px) {
    img {
      margin-top: 0;
      padding: 2em;
      /* border-radius: 100%; */
    }
  }
`;

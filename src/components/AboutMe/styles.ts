import styled from "styled-components";

export const AboutMeLayoutComponent = styled.section`
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

    /* Pseudo-elemento para o traçado */
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px; /* Espessura da linha */
      background: linear-gradient(
        90deg,
        transparent,
        ${(props) => props.theme["beige-600"]},
        transparent
      );
    }
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

export const AboutMeContentComponent = styled.div`
 background: linear-gradient(
    180deg,
    ${(props) => props.theme["beige-300"]} 0%,
    ${(props) => props.theme["beige-400"]} 100%
  );`;

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
`;

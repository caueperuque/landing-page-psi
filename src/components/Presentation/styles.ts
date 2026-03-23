import { styled } from "styled-components";

export const PresentationLayoutComponent = styled.section`
  z-index: 2;

  h1,
  h2,
  p,
  li {
    font-family: "Poppins";
  }

  h1 {
    text-align: center;
  }

  p,
  li {
    font-size: 13px;
    line-height: 1.7;
  }

  @media (min-width: 720px) {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`;

export const PresentationContentComponent = styled.div`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme["beige-300"]} 0%,
    ${(props) => props.theme["beige-400"]} 100%
  );
  padding: 2rem;
  display: flex;
  justify-content: center;

  @media (min-width: 720px) {
    width: 95%;
    background: ${(props) => props.theme["beige-300"]};
    border-radius: 0.2rem;
    padding: 3rem;
  }
`;

export const PresentationTextHeaderComponent = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const HeaderDivisor = styled.div`
  border: 1px solid ${(props) => props.theme["beige-400"]};
  /*width: 95%;*/
  margin: 0.75rem auto 0;
`;

export const PresentationTextComponent = styled.div`
  text-align: left;
  width: 100%;

  @media (min-width: 720px) {
    max-width: 900px;
  }
`;

export const TopicComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 14rem;

  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const BulletListComponent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 1.2rem;
`;

export const NavigationComponent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme["beige-400"]};
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${(props) => props.theme["beige-600"]};
  border-radius: 0.2rem;
  background: transparent;
  color: ${(props) => props.theme["beige-700"]};
  cursor: pointer;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Dot = styled.button<{ $ativo: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.$ativo ? props.theme["beige-700"] : props.theme["beige-400"]};
  transition: background-color 0.2s ease;
`;

export const ReferenceText = styled.p`
  margin-top: 2rem;
  font-size: 11px !important;
  font-style: italic;
  color: ${(props) => props.theme["gray-600"]};
`;

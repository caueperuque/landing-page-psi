import styled from "styled-components";

export const AboutMeLayoutComponent = styled.section`
padding: 1rem;
`;

export const AboutMeContentComponent = styled.div` 
  background-color: ${props => props.theme['beige-300']};
`

export const AboutMeTextHeaderComponent = styled.div`
  margin-bottom: 1rem;
`

export const AboutMeTextComponent = styled.div`
  text-align: left;
  padding: 2rem;
`;

export const TextContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;

export const ImageComponent = styled.div`
  text-align: center;
  padding: 2rem;
  padding-bottom: 0;
  img {
    width: 19rem;
  }
`;

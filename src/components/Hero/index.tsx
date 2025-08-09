import {
    HeroContentComponent, HeroLayoutComponent, HeroParagraph, SignatureWrapper
} from './styles';

export const Hero = () => (
  <HeroLayoutComponent>
    {/* <HeroBackgroundImage /> */}
    <HeroContentComponent>
      <SignatureWrapper>
        <h1>Thais Araujo</h1>
        <hr />
      </SignatureWrapper>
      <HeroParagraph>Psicologia e Psicanálise</HeroParagraph>
    </HeroContentComponent>
  </HeroLayoutComponent>
);

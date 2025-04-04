import { HeroBackgroundImage, HeroContentComponent, HeroLayoutComponent } from "./styles";

export const Hero = () => {
  return (
    <HeroLayoutComponent>
      <HeroContentComponent>
        <HeroBackgroundImage />
        <h1>Thais Araujo</h1>
        <hr />
        <p>psicóloga e psicanalista</p>
      </HeroContentComponent>
    </HeroLayoutComponent>
  );
};

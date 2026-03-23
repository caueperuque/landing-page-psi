import { AboutMe } from "./components/AboutMe";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { SocialMediaButtons } from "./components/SocialMediaButtons";
import { HeroBackgroundImage } from "./components/Hero/styles";
import { Divisor } from "./components/Divisor";
import { Presentation } from "./components/Presentation";

export const Home = () => {
  return (
    <>
      <HeroBackgroundImage />
      <SocialMediaButtons />
      <Hero />
      <Presentation />
      <Divisor />
      <AboutMe />
      <Divisor />
      <FAQ />
      <Divisor />
      <Contact />
    </>
  );
};

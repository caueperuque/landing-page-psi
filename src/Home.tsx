import { AboutMe } from "./components/AboutMe";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { SocialMediaButtons } from "./components/SocialMediaButtons";
import { HeroBackgroundImage } from "./components/Hero/styles";
import { Divisor } from "./components/Divisor";

export const Home = () => {
  return (
    <>
      <HeroBackgroundImage />
      <SocialMediaButtons />
      <Hero />
      <AboutMe />
      <Divisor />
      <FAQ />
      <Divisor />
      <Contact />
    </>
  );
};

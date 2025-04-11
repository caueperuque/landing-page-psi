import { AboutMe } from "./components/AboutMe";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { SocialMediaButtons } from "./components/SocialMediaButtons";

export const Home = () => {
  return (
    <>
      <SocialMediaButtons />
      <Hero />
      <AboutMe />
      <FAQ />
      <Contact />
    </>
  );
};

import { AboutMe } from "./components/AboutMe";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <FAQ />
      <Contact />
    </>
  );
};

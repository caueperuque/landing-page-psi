import { AboutMe } from "./components/AboutMe";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { SendMail } from "./components/SendMail";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <FAQ />
      <SendMail />
    </>
  );
};

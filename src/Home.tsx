import { AboutMe } from "./components/AboutMe";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <FAQ />
      <div
        style={{
          position: "fixed",
          zIndex: "999",
          bottom: "9%",
          left: "-3px",
          cursor: "pointer",
          backgroundColor: "#045e54",
          borderRadius: "0 23px 23px 0",
          padding: "0.5rem",
          display: "flex",
          alignItems: "center",
          margin: '0'
        }}
      >
        <FaWhatsapp style={{ fontSize: "1.8rem", color: "white", margin: 0, textTransform: 'none' }} />
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: "999",
          bottom: "3%",
          left: "-3px",
          cursor: "pointer",
          margin: '0',
          backgroundColor: "#b17c97",
          borderRadius: "0 23px 23px 0",
          padding: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaInstagram style={{ fontSize: "1.8rem", color: "white", margin: 0, textTransform: 'none' }} />
      </div>
      <Contact />
    </>
  );
};

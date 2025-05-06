import { createGlobalStyle } from "styled-components";
import bgMobile from "../assets/Hero/bg-mobile.jpeg";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        scrollbar-color: ${(props) => props.theme["beige-700"]} ${(props) => props.theme["beige-400"]};
    }

    body {
        /* background-image: url(${bgMobile}); */
        background-color: ${(props) => props.theme["beige-500"]};

        color: ${(props) => props.theme["gray-600"]}
    }
`;

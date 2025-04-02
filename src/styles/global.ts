import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scrollbar-color: ${(props) => props.theme["beige-700"]} ${(props) => props.theme["beige-400"]};
    background-color: ${(props) => props.theme["beige-400"]};
    }
`;

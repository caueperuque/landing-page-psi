import styled from "styled-components";

export const SocialMediaButtonsLayout = styled.div`
  position: "fixed";
  z-index: "999";
`;

export const ButtonStyle = styled.div`
  position: fixed;
  z-index: 9999;
  left: -3px;
  cursor: pointer;
  background-color: #265953;
  border-radius: 0 23px 23px 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  margin: 0;

  .icon_social-media {
    font-size: 1.8rem;
    color: white;
    margin: 0;
    text-transform: none;
  }
`;

export const WhatsappButtonContainer = styled(ButtonStyle)`
  background-color: #265953;
  bottom: 9%;
`;

export const InstagramButtonContainer = styled(ButtonStyle)`
  background-color: #b17c97;
  bottom: 3%;
`;

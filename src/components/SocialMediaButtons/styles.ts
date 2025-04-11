import styled from "styled-components";

export const SocialMediaButtonsLayout = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 2%;
  left: -3px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ButtonStyle = styled.div`
  cursor: pointer;
  border-radius: 0 23px 23px 0;
  padding: 0.5rem;

  a {
    display: flex
  }

  .icon_social-media {
    font-size: 1.8rem;
    color: white;
    margin: 0;
    text-transform: none;
  }
`;

export const WhatsappButtonContainer = styled(ButtonStyle)`
  background-color: #265953;
`;

export const InstagramButtonContainer = styled(ButtonStyle)`
  background-color: #b17c97;
`;

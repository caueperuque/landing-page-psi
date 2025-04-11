import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  InstagramButtonContainer,
  SocialMediaButtonsLayout,
  WhatsappButtonContainer,
} from "./styles";

export const SocialMediaButtons = () => {
  return (
    <SocialMediaButtonsLayout>
      <WhatsappButtonContainer>
        <FaWhatsapp className="icon_social-media" />
      </WhatsappButtonContainer>
      <InstagramButtonContainer>
        <FaInstagram className="icon_social-media" />
      </InstagramButtonContainer>
    </SocialMediaButtonsLayout>
  );
};

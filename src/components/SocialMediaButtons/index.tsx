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
        <a
          href="https://wa.me/+5518996667981"
          target="_blank"
        >
          <FaWhatsapp className="icon_social-media" />
        </a>
      </WhatsappButtonContainer>
      <InstagramButtonContainer>
        <a
          href="https://www.instagram.com/thaisaraujopsic/"
          target="_blank"
        >
          <FaInstagram className="icon_social-media" />
        </a>
      </InstagramButtonContainer>
    </SocialMediaButtonsLayout>
  );
};

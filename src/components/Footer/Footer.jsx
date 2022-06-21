import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { SocialMedia, FooterContainer } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <a>Kontakt</a>
      <a>Regulamin</a>
      <a>Polityka Prywatności</a>

      <a href="https://github.com/infoshareacademy/jfdzr6-team-squeezed">
        Link do GitHub
      </a>

      <p>Znajdź nas w social media:</p>

      <div>
        <SocialMedia>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </SocialMedia>
      </div>
    </FooterContainer>
  );
};
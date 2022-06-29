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
      <a>Regulamin</a>
      <a>Polityka Prywatności</a>

      <a href="https://github.com/infoshareacademy/jfdzr6-team-squeezed">
        Link do GitHub
      </a>

      <div>
        <SocialMedia>
          <p>Znajdź nas w social media:</p>

          <div className="fontsAwesomContainer">
            <div>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div>
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </SocialMedia>
      </div>
    </FooterContainer>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { SocialMedia, FooterContainer } from "./Footer.styled";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterContainer>
      <NavLink to="/statute">REGULAMIN</NavLink>

      <NavLink to="/privacy">POLITYKA PRYWATNOŚCI</NavLink>

      <a href="https://github.com/infoshareacademy/jfdzr6-team-squeezed">
        LINK DO GITHUBA
      </a>

      <div>
        <SocialMedia>
          <p>ZNAJDŹ NAS W SOCIAL MEDIA:</p>

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

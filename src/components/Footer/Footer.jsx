import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { SocialMedia } from "./Footer.styled";

export const Footer = () => {
  return (
    <>
      <p>Znajdź nas w social media</p>
      <div>
        <SocialMedia>

          <div>     <FontAwesomeIcon icon={faFacebook} /></div>
          <div>     <FontAwesomeIcon icon={faInstagram} /></div>
          <div>     <FontAwesomeIcon icon={faYoutube} /></div>

        </SocialMedia>
      </div>
    </>
  );
};

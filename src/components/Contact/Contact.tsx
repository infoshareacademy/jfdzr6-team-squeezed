import React from "react";
import { useEffect } from "react";
import { ContactPhoto } from "./Contact.Styled";

interface Props {
  setIsLanding: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Contact = ({ setIsLanding }: Props) => {
  useEffect(() => {
    setIsLanding(true);
  }, []);

  return (
    <>
      <ContactPhoto>
        <div className='photoIcons'>
          <img
            src='https://avatars.githubusercontent.com/u/95885409?v=4'
            alt='First slide'
          />
          <a
            href='https://github.com/rafal-skiba'
            className='aboutLink'
            target={"_blank"}>
            Link do GitHub
          </a>
        </div>

        <div className='photoIcons'>
          <img
            src='https://avatars.githubusercontent.com/u/94493414?v=4'
            alt='First slide'
          />

          <a
            href='https://github.com/sylwia-laboszczak'
            className='aboutLink'
            target={"_blank"}>
            Link do GitHub
          </a>
        </div>

        <div className='photoIcons'>
          <img
            src='https://avatars.githubusercontent.com/u/92314463?v=4'
            alt='First slide'
          />
          <a
            href='https://github.com/mchltkczk'
            className='aboutLink'
            target={"_blank"}>
            Link do GitHub
          </a>
        </div>

        <div className='photoIcons'>
          <img
            src='https://avatars.githubusercontent.com/u/94653898?v=4'
            alt='First slide'
          />
          <a
            href='https://github.com/lidia-dalecka'
            className='aboutLink'
            target={"blank"}>
            Link do GitHub
          </a>
        </div>
      </ContactPhoto>
    </>
  );
};

import React from "react";
import { AboutUsContainer } from "./AboutUs.Styled";
import whiteLogo from "./whitenlog.svg";

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <img className='logoNajemnicy' src={whiteLogo} alt='' />
      <div>
        <h2>
          Najemnicy to internetowy serwis wynajmu nieruchomości, którego
          właścicielem jest Najemnicy sp. z o.o.
        </h2>
        Nasza strona umożliwia użytkownikom przeglądanie i zamieszczanie
        ogłoszeń wynajmu nieruchomości w szczególności mieszkań, domów, biur czy
        pokoi. Ogłoszeniodawcom zapewniamy dotarcie z ofertą do dużej liczby
        zainteresowanych odbiorców. Poszukującym nieruchomości gwarantujemy
        stale powiększającą się bazę ogłoszeń wynajmu nowych mieszkań i lokali z
        rynku wtórnego i pierwotnego.
        <h3>Adres do korespondencji:</h3>
        <div>Serwis Najemnicy</div>
        <div>ul. Karola Wielkiego 12</div>
        <div>61-872 Warszawa</div>
        <div>e-mail:squeezedisa@gmail.com </div>
        Informacje o przedsiębiorcy prowadzącym serwis Najemnicy: Najemnicy sp.
        z o.o. z siedzibą w Warszawie, wpisana do rejestru przedsiębiorców
        prowadzonego przez Sąd Rejonowy Poznań Nowe Miasto i Wilda w Poznaniu,
        Wydział VIII Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS:
        0000000000, NIP: 77777777777, REGON: 999999999, kapitał zakładowy
        1.000.000 złotych.
      </div>
    </AboutUsContainer>
  );
};

import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { CarouselContainer } from "../../OffersList/SearchResults/SearchResults.Styled";


export const MapCarousel = ({photos}) => {
  const [currentPhotoInfo, setCurrentPhoto] = useState([]);

    const caruselInterval = 36000000;
    return (
        <>
        {!!photos && photos.length > 0 ? (
            <>
              <div style={{width: '100%'}}>
                <Carousel interval={caruselInterval}>
                  {photos.map((photoSrc) => (
                    <Carousel.Item>
                      <img style={{objectFit: 'cover'}} width='100%' height='200' src={photoSrc} alt="First slide" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </>
          ) : (
            <></>
          )}
          </>
    )
}


import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { CarouselContainer } from "../../OffersList/SearchResults/SearchResultsList.Styled";


export const MapCarousel = ({photos, id}) => {

    const caruselInterval = 36000000;
    return (
        <>
        {!!photos && photos.length > 0 ? (
            
              <div id={id} style={{width: '100%'}}>
                <Carousel interval={caruselInterval}>
                  {photos.map((photoSrc, index) => (
                    <Carousel.Item key={index}>
                      <img style={{objectFit: 'cover'}} width='100%' height='200' src={photoSrc} alt="First slide" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            
          ) : (
            <></>
          )}
          </>
    )
}


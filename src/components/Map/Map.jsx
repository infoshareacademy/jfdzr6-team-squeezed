import { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useCallback } from "react";
import { InfoWindowBackground, InfoWindowBottomBackground, StyledMapHeader } from "./Map.Styled";
import { mapContainerStyle, center, options } from "../../utils/mapConfig";
import logo from "./logo-icon-only-blue.svg";
import markerSVG from "./ts-map-pin.svg";
import { MapCarousel } from "./MapCarousel/MapCarousel";
import { NavLink } from "react-router-dom";

const Map = ({ flats, isLoaded }) => {
  const [activeMarker, setActiveMarker] = useState(null);


console.log(flats.length > 0 ? flats[0].photos : console.log('nie ma'))
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const changeMapView = useCallback(
    ({ lat, lng }) => {
      map.Ref.current.panTo({
        lat: flats[0].cords._lat,
        lng: flats[0].cords._long,
      });
      mapRef.current.setZoom(8);
    },
    [flats]
  );

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return marker;
    }
    setActiveMarker(marker);
  };
  // const handleOnLoad = (map) => {

  // };

  // const onBoundsChange = (map) => {
  //   const bounds = new google.maps.LatLngBounds();
  //   flats.map(({ cords }) =>
  //     bounds.extend({ lat: cords._lat, lng: cords._long })
  //   );
  //   map.fitBounds(bounds);
  // };

  console.log(flats);
  let mapMarkers = []
  mapMarkers = flats.map(
    ({ id, photos, cords, price, title, size, rooms }) =>
      cords ? (
        <Marker
          key={id}
          position={{ lat: cords._lat, lng: cords._long }}
          onClick={() => handleActiveMarker(id)}
          label={{ text: `${price}zł`, color: "darkred", fontWeight: "bold", TextOutline: "4px solid #f0f0f0"}}
          labelStyle={{backgroundColor: 'black'}}
          icon={{
            url: markerSVG,
            scaledSize: new window.google.maps.Size(50, 50),
            labelOrigin: new google.maps.Point(20, 40),
          }}>
          {activeMarker === id ? (
            <InfoWindow
              onCloseClick={() => {
                setActiveMarker(null);
              }}>
              <InfoWindowBackground>
                {/* <img style={{objectFit: 'cover'}} src={photos[0]} width='100%' height='200' /> */}
                <MapCarousel key={id} photos={photos}/>
                {/* <img style={{objectFit: 'cover'}} src={photos[0]} width='100%' height='200' /> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 5px 10px 5px",
                    alignContent: "flex-start",
                    width: '100%',
                  }}>
                                  <NavLink to={`/details/${id}`} style={{textDecoration: 'none', color: 'black'}}>

                    <div style={{position: 'absolute', top: '5px', padding: '2px', color: '#FFF', background: '#5a5656ac', zIndex: '10', fontWeight: 'bold', fontSize: '20px' }}>
                      {size} m<sup>2</sup>{" "}
                    </div>
                   <InfoWindowBottomBackground>
                    {/* <div>pokoje: {rooms}</div> */}
                    <div style={{fontSize: '24px'}}>
                      <b>{price} zł</b>
                    </div></InfoWindowBottomBackground>
                    </NavLink>

                  <div></div>
                </div>
              </InfoWindowBackground>
            </InfoWindow>
          ) : null}
        </Marker>
      ) : null
  );
  console.log();
  const changeMapPosition = (flats) => {
    flats
      ? mapRef.current?.panTo({
          lat: flats[0].cords._lat,
          lng: flats[0].cords._long,
        })
      : mapRef.current?.panTo({ lat: 52.234982, lng: 21.00849 });
    mapRef.current.setZoom(12);
  };  
  useEffect(() => {
    setTimeout(()=> {
      flats.length > 0 && changeMapPosition(flats);
      mapMarkers;
    }, 100)
  }, [flats]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: '85vh',
      }}>
      <div style={{ position: "relative", height: '100%' }}>
        <StyledMapHeader>
          <span>
            <img src={logo} width='80' />
          </span>
        </StyledMapHeader>
        <GoogleMap
          onLoad={onMapLoad}
          onClick={() => setActiveMarker(null)}
          // mapContainerStyle={mapContainerStyle}
          mapContainerClassName='map-container'
          zoom={6.6}
          options={options}
          center={center}
          >
          {isLoaded && mapMarkers}

        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;

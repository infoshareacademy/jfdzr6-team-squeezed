import { useState } from "react";
import Geocode from "react-geocode";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { GeoPoint } from "firebase/firestore";

import { useEffect, useRef, useCallback } from "react";
import {
  InfoWindowBackground,
  InfoWindowBottomBackground,
  StyledMapHeader,
} from "./Map.Styled";
import { mapContainerStyle, center, options } from "../../utils/mapConfig";
import logo from "./logo-icon-only-blue.svg";
import markerSVG from "./ts-map-pin1.svg";
import { MapCarousel } from "./MapCarousel/MapCarousel";
import { Link } from "react-router-dom";
import { Spinner } from "../../utils/Spinner";


const Map = ({ flats, isLoaded }) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [markerAnimation, setMarkerAnimation] = useState(null)
// const [searchedCity, setSearchedCity] = useState({})


  // Geocode.setApiKey("AIzaSyBie1ZhkycpbUQPNsfdG76nzaxfWtJPmXU");
  // Geocode.setLanguage("pl");
  // Geocode.setRegion("pl");
  // Geocode.setLocationType("ROOFTOP");
  
  // Geocode.fromAddress(flats[0].city).then(
  //   (response) => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     const newGeo = new GeoPoint(lat, lng);
  //     setSearchedCity(newGeo)
      
  //   })

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    changeMapPosition(flats);
    setTimeout(() => {
      setIsLoading(false);
    });
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
  const changeMapPosition = (flats) => {
    if (flats.length > 0) {
      mapRef.current?.panTo({
        lat: flats[0].cords._lat,
        lng: flats[0].cords._long,
      });
      mapRef.current.setZoom(12)
    } else {
      mapRef.current?.panTo({ lat: 51.919437, lng: 19.145136 });
    mapRef.current.setZoom(6);

    }
  };  
  let mapMarkers = []
  mapMarkers = flats.map(
    ({ id, photos, cords, price, title, size, rooms }) =>
      cords ? (
        <Marker
          key={id}
          animation={window.google.maps.Animation.DROP}
          position={{ lat: cords._lat, lng: cords._long }}
          onClick={() => handleActiveMarker(id)}
          label={{ text: `${price}zł`, color: "darkred", fontWeight: "bold", fontSize: "14px", TextOutline: "4px solid #f0f0f0"}}
          labelStyle={{backgroundColor: 'black', fontSize: "26px"}}
          icon={{
            url: markerSVG,
            scaledSize: new window.google.maps.Size(70, 70),
            labelOrigin: new google.maps.Point(35, 56),
            strokeWeight: 2,
            fillColor: '#009933',
            fillOpacity: 1,
          }}>
          {activeMarker === id ? (
            <InfoWindow
              onCloseClick={() => {
                setActiveMarker(null)
              }}>
              <InfoWindowBackground>
                <MapCarousel key={id} photos={photos}/>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 5px 10px 5px",
                    alignContent: "flex-start",
                    width: '100%',
                  }}>
                                  <a href={`/details/${id}`} style={{textDecoration: 'none', color: 'black'}} target="_blank">

                    <div style={{position: 'absolute', top: '5px', padding: '2px', color: '#FFF', background: '#5a5656ac', zIndex: '10', fontWeight: 'bold', fontSize: '20px' }}>
                      {size} m<sup>2</sup>{" "}
                    </div>
                   <InfoWindowBottomBackground>
                    {/* <div>pokoje: {rooms}</div> */}
                    <div style={{ fontSize: "24px" }}>
                      <b>{price} zł</b>
                    </div>
                  </InfoWindowBottomBackground>
                </a>

                <div></div>
              </div>
            </InfoWindowBackground>
          </InfoWindow>
        ) : null}
      </Marker>
    ) : null
  );
  useEffect(() => {
    if (mapRef.current) {
      changeMapPosition(flats);
    }
  }, [flats]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: "85vh",
      }}>
      <div style={{ position: "relative", height: "100%" }}>
        <StyledMapHeader>
          <span>
            <img src={logo} width='80' />
          </span>
        </StyledMapHeader>
        {isLoading && <Spinner />}
        <GoogleMap
          onLoad={onMapLoad}
          onClick={() => setActiveMarker(null)}
          // mapContainerStyle={mapContainerStyle}
          mapContainerClassName='map-container'
          zoom={6.6}
          options={options}
          center={center}>
          {!isLoading && mapMarkers}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;

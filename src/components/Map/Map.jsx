import { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useCallback } from "react";
import { StyledMapHeader } from "./Map.Styled";
import { mapContainerStyle, center, options } from "../../utils/mapConfig";
import logo from "./logo-icon-only-blue.svg";
import markerSVG from "./NicePng_home-icon-png_233447.png";

const Map = ({ flats }) => {
  const [activeMarker, setActiveMarker] = useState(null);

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
  const mapMarkers = flats.map(
    ({ id, photos, cords, price, title, size, rooms }) =>
      cords ? (
        <Marker
          key={id}
          position={{ lat: cords._lat, lng: cords._long }}
          onClick={() => handleActiveMarker(id)}
          label={{ text: `${price}zł`, color: "#ffffff", fontWeight: "bold" }}
          icon={{
            url: markerSVG,
            scaledSize: new window.google.maps.Size(30, 30),
            labelOrigin: new google.maps.Point(20, 40),
          }}>
          {activeMarker === id ? (
            <InfoWindow
              onCloseClick={() => {
                setActiveMarker(null);
              }}>
              <div
                style={{
                  width: "240px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                <img src={photos[0]} width='100%' />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "5px",
                    alignContent: "flex-start",
                    paddingBottom: "10px",
                    paddingTop: "5px",
                  }}>
                  <a
                    href='https:/www.google.pl'
                    style={{ textDecoration: "none", color: "black" }}>
                    {title}
                    <div>
                      metraż: {size} m<sup>2</sup>{" "}
                    </div>
                    <div>pokoje: {rooms}</div>
                    <div>
                      cena: <b>{price} zł</b>
                    </div>
                  </a>

                  <div></div>
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ) : null
  );
  console.log(flats);
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
    flats.length > 0 && changeMapPosition(flats);
  }, [flats]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}>
      <div style={{ position: "relative" }}>
        <StyledMapHeader>
          <span>
            <img src={logo} width='80' />
          </span>
        </StyledMapHeader>
        <GoogleMap
          onLoad={onMapLoad}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={mapContainerStyle}
          zoom={6.6}
          center={center}
          options={options}>
          {mapMarkers}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;

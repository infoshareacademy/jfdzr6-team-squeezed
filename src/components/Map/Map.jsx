import { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

function Map({ flats }) {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    flats.forEach(({ position }) => bounds.extend(position));
    bounds.extend({ lat: 51.919437, lng: 19.145136 });
    map.fitBounds(bounds);
  };
  console.log(flats);
  const mapMarkers = flats.map(
    ({ id, photos, cords, price, title, size, rooms }) => (
      <Marker
        key={id}
        position={{ lat: cords._lat, lng: cords._long }}
        onClick={() => handleActiveMarker(id)}
        label={`${price}zł`}>
        {activeMarker === id ? (
          <InfoWindow onCloseClick={() => setActiveMarker(null)}>
            <div>
              <div>
                {title}
                <div
                  style={{
                    height: "80px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <img src={photos[0]} height='70px' />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: "5px",
                      alignContent: "flex-start",
                    }}>
                    <div>
                      metraż: {size} m<sup>2</sup>{" "}
                    </div>
                    <div>pokoje: {rooms}</div>
                    <div>
                      cena: <b>{price} zł</b>
                    </div>
                    <div>
                      Link: <a href='https:/www.google.pl'>Zarezerwuj</a>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </Marker>
    )
  );
  console.log(flats);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GoogleMap
        onLoad={handleOnLoad}
        // center={city}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{ width: "70vw", height: "60vh" }}>
        {mapMarkers}
      </GoogleMap>
    </div>
  );
}

export default Map;


import { useState, useRef, useCallback, useEffect } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { mapContainerStyle, center, options } from "../../../../utils/mapConfig";
export const Minimap = ({flat}) => {
  const [activeMarker, setActiveMarker] = useState(null);
const flats = [flat]
console.log(flats)
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const changeMapPosition = (flat) => {
    flat
      ? mapRef.current?.panTo({
          lat: flats[0].cords._lat,
          lng: flats[0].cords._long,
        })
      : mapRef.current?.panTo({ lat: 52.234982, lng: 21.00849 });
    mapRef.current.setZoom(12);
  };  
  
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    bounds.extend({ lat: flat.cords._lat, lng: flat.cords._long });
    map.fitBounds(bounds);
  };

  let renderFlatMarker = flats.map(({ id, photos, cords, price, title, size, rooms}) => ( <Marker
    key={flat.id}
    position={{ lat: cords._lat, lng: cords._long }}
    onClick={() => handleActiveMarker(id)}
  //   label={label}
  >
    {activeMarker === flat.id ? (
      <InfoWindow onCloseClick={() => setActiveMarker(null)}>
        <div>{name}</div>
      </InfoWindow>
    ) : null}
  </Marker>
 ))


 useEffect(() => {
    setTimeout(()=> {
      changeMapPosition(flats);
    }, 100)
  }, [flat]);
  return (
    <GoogleMap
      onLoad={onMapLoad}
      onClick={() => setActiveMarker(null)}
      position={{ lat: flat.cords._lat, lng: flat.cords._long }}
      mapContainerClassName='map-container'
      zoom={6.6}
      options={options}
          center={center}
      mapContainerStyle={{ width: "400px", height: "200px" }}
    >
      {renderFlatMarker}
    
    </GoogleMap>
  );
}


import { useState, useRef, useCallback, useEffect } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { mapContainerStyle, center, options } from "../../../../utils/mapConfig";
import markerSVG from "../../../Map/ts-map-pin.svg";


export const Minimap = ({flat}) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

const flats = [flat]
const mapRef = useRef();
const onMapLoad = useCallback((map) => {
  mapRef.current = map;
  changeMapPosition(flats);
  setTimeout(() => {
    setIsLoading(false);
  });
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
  

 let renderFlatMarker = flats.map(({ id, photos, cords, price, title, size, rooms}) => ( <Marker
    key={flat.id}
    position={{ lat: cords._lat, lng: cords._long }}
    icon={{
        url: markerSVG,
        scaledSize: new window.google.maps.Size(50, 50),
        labelOrigin: new google.maps.Point(20, 55),
        strokeWeight: 2,
        fillColor: '#009933',
        fillOpacity: 1,
      }}>
  {/* //   label={label} */}
  </Marker>
 ))


 useEffect(() => {
    if (mapRef.current) {
      changeMapPosition(flats);
    }
  }, [flats]);
  return (
    <GoogleMap
      onLoad={onMapLoad}
      onClick={() => setActiveMarker(null)}
      position={{ lat: flat.cords._lat, lng: flat.cords._long }}
      zoom={6.6}
      options={options}
          center={center}
      mapContainerStyle={{ width: "400px", height: "200px" }}
    >
      {!isLoading && renderFlatMarker}
    
    </GoogleMap>
  );
}

import mapStyles from "./mapStyles";

export const mapContainerStyle = {
  width: '1000px',
  height: "100%",
};
export const center = { lat: 52.234982, lng: 21.00849 };

export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

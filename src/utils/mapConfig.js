import mapStyles from "./mapStyles";

export const mapContainerStyle = {
  width: '1440px',
  height: "60vh",
};
export const center = { lat: 52.234982, lng: 21.00849 };

export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

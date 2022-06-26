import { Rings } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    <Rings
      color='#afe3f5'
      height={80}
      width={80}
    />
    </div>
  );
};

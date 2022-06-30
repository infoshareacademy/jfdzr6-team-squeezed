import { useEffect } from "react";

export const Contact = ({setIsLanding}) => {
    useEffect(()=>{
        setIsLanding(true)
      },[])
    return <h2>Kontakt</h2>
};
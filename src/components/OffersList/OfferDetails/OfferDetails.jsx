import { db } from "../../../utils/firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ContainerDivStyled } from "./OfferDetails.Styled"
import emailSVG from "../../auth/email.png"
import userPNG from "../Images/user.png"
import textAreaPNG from "../Images/text-adjustment.png"
import citySVG from "../Images/city.svg"
import sizeSVG from "../Images/size.svg"
import roomsSVG from "../Images/pokoje.svg"
import parkSVG from "../Images/parking.svg"
import logiaSVG from "../Images/logia.svg"
import floorSVG from "../Images/pietro.svg"
import furnishedSVG from "../Images/umeblowanie.svg"
import priceSVG from "../Images/price.svg"
import availableSVG from "../Images/available.svg"
import { useParams } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import { useLoadScript } from "@react-google-maps/api";
const libraries = ["places"];



export const OfferDetails = ({setIsLanding}) => {
    const { id: idFlat } = useParams("id")
    const [flat, setFlat] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);


    // const { isLoaded, loadError } = useLoadScript({
    //     googleMapsApiKey: "AIzaSyB9znA1OBO8ASzhNi_-M3SKRVwjdA04pyE",
    //     language: 'pl',
    //     libraries,
    //   });
    
    //   if (loadError) return "Błąd ładowania mapy";
    
    const userCollectionRef = collection(db, "contacts")

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            message: message
        }).then(() => {
            if (!alert("wiadomość została wysłana 💬"));
            setLoader(false)
        }).catch((error) => {
            alert(error.message);
            setLoader(false)
        })
    }


    const caruselInterval = 36000000;
    const getFlats = () => {
        const flatsCollection = doc(db, 'flats', idFlat);
        getDoc(flatsCollection).then(querySnapshot => {

            console.log(querySnapshot)
            const flat = {
                id: querySnapshot.id,
                ...querySnapshot.data(),
            }
            console.log(flat)
            setFlat(flat)

        })

    }

    useEffect(() => {
        getFlats();
        setIsLanding(true)

    }, [])

    if (flat === null) {
        return (
            <p>Ładowanie strony</p>
        )
    }

    const { title, city, size, price, street, rooms, userId, photos, mailAddress, mobileNumber, description, cords, floor, isFurnished, isElevator, isLoggia, isParking, isAC } = flat;

    return (
        <>
            <ContainerDivStyled className="container">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <section className="section-1">

                    <div className="picture">
                        <Carousel interval={caruselInterval}>
                            {flat.photos.map((photoSrc) => (
                                <Carousel.Item>
                                    <div className="carouselItemImg">
                                        <img src={photoSrc} alt="First slide" />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>

                    {/* <div className="picture">
                        <img src={photos} />
                    </div> */}

                    <div className="form">
                        <div className="contact">
                            <h3>Dane kontaktowe właściciela</h3>
                            <div className="contact-email">
                                <p className="firstChild">Adres e-mail:</p>
                                <p className="first">{mailAddress}</p>
                            </div>
                            <div className="contact-number">
                                <p className="firstChild">Numer telefonu: </p>
                                <p className="first">{mobileNumber}</p>
                            </div>
                        </div>

                        <form>
                            <div className="formDiv">
                                <img className="iconInput" src={userPNG} alt="" />
                                <input name="name" type="text" placeholder="Wpisz swoję imię" onChange={(e) => setName(e.target.value)} ></input>
                            </div>
                            <div className="formDiv">
                                <img className="iconInput" src={emailSVG} alt="" />
                                <input name="email" type="email" placeholder="Wpisz swój email" onChange={(e) => setEmail(e.target.value)}  ></input>
                            </div>
                            <div className="formArea">
                                <img className="iconInput" src={textAreaPNG} alt="" />
                                <textarea name="textarea" id="" cols="35" rows="10" placeholder="Zostaw tutaj wiadomość" onChange={(e) => setMessage(e.target.value)}  ></textarea>
                            </div>
                            <button onClick={handleSubmit} style={{ background: loader ? "#0cb482" : "#0975C3" }}>Wyślij wiadomość</button>
                        </form>

                    </div>

                </section>

                <section className="section-2">

                    <div className="render-div">
                        <div className="render-div2">
                            <ul className="render-list">
                                <div>
                                    <img className="icon" src={citySVG} alt="" />
                                    <li>miasto: </li>
                                </div>
                                <div>
                                    <img className="icon" src={citySVG} alt="" />
                                    <li>ulica: </li>
                                </div>
                                <div>
                                    <img className="icon" src={sizeSVG} alt="" />
                                    <li>metraż: </li>
                                </div>
                                <div>
                                    <img className="icon" src={priceSVG} alt="" />
                                    <li>cena: </li>
                                </div>
                                <div>
                                    <img className="icon" src={roomsSVG} alt="" />
                                    <li>liczba pokoi: </li>
                                </div>
                            </ul>
                            <ul className="render-list fetch">
                                <li>{city}</li>
                                <li>{street}</li>
                                <li>{size} m2</li>
                                <li>{price} zł</li>
                                <li>{rooms}</li>
                            </ul>
                        </div>
                        <div className="render-div2">
                            <ul className="render-list">
                                <div>
                                    <img className="icon" src={floorSVG} alt="" />
                                    <li>piętro: </li>
                                </div>
                                <div>
                                    <img className="icon" src={furnishedSVG} alt="" />
                                    <li>umeblowanie: </li>
                                </div>
                                <div>
                                    <img className="icon" src={parkSVG} alt="" />
                                    <li>parking: </li>
                                </div>
                                <div>
                                    <img className="icon" src={logiaSVG} alt="" />
                                    <li>balkon: </li>
                                </div>
                                <div>
                                    <img className="icon" src={availableSVG} alt="" />
                                    <li>dostępne od: </li>
                                </div>
                            </ul>
                            <ul className="render-list fetch">
                                <li>{floor}</li>
                                <li>{isFurnished}</li>
                                <li>{isParking}</li>
                                <li>{isLoggia}</li>
                                <li>{isAC}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="map">
                    {/* {isLoaded ? <Map isLoaded={isLoaded} flats={flat} /> : null} */}

                    </div>

                </section>

                <div className="description">
                    <h3>Opis</h3>
                    <p>{description}</p>
                </div>

            </ContainerDivStyled >

        </>
    )


}




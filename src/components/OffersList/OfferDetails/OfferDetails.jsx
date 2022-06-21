import { db } from "../../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ContainerDivStyled } from "./OfferDetails.Styled"



export const OfferDetails = () => {

    const [flat, setFlat] = useState(null);

    const getFlats = () => {
        const flatsCollection = doc(db, 'flats', "3V7QXBV4KEuGbrEQ3l8J");
        getDoc(flatsCollection).then(querySnapshot => {
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

                <section className="section-1">

                    <div className="picture">
                        <img src={photos} />
                    </div>

                    <div className="form">
                        <div className="contact">
                            <h3>Dane kontaktowe właściciela</h3>
                            <p>Adres e-mail: {mailAddress}</p>
                            <p>numer telefonu: {mobileNumber}</p>
                        </div>
                        <form >
                            <div>
                                <input name="name" type="text" placeholder="Wpisz swoję imię"></input>
                            </div>
                            <div>
                                <input name="email" type="email" placeholder="Wpisz swój email"></input>
                            </div>
                            <div>
                                <textarea name="textarea" id="" cols="35" rows="10" placeholder=""></textarea>
                            </div>
                            <button>Wyślij wiadomość</button>
                        </form>
                    </div>

                </section>

                <section className="section-2">

                    <div className="render-div">
                        <div className="render-div2">
                            <ul className="render-list">
                                <li>miasto: </li>
                                <li>ulica: </li>
                                <li>metraż: </li>
                                <li>cena: </li>
                                <li>liczba pokoi: </li>
                            </ul>
                            <ul className="render-list">
                                <li>{city}</li>
                                <li>{street}</li>
                                <li>{size} m2</li>
                                <li>{price} zł</li>
                                <li>{rooms}</li>
                            </ul>
                        </div>
                        <div className="render-div2">
                            <ul className="render-list">
                                <li>piętro: </li>
                                <li>umeblowanie: </li>
                                <li>parking: </li>
                                <li>balkon: </li>
                                <li>dostępne od: </li>
                            </ul>
                            <ul className="render-list">
                                <li>{floor}</li>
                                <li>{isFurnished}</li>
                                <li>{isParking}</li>
                                <li>{isLoggia}</li>
                                <li>{isAC}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="map">
                        <h3>Tutaj ma być mapa</h3>
                    </div>

                </section>

                <div className="description">
                    <h3>Opis</h3>
                    <p>{description}</p>
                </div>

            </ContainerDivStyled>

        </>
    )


}




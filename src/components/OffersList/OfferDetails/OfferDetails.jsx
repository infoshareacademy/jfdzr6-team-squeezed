import { db } from "../../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ContainerDivStyled } from "./OfferDetails.Styled"



export const OfferDetails = () => {

    const [flat, setFlat] = useState(null);

    const getFlats = () => {
        const flatsCollection = doc(db, 'flats', "DY8qX8LBZWep5N5FP9WD");
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

    const { title, city, size, price, street, rooms, userId, floor, isFurnished, photos } = flat;


    return (
        <>

            <ContainerDivStyled className="container">
                <h2>{title}</h2>
                <section className="section-1">
                    <div className="picture"><img src={photos} /></div>
                    <div className="form">
                        <h3>Dane kontaktowe właściciela</h3>
                        <form >
                            <div>
                                <label name="name" >Twoje imię</label>
                                <input name="name" type="text" placeholder="Wpisz swoję imię"></input>
                            </div>
                            <div>
                                <label name="email" >Adres email</label>
                                <input name="email" type="email" placeholder="Wpisz swój email"></input>
                            </div>
                            <div>
                                <label name="area" >Wiadomość</label>
                                <input name="area" type="area" placeholder="Zostaw wiadomość"></input>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="section-2">
                    <div className="render-div">
                        <h3>Szczegóły ogłoszenia</h3>
                        <ul className="render-list">
                            <li>{city}</li>
                            <li>ulica: {street}</li>
                            <li>metraż: {size} m2</li>
                            <li>cena: {price} zł</li>
                            <li>liczba pokoi: {rooms}</li>
                        </ul>
                    </div>
                    <div className="map">
                        <h3>Mapa</h3>
                    </div>
                </section>

                <div className="description">
                    <h3>Opis</h3>
                    <p>Luksusowy apartament na terenie prestiżowego osiedla na Mokotowie, przy ul. {street}.
                        Apartament {size} m2 składa się z :
                        salonu połączonego jadalnią i kuchnią wyposażoną w nowy sprzęt AGD

                        3 pokoje,
                        2 łazienki,
                        przedpokój,
                        taras,
                        miejsce postojowe w garażu podziemnym
                    </p>
                    <h3>Lokalizacja</h3>
                    <p>Doskonała lokalizacja, bardzo dobry dojazd do centrum i na lotnisko. Blisko metro, linie tramwajowe, autobus. Na terenie osiedla liczne sklepy, restauracje, kafejki, przedszkola. Na osiedlu jest duży ogród oraz bezpośrednie przejście do parku.</p>
                    <h3>Dodatkowe informacje</h3>
                    <p>Do mieszkania przynależy miejsce postojowe w garażu podziemnym.</p>
                </div>

            </ContainerDivStyled>

        </>
    )


}
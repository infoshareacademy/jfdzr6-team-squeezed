import { db } from "../../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from 'styled-components';


const ContainerDivStyled = styled.div`
background-color: #c4c4c4;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 70%;
margin: 20px auto;

h2 {
    background-color: #f7f7f7;
    text-align: center;

}

.section-1 {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.picture {
   width: 40%;
   height: 200px;
   background-color: #e4e4e4;
}

.picture img {
   width: 300px;
   height: 200px;
   background-color: #e4e4e4;
}

.form {
    display: flex;
    flex-direction: column;
    width: 40%;
   height: 200px;
   background-color: #e4e4e4;
    
}

.section-2 {
    display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.render-div {
    margin-top: 20px;
    width: 40%;
   height: 200px;
   background-color: #e4e4e4;
}

.render-list {
    list-style: none;
}

.map {
    margin-top: 20px;
    width: 40%;
   height: 200px;
   background-color: #e4e4e4;
}

.description {
    display: flex;
   flex-direction: row;
   justify-content: center;
   margin: 30px;
}

`



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
                        <div>dane kontaktowe właściciela:{floor}</div>
                        <form >
                            <label name="name" >Twoje imię</label>
                            <input name="name" type="text" placeholder="Wpisz swoję imię"></input>
                            <label name="email" >Adres email</label>
                            <input name="email" type="email" placeholder="Wpisz swój email"></input>
                            <label name="area" >Wiadomość</label>
                            <input name="area" type="area" placeholder="Zostaw wiadomość"></input>
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
                    <div className="map">Lokalizacja</div>
                </section>

                <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus fuga tempore quos distinctio, ratione est, accusamus, incidunt nulla nam quis in eius consequatur numquam veritatis harum. Laboriosam architecto earum possimus!

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus fuga tempore quos distinctio, ratione est, accusamus, incidunt nulla nam quis in eius consequatur numquam veritatis harum. Laboriosam architecto earum possimus!</div>

            </ContainerDivStyled>

        </>
    )




}




import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, doc, GeoPoint, serverTimestamp } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
import { db, storage } from "../../../utils/firebase";
import Geocode from "react-geocode";
import {
  PhotoLabel,
  PhotoSpan,
  PhotoInput,
  MainDiv,
  Container
} from "./EditOffer.Styled";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";

export const EditOffer = ({id}) => {

  const { id: idFlat } = useParams("idFlat")
  console.log(idFlat)

  // fetch flat by id from db
  // fill input forms from record
  

  return (
    <>
      <EditOffer1 userId={id} />
    </>
  )
};

const EditOffer1 = ({ flats, userId}) => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const {
      title,
      description,
      street,
      city,
      photos,
      size,
      price,
      rooms,
      floor,
      available,
      isAC,
      isElevator,
      isFurnished,
      isLoggia,
      isParking,
      mobileNumber,
      mailAddress,
    } = form;

    const imagesUrl = [];

    for (let prop in photos.files) {
      //lokalny obiekt photos z inputu, w którym jest obiekt files
      if (typeof photos.files[prop] === 'object') {
        //pobieramy nazwę pliku i przekazujemy referencje do zmiennej storage
        const storageRef = ref(storage, `flat/${photos.files[prop].name} + ${v4()}`);
        //wysyłamy plik do storage
        const snapshot = await uploadBytes(storageRef, photos.files[prop]);
        //wyciągamy URL poprzez snapshot i ref
        const downloadUrl = await getDownloadURL(snapshot.ref);
        imagesUrl.push(downloadUrl);
      }
    }

    Geocode.setApiKey("");
    Geocode.setLanguage("pl");
    Geocode.setRegion("pl");
    Geocode.setLocationType("ROOFTOP");

    const address = (`${street.value}, ${city.value}`);

    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const newGeo = new GeoPoint(lat, lng);
        const flatsRef = collection(db, "flats");

        const flat = {
          title: title.value,
          cords: newGeo,
          description: description.value,
          street: street.value,
          city: city.value,
          photos: imagesUrl,
          size: size.value,
          price: price.value,
          rooms: rooms.value,
          floor: floor.value,
          available: available.value,
          isAC: (selectedFilters.isAC ? selectedFilters.isAC : false),
          isElevator: (selectedFilters.isElevator ? selectedFilters.isElevator : false),
          isFurnished: (selectedFilters.isFurnished ? selectedFilters.isFurnished : false),
          isLoggia: (selectedFilters.isLoggia ? selectedFilters.isLoggia : false),
          isParking: (selectedFilters.isParking ? selectedFilters.isParking : false),
          mobileNumber: mobileNumber.value,
          mailAddress: mailAddress.value,
          createAt: serverTimestamp(),
        };
        const userDocRef = doc(db, 'users', userId)
        addDoc(flatsRef, {
          ...flat, cords: newGeo,
          isAC: (selectedFilters.isAC ? selectedFilters.isAC : false),
          isElevator: (selectedFilters.isElevator ? selectedFilters.isElevator : false),
          isFurnished: (selectedFilters.isFurnished ? selectedFilters.isFurnished : false),
          isLoggia: (selectedFilters.isLoggia ? selectedFilters.isLoggia : false),
          isParking: (selectedFilters.isParking ? selectedFilters.isParking : false),
          userId: userDocRef

        }).then((data) => console.log("test", data.id));

      },
      (error) => {
        console.error(error);
      }
    );
    navigate("/mypanel");

  };

  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [error, setError] = useState(null);


  const handleDate = (e) => {
    if (e.target.type === "submit") {
      if (selectedPhotos.length == 0) { setError(true) }
      else return;
    }
  };

  const handleFilters = (e) => {
    e.target.type === "checkbox"
      ? setSelectedFilters({
        ...selectedFilters,
        [e.target.name]: e.target.checked,
      })
      : setSelectedFilters({
        ...selectedFilters,
        [e.target.name]: e.target.value,
      });
  };

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    if (selectedFiles.length > 0) { setError(false) };
    const photosArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedPhotos((previousPhotos) => previousPhotos.concat(photosArray));

  };



  return (
    <>
      <MainDiv>
        <form onSubmit={handleSubmit}>
          <Container>
            <div className="box1">
              <label className="title" htmlFor="title"><b>Tytuł ogłoszenia</b><span className="colorStar">*</span></label>
              <br />
              <input type="text" name="title" id="title" required placeholder="Wpisz tytuł ogłoszenia" onChange={handleFilters} />
              <br />
              <label className="description" htmlFor="description"><b>Opis</b></label>
              <br />
              <textarea id="description" name="description" />
            </div>
            <div className="box2">
              <div className="labelStyle"><label className="Street" htmlFor="street"><b>Ulica i numer</b><span className="colorStar">*</span></label>
                <br />
                <input type="text" name="street" id="street" placeholder="Wpisz ulicę i numer budynku" onChange={handleFilters} /></div>

              <div className="labelStyle"><label htmlFor="city"><b>Miasto</b><span className="colorStar">*</span></label>
                <br />
                <input type="text" name="city" id="city" required onChange={handleFilters} /></div>

              <div className="labelStyle"><label htmlFor="size"><b>Powierzchnia</b><span className="colorStar">*</span></label>
                <br />
                <input className="labelStyle__left" type="number" name="flatSize" id="size" required placeholder="m&sup2;" onChange={handleFilters} /></div>

              <div className="labelStyle"><label htmlFor="price"><b>Cena</b><span className="colorStar">*</span></label>
                <br />
                <input className="labelStyle__left" type="number" name="price" id="price" required placeholder="PLN" onChange={handleFilters} /></div>

              <div className="labelStyle"><label htmlFor="rooms"><b>Liczba pokoi</b></label>
                <br />
                <input type="number" name="rooms" id="rooms" onChange={handleFilters} /></div>

              <div className="labelStyle"><label htmlFor="floor"><b>Piętro</b></label>
                <br />
                <input type="number" name="floor" id="floor" onChange={handleFilters} /></div>

              <div className="labelStyle"><label htmlFor="available"><b>Dostępność</b><span className="colorStar">*</span></label>
                <br />
                <input type="date" name="available" id="available" required onChange={handleFilters} /></div>

            </div>

            <div className="box3">
              <div className="checkboxStyles">
                <label htmlFor="mobileNumber"><b>Numer telefonu</b><span className="colorStar">*</span></label>
                <br />
                <input className="userData" type="tel" name="mobileNumber" id="mobileNumber" required placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" onChange={handleFilters} />
              </div>
              <div className="checkboxStyles">
                <label htmlFor="mailAddress"><b>Mail do kontaktu</b><span className="colorStar">*</span></label>
                <br />
                <input className="userData" type="email" name="mailAddress" id="mailAddress" required onChange={handleFilters} />
              </div>
              <div className="box3.1"></div>
              <div className="checkboxStyles__checkbox">
                <input className="checkboxInput" name="isElevator" type="checkbox" onChange={handleFilters} />
                <label htmlFor="isElevator">Winda</label>
              </div>

              <div className="checkboxStyles__checkbox">
                <input className="checkboxInput" name="isFurnished" type="checkbox" onChange={handleFilters} />
              <label htmlFor="isFurnished">Umeblowanie</label>

              </div>

              <div className="checkboxStyles__checkbox">
                <input className="checkboxInput" name="isAC" type="checkbox" onChange={handleFilters} />
                <label htmlFor="isAC">Klimatyzacja</label>
              </div>
              <div className="checkboxStyles__checkbox">
                <input className="checkboxInput" name="isLoggia" type="checkbox" onChange={handleFilters} />
                <label htmlFor="isLoggia">Balkon</label>
              </div>

              <div className="checkboxStyles__checkbox">
                <input className="checkboxInput" name="isParking" type="checkbox" onChange={handleFilters} />
                <label htmlFor="isParking">Parking</label>
              </div>
            </div>

            <div className="box4">

              <div className="photosLabel">

                <div className="box4styles">

                  <PhotoLabel htmlFor="photos">
                    <b>Dodaj zdjęcia:</b>
                    <PhotoSpan>Nie więcej niż 10 zdjęć</PhotoSpan>
                    <PhotoInput
                      type="file"
                      name="photos"
                      id="photos"
                      onChange={onSelectFile}
                      multiple
                      accept="photo/png , photo/jpeg , photo/webp , photo/svg , photo/gif"
                      required
                    />
                  </PhotoLabel>
                  <div className="infoAboutAddingPictures">
                    <b>{error === true ? "Dodaj zdjęcia" : null}</b>
                  </div>
                </div>
                <br />
                {selectedPhotos.length > 0 &&
                  (selectedPhotos.length > 10 ? (
                    <p className="error">
                      Nie możesz dodać więcej niż 10 zdjęć. <br />
                      <span>
                        Ilość zdjęć do usunięcia:{" "}
                        <b> {selectedPhotos.length - 10} </b>
                      </span>
                    </p>
                  ) : (
                    <button
                      className="upload-btn"
                      onClick={() => {
                        console.log("Wgrane zdjęcia");
                      }}
                    >
                      Ilość zdjęć: {selectedPhotos.length}
                      {selectedPhotos.length === 1 ? "" : ""}
                    </button>
                  ))}
                <div className="photos">
                  {selectedPhotos &&
                    selectedPhotos.map((photo, index) => {
                      return (
                        <div key={photo} className="photo">
                          <img src={photo} height="150" alt="upload" />
                          <button
                            onClick={() =>
                              setSelectedPhotos(
                                selectedPhotos.filter((e) => e !== photo)
                              )
                            }
                          >
                            Usuń
                          </button>
                          <p>{index + 1}</p>
                        </div>
                      );
                    })}
                </div>

              </div>
              <div className="photosLabel">
                <button onClick={handleDate} className="submitButton" type="submit">Dodaj ogłoszenie</button>
              </div>
            </div>
            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
          </Container>
          <br />
        </form>
      </MainDiv>
    </>
  );
};

import React, { useState } from "react";
import { addDoc, collection, GeoPoint, serverTimestamp } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
import { db, storage } from "../../../utils/firebase";
import Geocode from "react-geocode";
import {
  Sections,
  PhotoLabel,
  PhotoSpan,
  PhotoInput,
  MainDiv,
  ElementListTitle,
  ContactForm,
  CityStreet,
  Container
} from "../AddOffer/AddOffer.Styled";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const AddOffer = () => {
  return (
    <>
      <AddOffer1 />
    </>
  )
};

const AddOffer1 = ({ flats }) => {
  // const navigate = useNavigate()

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

    console.log(photos.files, price.value, "hello");

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

    Geocode.setApiKey("AIzaSyBS9ENJtnxhEwwTw5YcFb8Ml57rjHZbxuA");
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
          isAC: isAC.value,
          isElevator: isElevator.value,
          isFurnished: isFurnished.value,
          isLoggia: isLoggia.value,
          isParking: isParking.value,
          mobileNumber: mobileNumber.value,
          mailAddress: mailAddress.value,
          createAt: serverTimestamp(),
        };

        addDoc(flatsRef, {
          ...flat, cords: newGeo
        });

      },
      (error) => {
        console.error(error);
      }
    );

  };

  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

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
              <p>Im więcej szczegółów tym lepiej!</p>

              <label className="title" htmlFor="title"><b>Tytuł ogłoszenia</b></label>
              <br />
              <input type="text" name="title" id="title" required placeholder="Wpisz tytuł ogłoszenia" />
              <br />
              <label className="description" htmlFor="description"><b>Opis</b></label>
              <br />
              <textarea id="description" name="description" />
            </div>
            <div className="box2">
              <label className="Street" htmlFor="street"><b>Ulica i numer</b></label>
              <br />
              <input type="text" name="street" id="street" placeholder="Wpisz nazwę ulicy i numer budynku" />
              <br />
              <label htmlFor="city"><b>Miasto</b></label>
              <br />
              <input type="text" name="city" id="city" required />
              <br />
              <label htmlFor="size"><b>Powierzchnia</b></label>
              <br />
              <input type="number" name="flatSize" id="size" required placeholder="m&sup2;" />
              <br />
              <label htmlFor="price"><b>Cena</b></label>
              <br />
              <input type="number" name="price" id="price" required placeholder="PLN" />
              <br />
              <label htmlFor="rooms"><b>Liczba pokoi</b></label>
              <br />
              <input type="number" name="rooms" id="rooms" />
              <br />
              <label htmlFor="floor"><b>Piętro</b></label>
              <br />
              <input type="number" name="floor" id="floor" />
              <br />
              <label htmlFor="available"><b>Dostępność</b></label>
              <br />
              <input type="date" name="available" id="available" required />

            </div>

            <div className="box3">
              <br />
              <input name="isElevator" type="checkbox" />
              <label htmlFor="isElevator">Winda</label>
              <br />
              <input name="isFurnished" type="checkbox" />
              <label htmlFor="isFurnished">Umeblowanie</label>
              <br />
              <input name="isAC" type="checkbox" />
              <label htmlFor="isAC">Klimatyzacja</label>
              <br />
              <input name="isLoggia" type="checkbox" />
              <label htmlFor="isLoggia">Balkon</label>
              <br />
              <input name="isParking" type="checkbox" />
              <label htmlFor="isParking">Parking</label>
              <br />
              <br />
              <label htmlFor="mobileNumber"><b>Numer telefonu</b></label>
              <br />
              <input className="userData" type="text" name="mobileNumber" id="mobileNumber" required />
              <br />
              <br />
              <label htmlFor="mailAddress"><b>Mail</b></label>
              <br />
              <input className="userData" type="text" name="mailAddress" id="mailAddress" required />
            </div>

            <div className="box4">
              <div className="photosLabel">
                <span>
                  <PhotoLabel htmlFor="photos">
                    Dodaj Zdjęcie:
                    <br />
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
                  <button type="submit">Dodaj ogłoszenie</button>
                </span>
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
                      Wgrano {selectedPhotos.length} zdjęć.
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
            </div>
          </Container>

          <br />
          <br />
          <br />
          <br />
          <br />



          {/* 
          <Sections>
            <p>Im więcej szczegółów tym lepiej!</p>
            <ElementListTitle>
              <li>
                <label htmlFor="title">Tytuł ogłoszenia</label>
                <br />
                <input type="text" name="title" id="title" required />
              </li>
              <li>
                <label htmlFor="description">Opis:</label>
                <br />
                <textarea id="description" name="description" />
              </li>
            </ElementListTitle>
            <CityStreet>
              <div>
                <label htmlFor="street">Ulica:</label>
                <br />
                <input type="text" name="street" id="street" />
              </div>
              <div>
                <label htmlFor="city">Miasto:</label>
                <input type="text" name="city" id="city" required />
              </div>
            </CityStreet>
          </Sections>
          <Sections>
            <ElementListTitle>
              <li className="photosLabel">
                <PhotoLabel htmlFor="photos">
                  Dodaj Zdjęcie:
                  <br />
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
                      Wgrano {selectedPhotos.length} zdjęć.
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
              </li>
              <li>
                <label htmlFor="size">Powierzchnia:</label>
                <input type="number" name="flatSize" id="size" required />
              </li>

              <li>
                <label htmlFor="price">Cena:</label>
                <input type="number" name="price" id="price" required />
              </li>

              <li>
                <label htmlFor="rooms">Liczba pokoi:</label>
                <input type="number" name="rooms" id="rooms" />
              </li>

              <li>
                <label htmlFor="floor">Piętro:</label>
                <input type="number" name="floor" id="floor" />
              </li>

              <li>
                <label htmlFor="available">Dostępność:</label>
                <input type="date" name="available" id="available" required />
              </li>

              <li>
                <label htmlFor="isElevator">Winda:</label>
                <input name="isElevator" type="checkbox" />
              </li>

              <li>
                <label htmlFor="isFurnished">Umeblowanie:</label>
                <input name="isFurnished" type="checkbox" />
              </li>
              <li>
                <label htmlFor="isAC">Klimatyzacja:</label>
                <input name="isAC" type="checkbox" />
              </li>
              <li>
                <label htmlFor="isLoggia">Balkon:</label>
                <input name="isLoggia" type="checkbox" />
              </li>

              <li>
                <label htmlFor="isParking">Parking:</label>
                <input name="isParking" type="checkbox" />
              </li>

            </ElementListTitle>
            <ContactForm>
              <label htmlFor="mobileNumber">Numer telefonu:</label>
              <input type="text" name="mobileNumber" id="mobileNumber" required />

              <label htmlFor="mailAddress">Mail:</label>
              <input type="text" name="mailAddress" id="mailAddress" required />

            </ContactForm>

          </Sections> */}
          {/* <button type="submit">            Dodaj ogłoszenie
          </button> */}

        </form>
      </MainDiv>
    </>
  );
};

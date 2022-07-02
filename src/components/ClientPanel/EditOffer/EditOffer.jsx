import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getDoc,
  GeoPoint,
  serverTimestamp,
} from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
import { db, storage } from "../../../utils/firebase";
import Geocode from "react-geocode";
import {
  PhotoLabel,
  PhotoSpan,
  PhotoInput,
  MainDiv,
  Container,
} from "./EditOffer.Styled";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";

export const EditOffer = ({ userId }) => {
  const navigate = useNavigate();

  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [flatToEdit, setFlatToEdit] = useState({});
  const { id: idFlat } = useParams("idFlat");

  useEffect(() => {
    const singleFlat = doc(db, "flats", idFlat);
    getDoc(singleFlat).then((querySnapshot) => {
      console.log(querySnapshot);
      const flat = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      };
      console.log(flat);
      setFlatToEdit(flat);
      setSelectedPhotos(flat.photos);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const imagesUrl = selectedPhotos.map((photoSrc) => photoSrc);
    console.log(imagesUrl);

    // updateFlatInDB(form, imagesUrl, flatToEdit.cords);

    updateFlatInDBWithGeoData(form, imagesUrl);

    navigate("/mypanel");
  };

  const updateFlatInDBWithGeoData = (form, imagesUrl) => {
    Geocode.setApiKey("");
    Geocode.setLanguage("pl");
    Geocode.setRegion("pl");
    Geocode.setLocationType("ROOFTOP");

    const address = `${street.value}, ${city.value}`;

    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const newGeo = new GeoPoint(lat, lng);
        updateFlatInDB(form, imagesUrl, newGeo);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const updateFlatInDB = (form, imagesUrl, newGeo) => {
    const {
      title,
      description,
      street,
      city,
      // photos,
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

    const updatedFlat = {
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
      isAC: isAC.checked,
      isElevator: isElevator.checked,
      isFurnished: isFurnished.checked,
      isLoggia: isLoggia.checked,
      isParking: isParking.checked,
      mobileNumber: mobileNumber.value,
      mailAddress: mailAddress.value,
      createAt: serverTimestamp(),
    };
    const userDocRef = doc(db, "users", userId);

    const flatRequest = {
      ...updatedFlat,
      cords: newGeo,
      userId: userDocRef,
    };

    console.log(updatedFlat);

    const flatRef = doc(db, "flats", idFlat);
    updateDoc(flatRef, flatRequest).then((data) => console.log("Updated with Success!", data));
  };

  const handleDate = (e) => {
    if (e.target.type === "submit") {
      if (selectedPhotos.length == 0) {
        setError(true);
      } else return;
    }
  };

  const handleFilters = (e) => {
    const fieldToUpdate = {};

    if (e.target.type === "checkbox") {
      fieldToUpdate[e.target.name] = e.target.checked;
    } else {
      fieldToUpdate[e.target.name] = e.target.value;
    }

    console.log(fieldToUpdate);
    console.log(flatToEdit);

    setFlatToEdit({ ...flatToEdit, ...fieldToUpdate });
  };

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    if (selectedFiles.length > 0) {
      setError(false);
    }
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
              <label className="title" htmlFor="title">
                <b>Tytuł ogłoszenia</b>
                <span className="colorStar">*</span>
              </label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                required
                placeholder="Wpisz tytuł ogłoszenia"
                onChange={handleFilters}
                value={flatToEdit.title}
              />
              <br />
              <label className="description" htmlFor="description">
                <b>Opis</b>
              </label>
              <br />
              <textarea
                id="description"
                name="description"
                onChange={handleFilters}
                value={flatToEdit.description}
              />
            </div>
            <div className="box2">
              <div className="labelStyle">
                <label className="Street" htmlFor="street">
                  <b>Ulica i numer</b>
                  <span className="colorStar">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Wpisz ulicę i numer budynku"
                  onChange={handleFilters}
                  value={flatToEdit.street}
                />
              </div>

              <div className="labelStyle">
                <label htmlFor="city">
                  <b>Miasto</b>
                  <span className="colorStar">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  onChange={handleFilters}
                  value={flatToEdit.city}
                />
              </div>

              <div className="labelStyle">
                <label htmlFor="size">
                  <b>Powierzchnia</b>
                  <span className="colorStar">*</span>
                </label>
                <br />
                <input
                  className="labelStyle__left"
                  type="number"
                  name="size"
                  id="size"
                  required
                  placeholder="m&sup2;"
                  onChange={handleFilters}
                  value={flatToEdit.size}
                />
              </div>

              <div className="labelStyle">
                <label htmlFor="price">
                  <b>Cena</b>
                  <span className="colorStar">*</span>
                </label>
                <br />
                <input
                  className="labelStyle__left"
                  type="number"
                  name="price"
                  id="price"
                  required
                  placeholder="PLN"
                  onChange={handleFilters}
                  value={flatToEdit.price}
                />
              </div>

              <div className="labelStyle">
                <label htmlFor="rooms">
                  <b>Liczba pokoi</b>
                </label>
                <br />
                <input
                  type="number"
                  name="rooms"
                  id="rooms"
                  onChange={handleFilters}
                  value={flatToEdit.rooms}
                />
              </div>

              <div className="labelStyle">
                <label htmlFor="floor">
                  <b>Piętro</b>
                </label>
                <br />
                <input
                  type="number"
                  name="floor"
                  id="floor"
                  onChange={handleFilters}
                  value={flatToEdit.floor}
                />
              </div>

              <div className="labelStyle">
                <label htmlFor="available">
                  <b>Dostępność</b>
                  <span className="colorStar">*</span>
                </label>
                <br />
                <input
                  type="date"
                  name="available"
                  id="available"
                  required
                  onChange={handleFilters}
                  value={flatToEdit.available}
                />
              </div>
            </div>

            <div className="box3">
              <div className="checkboxStyles">
                <label htmlFor="mobileNumber">
                  <b>Numer telefonu</b>
                  <span className="colorStar">*</span>
                </label>
                <br />
                <input
                  className="userData"
                  type="tel"
                  name="mobileNumber"
                  id="mobileNumber"
                  required
                  placeholder="123-456-789"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                  onChange={handleFilters}
                  value={flatToEdit?.mobileNumber}
                />
              </div>
              <div className="checkboxStyles">
                <label htmlFor="mailAddress">
                  <b>Mail do kontaktu</b>
                  <span className="colorStar">*</span>
                </label>
                <br />
                <input
                  className="userData"
                  type="email"
                  name="mailAddress"
                  id="mailAddress"
                  required
                  onChange={handleFilters}
                  value={flatToEdit.mailAddress}
                />
              </div>
              <div className="box3.1"></div>
              <div className="checkboxStyles__checkbox">
                <input
                  className="checkboxInput"
                  name="isElevator"
                  type="checkbox"
                  onChange={handleFilters}
                  checked={flatToEdit.isElevator}
                />
                <label htmlFor="isElevator">Winda</label>
              </div>

              <div className="checkboxStyles__checkbox">
                <input
                  className="checkboxInput"
                  name="isFurnished"
                  type="checkbox"
                  onChange={handleFilters}
                  checked={flatToEdit.isFurnished}
                />
                <label htmlFor="isFurnished">Umeblowanie</label>
              </div>

              <div className="checkboxStyles__checkbox">
                <input
                  className="checkboxInput"
                  name="isAC"
                  type="checkbox"
                  onChange={handleFilters}
                  checked={flatToEdit.isAC}
                />
                <label htmlFor="isAC">Klimatyzacja</label>
              </div>
              <div className="checkboxStyles__checkbox">
                <input
                  className="checkboxInput"
                  name="isLoggia"
                  type="checkbox"
                  onChange={handleFilters}
                  checked={flatToEdit.isLoggia}
                />
                <label htmlFor="isLoggia">Balkon</label>
              </div>

              <div className="checkboxStyles__checkbox">
                <input
                  className="checkboxInput"
                  name="isParking"
                  type="checkbox"
                  onChange={handleFilters}
                  checked={flatToEdit.isParking}
                />
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
                <button
                  onClick={handleDate}
                  className="submitButton"
                  type="submit"
                >
                  Zaktualizuj ogłoszenie
                </button>
              </div>
            </div>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
          </Container>
          <br />
        </form>
      </MainDiv>
    </>
  );
};

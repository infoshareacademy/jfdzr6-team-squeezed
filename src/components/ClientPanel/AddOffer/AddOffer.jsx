import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
import { db, storage } from "../../../utils/firebase";
import { Sections, PhotoLabel, PhotoSpan, PhotoInput, MainDiv, ElementListTitle } from "../AddOffer/AddOffer.Styled";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { Geocode } from "react-geocode";
import { v4 } from 'uuid';

export const AddOffer = ({ flats }) => {
  const [streetAddress, setStreetAddress] = useState('');
  const [cityAddress, setCityAddress] = useState('');
  const [photosUrl, setPhotosUrl] = useState([]);

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
      isAC,
      isElevator,
      isFurnished,
      isLoggia,
      isParking,
    } = form;

    const flatsRef = collection(db, "flats");

    const address = (streetAddress, cityAddress);

    Geocode.setApiKey("AIzaSyC-s3g21oo0hfRTiSijJiyIBVIAlKBCgTU");
    Geocode.enableDebug();
    Geocode.setLanguage('pl');
    Geocode.setRegion('pl');

    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const newGeo = new GeoPoint(lat, lng);
        console.log(newGeo);
        console.log(lat, lng);
        // setGeo(newGeo);
      },
      (error) => {
        console.error(error);
      }
    );

    const photosArray = [];

    for (let prop in photos.files) {
      if (typeof photos.files[prop] === 'object') {
        const storageRef = ref(storage, `flat/${photos.files[prop].name}+${v4()}`);
        const snapshot = await uploadBytes(storageRef, photos.files[prop]);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        photosArray.push(downloadUrl)
        setPhotosUrl((prevState) => {
          const newState = [...prevState, downloadUrl]
          return newState;
        })
      };

      const flat = {
        title: title.value,
        cords: newGeo,
        description: description.value,
        street: street.value,
        city: city.value,
        photos: photosArray,
        size: size.value,
        price: price.value,
        rooms: rooms.value,
        floor: floor.value,
        isAC: isAC.value,
        isElevator: isElevator.value,
        isFurnished: isFurnished.value,
        isLoggia: isLoggia.value,
        isParking: isParking.value,
        createAt: serverTimestamp(),
      };

      addDoc(flatsRef, flat).then(() => {
        //   navigate('/newoffer')
      });
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
                <li>
                  <label htmlFor="street">Ulica:</label>
                  <br />
                  <input type="text" name="street" id="street" onChange={(e) => {
                    setStreetAddress(e.target.value)
                  }} />
                </li>
                <li>
                  <label htmlFor="city">Miasto:</label>
                  <input type="text" name="city" id="city" required onChange={(e) => {
                    setCityAddress(e.target.value)
                  }} />
                </li>
              </ElementListTitle>
            </Sections>
            <Sections>
              <ElementListTitle>
                <li className='photosLabel'>
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
                      required />
                  </PhotoLabel>
                  <br />
                  {selectedPhotos.length > 0 && (selectedPhotos.length > 10 ? (
                    <p className="error">Nie możesz dodać więcej niż 10 zdjęć. <br />
                      <span>Ilość zdjęć do usunięcia: <b> {selectedPhotos.length - 10} </b></span>
                    </p>
                  ) : (
                    <button className="upload-btn"
                      onClick={() => {
                        console.log("Wgrane zdjęcia");
                      }}
                    >
                      Wgrano  {selectedPhotos.length} zdjęć.
                      {selectedPhotos.length === 1 ? "" : ""}
                    </button>
                  ))}
                  <div className="photos">
                    {selectedPhotos && selectedPhotos.map((photo, index) => {
                      return (
                        <div key={photo} className="photo">
                          <img src={photo} height="150" alt="upload" />
                          <button onClick={() =>
                            setSelectedPhotos(selectedPhotos.filter((e) => e !== photo))
                          }
                          >
                            Usuń
                          </button>
                          <p>{index + 1}</p>
                        </div>
                      )
                    })}
                  </div>
                </li>
                <li>
                  <label htmlFor="size">Powierzchnia:</label>
                  <input type="number" name="size" id="size" required />
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
                  <label htmlFor="isAC">Dostępne:</label>
                  <input name="isAC" type="checkbox" />
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
                  <label htmlFor="isLoggia">Balkon:</label>
                  <input name="isLoggia" type="checkbox" />
                </li>
                <li>
                  <label htmlFor="isParking">Parking:</label>
                  <input name="isParking" type="checkbox" />
                </li>
              </ElementListTitle>
            </Sections>
            {/* <button onClick={handleUpload} type="submit">Dodaj ogłoszenie</button> */}
            <button type="submit">Dodaj ogłoszenie</button>
          </form>
        </MainDiv>
      </>
    );
  }
}
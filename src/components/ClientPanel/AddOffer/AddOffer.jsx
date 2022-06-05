import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { db } from '../../../utils/firebase'

export const AddOffer = ({ flats }) => {     //problem - co ma sie znaleźć w parametrze?
//   const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const { title, description, street, city, photos, size, price, rooms, floor, isAC, isElevator, isFurnished, isLoggia, isParking} = e.target
    const flat = {
      title: title.value,
      description: description.value,
      street: street.value,
      city: city.value,
      photos: photos.value,
      size: size.value,
      price: price.value,
      rooms:rooms.value,
      floor:floor.value,
      isAC:isAC.value,
      isElevator:isElevator.value,
      isFurnished:isFurnished.value,
      isLoggia:isLoggia.value,
      isParking:isParking.value,

 
      createAt: serverTimestamp(),
    }

    const flatsRef = collection(db, 'flats')
    addDoc(flatsRef, flat).then(() => {
    //   navigate('/newoffer')   //problem - jak otworzyc formularz w nowej stronie?
    })
  }

  return (
    <>
      <h4>Im więcej szczegółów tym lepiej!</h4>
      <form onSubmit={handleSubmit}>
        <section>
            <ul>
                <li><label htmlFor="title">Tytuł</label>
                <input type="text" name="title" id="title" required/></li> 

                <li><label htmlFor="description">Opis:</label>
                <textarea id="description" name="description" /></li>

                <li><label htmlFor="street">Ulica:</label>
                <input type="text" name="street" id="street" /></li>

                <li><label htmlFor="city">Miasto:</label>
                <input type="text" name="city" id="city" required/></li>
            </ul>
        </section>
         <section>
             <ul>
                <li><label htmlFor="photos">Zdjęcie:</label>
                <input type="file" name="photos" id="photos" required/></li>

                <li><label htmlFor="size">Powierzchnia:</label>
                <input type="number" name="size" id="size" required/></li>

                <li><label htmlFor="price">Cena:</label>
                <input type="number" name="price" id="price" required/></li>

                <li><label htmlFor="rooms">Liczba pokoi:</label>
                <input type="number" name="rooms" id="rooms" /></li>

                <li><label htmlFor="floor">Piętro:</label>
                <input name="floor" type="checkbox" /></li>

                <li><label htmlFor="isAC">Dostępne:</label>
                <input name="isAC" type="checkbox" /></li>

                <li><label htmlFor="isElevator">Winda:</label>
                <input name="isElevator" type="checkbox" /></li>

                <li><label htmlFor="isFurnished">Umeblowanie:</label>
                <input name="isFurnished" type="checkbox" /></li>

                <li><label htmlFor="isLoggia">Balkon:</label>
                <input name="isLoggia" type="checkbox" /></li>

                <li><label htmlFor="isParking">Parking:</label>
                <input name="isParking" type="checkbox" /></li>

            </ul>
            </section>
        <button type="submit">Dodaj ogłoszenie</button>
      </form>
    </>
  )
}
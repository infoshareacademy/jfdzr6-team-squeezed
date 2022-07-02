import { Form } from "./Form";;
import { auth } from "../../utils/firebase";
import { getFormData } from "../../utils/getFormData";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import registerIMG from "../auth/register.avif"
import styled from "styled-components";


const ContainerDivRegister = styled.div`
 flex-wrap: wrap;
margin: 195px auto;
`

export const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const { email, password } = getFormData(e)
        createUserWithEmailAndPassword(auth, email, password)
            .then(jwt => {
                e.target.reset()
                console.log("przed wylogowywaniem", jwt)
                signOut(auth)
            })
            .catch(e => {
                alert(firebaseErrors[e.code])
            })
    }

    return (
        <ContainerDivRegister>
            <Form submitText="Zarejestruj się" image={registerIMG} headerText="Załóż konto już teraz!" paragraphText="Dzięki Rejstracji konta na naszej stronie możesz dodawać ogłoszenia wynajmu nieruchomości." onSubmit={handleRegister} />
        </ContainerDivRegister>)
}

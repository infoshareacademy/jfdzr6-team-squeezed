import { Form } from "./Form";
import { auth } from "../../utils/firebase";
import { getFormData } from "../../utils/getFormData";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { ForgotPassword } from "./ForgotPassword";

import styled from "styled-components";

export const ContainerRenderStyled = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
width: 1440px;
margin: 0 auto;
column-gap: 0.5px;

`

export const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const { email, password } = getFormData(e);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                e.target.reset()
                console.log(res)
            })
            .catch(e => {
                console.log(e)
                alert(firebaseErrors[e.code])
            })
    }

    return (
        <ContainerRenderStyled>
            <Form submitText="Zaloguj się" headerText="Zaloguj się, aby kontynuować" paragraphText="Przed podaniem danych logowania, zawsze upewniaj się, czy jesteś na właściwej stronie." onSubmit={handleLogin} />
            <ForgotPassword />
        </ContainerRenderStyled>

    )

}
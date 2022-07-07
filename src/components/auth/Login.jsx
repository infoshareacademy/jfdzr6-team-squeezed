import { Form } from "./Form";
import { auth } from "../../utils/firebase";
import { getFormData } from "../../utils/getFormData";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { ForgotPassword } from "./ForgotPassword";
import loginIMG from "../auth/login.avif"

import styled from "styled-components";

export const ContainerRenderStyled = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 0px;
margin-bottom: 13px;

`

export const Login = ({setActiveFlat}) => {
    const handleLogin = e => {
        e.preventDefault()
        const { email, password } = getFormData(e);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                e.target.reset()
                setActiveFlat("")
            })
            .catch(e => {
                console.log(e)
                alert(firebaseErrors[e.code])
            })
    }

    return (
        <ContainerRenderStyled>
            <Form submitText="Zaloguj się" image={loginIMG} headerText="Zaloguj się, aby kontynuować" paragraphText="Przed podaniem danych logowania, zawsze upewniaj się, czy jesteś na właściwej stronie." onSubmit={handleLogin} />
            <ForgotPassword />
        </ContainerRenderStyled>

    )

}
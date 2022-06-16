import { Form } from "./Form";
import { auth } from "../../utils/firebase";
import { getFormData } from "../../utils/getFormData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";

export const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const { email, password } = getFormData(e);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
                alert(firebaseErrors[e.code])
            })
    }

    return <Form submitText="Zarejestruj się" onSubmit={handleRegister} />;

}
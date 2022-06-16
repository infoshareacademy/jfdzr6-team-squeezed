import { Form } from "./Form";
import { auth } from "../../utils/firebase";
import { getFormData } from "../../utils/getFormData";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";

export const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const { email, password } = getFormData(e);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
                alert(firebaseErrors[e.code])
            })
    }

    return <Form submitText="Zaloguj się" onSubmit={handleLogin} />;
}
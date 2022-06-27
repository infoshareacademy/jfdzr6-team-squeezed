import { auth } from "../../utils/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { Form } from "./Form";
import { sendPasswordResetEmail } from "firebase/auth";
import forgotpasswordIMG from "../auth/forgotpassword.avif"

export const ForgotPassword = () => {
    const handleResetPass = e => {
        e.preventDefault()

        sendPasswordResetEmail(auth, e.target.email.value)
            .then(res => {
                e.target.reset()
            })
            .catch(e => {
                console.log(e)
                alert(firebaseErrors[e.code])
            })
    }

    return <Form submitText="Przypomnienie hasła" headerText="Zapomniałeś hasła?" image={forgotpasswordIMG} paragraphText="Wpisz adres e-mail, na który zostało założone konto. Wyślemy na ten adres email wiadomość z linkiem do ustawienia nowego hasła." isPasswordHidden onSubmit={handleResetPass} />
};
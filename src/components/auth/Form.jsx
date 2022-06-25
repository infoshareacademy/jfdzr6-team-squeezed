import emailSVG from "../auth/email.png"
import passwordSVG from "../auth/password.png"
import { ContainerStyled } from "./FormStyled"





export const Form = ({ submitText, isPasswordHidden = false, onSubmit, headerText, paragraphText }) => {

  return (
    <>

      <ContainerStyled>

        <div className="left"></div>
        <form className="log-in" onSubmit={onSubmit}>
          <h4>{headerText}</h4>
          <p>{paragraphText}</p>
          <div className="floating-label">
            <label htmlFor="email">Podaj email</label>
            <input type="email" placeholder="e-mail" name="email" id="email" />
            <div class="icon"><img src={emailSVG} alt="" /></div>
          </div>

          {!isPasswordHidden && (
            <div className="floating-label">
              <label htmlFor="password">Podaj hasło</label>
              <input type="password" placeholder="hasło" name="password" id="password" />
              <div class="icon"><img src={passwordSVG} alt="" /></div>
            </div>
          )}
          <button>{submitText}</button>
        </form>

      </ContainerStyled>
      <br></br>

    </>

  )
}
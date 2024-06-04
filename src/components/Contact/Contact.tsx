import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Feel free to contact me</h2>
        <p>Contact me directly via email if you are interested in making something great together.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:milan030820003@gmail.com">milan030820003@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+381649206722">(+381) 64/920-67-22</a>
        </div>  
      </div></Container>
  )
}
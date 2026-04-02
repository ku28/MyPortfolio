import { Container } from "./styles";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){
  return(
    <SectionWrapper>
      <Container id="contact">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">{'// contact'}</span>
        </div>
        <header>
          <h2>Get In Touch</h2>
          <p>Ready to start your next project? Let's build something great together.</p>
        </header>
        <div className="contacts">
          <a href="mailto:kushagrajuneja7@gmail.com" className="contact-card">
            <div className="contact-icon">
              <img src={emailIcon} alt="Email" />
            </div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">kushagrajuneja7@gmail.com</span>
            </div>
          </a>
          <a href="tel:+918837773868" className="contact-card">
            <div className="contact-icon">
              <img src={phoneIcon} alt="Phone" />
            </div>
            <div className="contact-info">
              <span className="contact-label">Phone</span>
              <span className="contact-value">(+91) 8837773868</span>
            </div>
          </a>
        </div>
        <Form></Form>
      </Container>
    </SectionWrapper>
  )
}
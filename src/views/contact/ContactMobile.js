import Wrapper from './ContactMobile.styles';
import githubIcon from 'assets/resources/icons/GitHub.png';
import linkedinIcon from 'assets/resources/icons/linkedIn.png';
import MobileSvg from '../../assets/svg/contact-page/mobile-mail.svg';
const ContactMobile = () => {
  return (
    <Wrapper>
      <div className="contact-container">
        <div className="contact">
          <h1>Contact me at:</h1>
          <div className="email">
            <h2>wladyka.bj@gmail.com</h2>
          </div>
        </div>
        <div className="social-media">
          <h1>or visit me:</h1>
          <div className="social-media-links">
            <div className="links">
              <a href="https://github.com/AlienQbw" target="_blank">
                <img src={githubIcon} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/bartosz-w%C5%82adyka-6a6a39204"
                target="_blank"
              >
                <img src={linkedinIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-image">
        <img src={MobileSvg} alt="" />
      </div>
    </Wrapper>
  );
};
export default ContactMobile;

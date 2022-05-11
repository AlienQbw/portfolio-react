import { Wrapper } from './Contact.styles';
import MailSvg from '../../assets/svg/contact-page/MailSvg';
const Contact = () => {
  return (
    <Wrapper>
      <div className="contact-header-1">
        <h2>Email me at</h2>
      </div>
      <div className="contact-header-2">
        <h1>
          bwladyka.bw
          <br />
          <span>@</span>gmail.com
        </h1>
      </div>
      <div className="contact-image">
        <MailSvg />
      </div>
    </Wrapper>
  );
};
export default Contact;

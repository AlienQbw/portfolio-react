import { Wrapper } from './Contact.styles';
import MailSvg from '../../assets/svg/contact-page/MailSvg';
import MobileSvg from '../../assets/svg/contact-page/mobile-mail.svg';
const Contact = () => {
  return (
    <Wrapper>
      <div className="contact-header-1">
        <h1>
          <span id="span-1">b</span>
          <span id="span-2">w</span>
          <span id="span-3">l</span>
          <span id="span-4">a</span>
          <span id="span-5">d</span>
          <span id="span-6">y</span>
          <span id="span-7">k</span>
          <span id="span-8">a</span>
          <span id="span-9">.</span>
          <span id="span-10">b</span>
          <span id="span-11">w</span>
          <br />
          <span className="at-span">@</span>gmail.com
        </h1>
      </div>
      <div className="contact-image">
        <MailSvg />
      </div>
      <div className="contact-image-mobile">
        <img src={MobileSvg} alt="" />
      </div>
    </Wrapper>
  );
};
export default Contact;

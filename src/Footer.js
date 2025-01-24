import twitter from "./images/footer_images/twitter.png";
import instagram from "./images/footer_images/instagram.png";
import whatsapp from "./images/footer_images/whatsapp.png";
import facebook from "./images/footer_images/facebook.png";
import youtube from "./images/footer_images/youtube.png";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
        <div className="footerFirst">
            <p>CONTACT US</p>
            <p>SEARCH</p>
            <p>ANNOUNCEMENT</p>
            <p>LEGAL NOTICE</p>
            <p>HELP</p>
            <p>SITE MAP</p>
        </div>

        <div className="footerSecond">
          <div className="footerSecondFirst">
            <h4><b>TOP SECTION</b></h4>
            <p>EBOOK</p>
            <p>FIND A DEALER</p>
            <p>TEST DRIVE</p>
            <p>BROCHURE</p>
            <p>EXCHANGE</p>

          </div>

          <div className="footerSecondSecond">
            <h4><b>QUICK LINKS</b></h4>
            <p>ABOUT US</p>
            <p>FEEDBACK/QUERIES</p>
          </div>

          <div className="footerSecondThird">
            <h4><b>FOLLOW TOYOTA</b>TA</h4>
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={whatsapp} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>

          <div className="footerSecondFourth">
            
          </div>
        </div>
    </footer>
  )
}

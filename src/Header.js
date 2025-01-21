import toyotaLogo from "./images/Toyota-logo.jpg";
import whatsappLogo from "./images/whatsapp.svg";

import "./Header.css";

export const Header = () => {
  return (
    <header>
        <img className="toyotaLogo" src={toyotaLogo} alt={"Toyota Logo"} />
        <div className="navigationText">
            <p>PRODUCTS</p>
            <p>VIRTUAL SHOWROOM</p>
            <p>SERVICE</p>
            <p>USED CARS</p>
            <p>MOBILITY</p>
            <p>MEDIA</p>
            <p>TOYOTA IN INDIA</p>
            <p>MORE</p>
        </div>
        <button>BUY ONLINE</button>
        <img id={"whatsappLogo"} src={whatsappLogo} alt="whatsApp Logo" />
    </header>
  )
}

import toyotaLogo from "./images/Toyota-logo.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

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
        <i className="bi bi-whatsapp"></i>
    </header>
  )
}

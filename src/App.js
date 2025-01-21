import appFirstImage from "./images/rumion-home-banner-1920x807.jpg";
import steering from "./images/steer.png";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <img id="appFirstImage" src={appFirstImage} alt="" />

      <div className="appSecondSection">

        <div className="appSecondSection first">
          <i className="bi bi-geo-alt"></i>
          <p>Find a Dealer</p>
        </div>

        <div className="appSecondSection second">
          <img src={steering} alt="" />
          <p>Test Drive</p>
        </div>

        <div className="appSecondSection third">
          <i className="bi bi-tag"></i>
          <p>Price List</p>
        </div>

        <div className="appSecondSection fourth">
          <i className="bi bi-book"></i>
          <p>E Book</p>
        </div>

        <div className="appSecondSection fifth">
          <i className="bi bi-journals"></i>
          <p>Brochure</p>
        </div>

        <div className="appSecondSection sixth">
          <i className="bi bi-arrow-left-right"></i>
          <p>Exchange</p>
        </div>
        
      </div>
    </div>
  )
}

import appFirstImage from "./images/rumion-home-banner-1920x807.jpg";
import appSecondImage from "./images/virtual-showroom-1920x807.jpg";

import atlas from "./images/range_car_images/atlas.png";
import fortuner from "./images/range_car_images/fortuner.png";
import glanza from "./images/range_car_images/glanza.webp";
import hilux from "./images/range_car_images/hilux.webp";
import inovacrysta from "./images/range_car_images/inovacrysta.png";
import inovahycross from "./images/range_car_images/inovahycross.webp";
import legender from "./images/range_car_images/legender.png";
import rav4 from "./images/range_car_images/rav4_4.png";
import rumion from "./images/range_car_images/rumion.jpg";
import velfire from "./images/range_car_images/velfire.webp";

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

      <img id="appSecondImage" src={appSecondImage} alt="" />

      <h1 id="rangeHeading">Discover the Toyota Range</h1>

      <div className="rangeCarImages">
        <div className="rangeCarImagesFirst">
          <img id="atlas" src={atlas} alt="" />
          <img id="fortuner" src={fortuner} alt="" />
          <img id="glanza" src={glanza} alt="" />
          <img id="hilux" src={hilux} alt="" />
          <img id="inovacrysta" src={inovacrysta} alt="" />
        </div>
        
        <div className="rangeCarImagesSecond">
          <img id="inovahycross" src={inovahycross} alt="" />
          <img id="legender" src={legender} alt="" />
          <img id="rav4" src={rav4} alt="" />
          <img id="rumion" src={rumion} alt="" />
          <img id="velfire" src={velfire} alt="" />
        </div>
        
      </div>
    </div>
  )
}

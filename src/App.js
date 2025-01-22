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

import aweFirst from "./images/awesome_section_images/become-dealer-multi-with-all-models-547x306.jpg";
import aweSecond from "./images/awesome_section_images/rumion-whats-awesome-547x306.jpg";
import aweThird from "./images/awesome_section_images/seamless-conversisons-547x306.jpg";
import aweFourth from "./images/awesome_section_images/wow-whats-awesome-547x306.jpg";

import moreDelivery from "./images/more/delivery-lead-time-547x306.jpg";
import moreHappy from "./images/more/happy-customers-547x306.jpg";
import moreSixteen from "./images/more/sixteen-annual-dream-car-contst-547x306.jpg";
import moreToyota from "./images/more/toyota-environment-400x240.jpg";

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

      <h1 id="whatsAwesomeHeading">What's Awesome</h1>

      <div className="whatsAwesome">

        <div className="whatsAwesomeFirst">
          <img src={aweFirst} alt="" />
          <p><b>Become Dealer</b></p>
          <button>Know More</button>
        </div>

        <div className="whatsAwesomeSecond">
          <img src={aweSecond} alt="" />
          <p><b>Rumion</b></p>
          <button>Know More</button>
        </div>

        <div className="whatsAwesomeThird">
          <img src={aweThird} alt="" />
          <p><b>Mobility Solution</b></p>
          <button>Know More</button>
        </div>

        <div className="whatsAwesomeFourth">
          <img src={aweFourth} alt="" />
          <p><b>Wheel on Web</b></p>
          <button>Know More</button>
        </div>

      </div>

      <h1 id="pressReleases">Press Releases</h1>
      <p id="checkoutLatestNews">Checkout Latest News</p>

      <div className="news">
        <div className="news1">
          <div className="newsDate">
            <p>01</p>
            <p>November</p>
            <p>2023</p>
          </div>

          <div className="right">
            <p className="first">Toyota Kirloskar Motor Reports Robust Performance: Sells 21,879 Units in
            October 2023</p>
            <p className="second">Bangalore, November 01, 2023: Toyota Kirloskar Motor (TKM) today reported yet another month of strong performance with the sales of 21,879 units indicating a sharp rise of 66% in comparison with October 2022, when the sales stood at 13,143 uni...
            </p>
          </div>
        </div>

        <div className="news2">
          <div className="newsDate">
            <p>20</p>
            <p>October</p>
            <p>2023</p>
          </div>

          <div className="right">
            <p className="first">Toyota Kirloskar Motor Reports Robust Performance: Sells 21,879 Units in
            October 2023</p>
            <p className="second">Bangalore, November 01, 2023: Toyota Kirloskar Motor (TKM) today reported yet another month of strong performance with the sales of 21,879 units indicating a sharp rise of 66% in comparison with October 2022, when the sales stood at 13,143 uni...</p>
          </div>
          
        </div>

        <div className="news3">
          <div className="newsDate">
            <p>17</p>
            <p>October</p>
            <p>2023</p>
          </div>

          <div className="right">
            <p className="first">Toyota Kirloskar Motor Reports Robust Performance: Sells 21,879 Units in
            October 2023</p>
            <p className="second">Bangalore, November 01, 2023: Toyota Kirloskar Motor (TKM) today reported yet another month of strong performance with the sales of 21,879 units indicating a sharp rise of 66% in comparison with October 2022, when the sales stood at 13,143 uni...</p>
          </div>
          
        </div>

        <div className="news4">
          <div className="newsDate">
            <p>14</p>
            <p>October</p>
            <p>2023</p>
          </div>

          <div className="right">
            <p className="first">Toyota Kirloskar Motor Reports Robust Performance: Sells 21,879 Units in
            October 2023</p>
            <p className="second">Bangalore, November 01, 2023: Toyota Kirloskar Motor (TKM) today reported yet another month of strong performance with the sales of 21,879 units indicating a sharp rise of 66% in comparison with October 2022, when the sales stood at 13,143 uni...</p>
          </div>
          
        </div>

      </div>

      <p id="viewAll"><b>View All></b></p>

      <h1 id="moreHeading">More From Toyota</h1>

      <div className="more">
        <img src={moreDelivery} alt="" />
        <img src={moreHappy} alt="" />
        <img src={moreSixteen} alt="" />
        <img src={moreToyota} alt="" />
      </div>

    </div>
  )
}

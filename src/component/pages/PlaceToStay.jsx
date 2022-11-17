import React from "react";
// imported components below
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// imported images below
import one from "../../images/Frame 1.png";
import two from "../../images/Frame 7.png";
import three from "../../images/Frame 3.png";
import four from "../../images/Frame 8.png";
import five from "../../images/Frame 3.png";
import six from "../../images/Frame 5.png";
import seven from "../../images/Frame 6.png";
import eight from "../../images/Frame 8.png";
import stars from "../../images/stars.png";
import houseOne from "../../images/pstayseven.png";
import houseTwo from "../../images/pstaythree.png";
import houseThree from "../../images/pstayone.png";
import houseFour from "../../images/pstaythree.png";
import houseFive from "../../images/pstayfive.png";
import houseSix from "../../images/pstaysix.png";
import houseSeven from "../../images/pstayfive.png";
import { GoSettings } from "react-icons/go";
//imported css file below
import "./Place-to-stay.css";

function PlaceToStay() {
  return (
    <div id="wrapper">
      <Navbar />
      <nav className="house_name_navbar">
        <a href="/">Restaurant</a>
        <a href="/">Cottage</a>
        <a href="/">Castle</a>
        <a href="/">Fantastic City</a>
        <a href="/">Beach</a>
        <a href="/">Carbins</a>
        <a href="/">Off-grid</a>
        <a href="/">Farm</a>

        <button className="location_btn">
          location <GoSettings />
        </button>
      </nav>
      <div className="house_section">
        <div className="house_images">
          <div className="two_houses">
            <div className="house">
              <img src={one} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={two} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={three} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={four} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
          </div>

          <div className="two_houses">
            <div className="house">
              <img src={five} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={six} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={seven} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={eight} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="house_images">
          <div className="two_houses">
            <div className="house">
              <img src={houseOne} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={houseTwo} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={houseThree} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={houseFour} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
          </div>

          <div className="two_houses">
            <div className="house">
              <img src={houseFive} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={houseSix} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={houseSeven} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
            <div className="house">
              <img src={four} alt="house" className="house_img" />
              <div className="house_description">
                <span>
                  <p>Desert king</p>
                  <p>2345km away</p>
                  <img src={stars} alt="house" />
                </span>
                <span>
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PlaceToStay;

import React from "react";
//imported components below
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
//imported all images below
import house from "../../images/fourimg.png";
import mbtoken from "../../images/mbtoken.png";
import metamask from "../../images/metamask.png";
import opensea from "../../images/opensea.png";
import one from "../../images/Frame 1.png";
import two from "../../images/Frame 3.png";
import three from "../../images/Frame 4.png";
import four from "../../images/Frame 5.png";
import five from "../../images/Frame 8.png";
import six from "../../images/Frame 8.png";
import seven from "../../images/Frame 5.png";
import eight from "../../images/Frame 1.png";
import stars from "../../images/stars.png";
import frame3 from "../../images/Frame 3in1.png";

import "./Home.css";

function Home() {
  return (
    <div id="wrapper">
      <Navbar />
      {/* <Modal/> */}
      <div className="top_layout">
        <div className="headline">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the
            <span> Metaverse</span>
          </h1>
          <div className="description">
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone.
            </p>
            <span className="search_box">
              <input type="search" placeholder="search for location" />
              <button className="search_btn">search</button>
            </span>
          </div>
        </div>
        <img src={house} alt="houses" className="top_4_img" />
      </div>
      <div className="sponsors">
        <img src={mbtoken} alt="mbtoken" />
        <img src={metamask} alt="metamask" />
        <img src={opensea} alt="opensea" />
      </div>
      <h2 className="house_headline">Inspiration for your next adventure</h2>

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
          </div>

          <div className="two_houses">
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
        </div>

        <div className="house_images">
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
          </div>

          <div className="two_houses">
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
      </div>
      <div className="learn_more_div">
        <div className="learn_more_section">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFTs gift cards collection. Loyal customers gets
            amazing gift cards which are traded as NFTs. These NFTs gives our
            customer access to loads of our exclusive services.
          </p>
          <button className="learn_more_btn">Learn more</button>
        </div>
        <img src={frame3} alt="" className="frame3" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

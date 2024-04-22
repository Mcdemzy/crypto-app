// import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Giftcard from "../../assets/giftcards.png";
import Shield from "../../assets/security.png";
import Bitcoin from "../../assets/bitcoin.png";

import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const LandingPage = () => {
  return (
    <>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="landingpage__container">
          <div className="landingpage__slide-one">
            <h1>Buy, Sell, Swap</h1>
            <h2>14+ Crypto</h2>
            <p>
              Explore a world of possibilities with 14+ <br />
              cryptocurrencies to buy, sell, and swap
            </p>

            <a href="">
              <FaArrowRightLong />
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide className="landingpage__slide-two">
          <img src={Giftcard} alt="" />
          <h1>
            Buy and Sell <br /> 120+ Giftcards
          </h1>

          <p>
            Unlock the value of 120+ gift cards with <br />
            ease - buy or sell them hassle free.
          </p>
          <a href="">
            <FaArrowRightLong />
          </a>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="landingpage__slide-three">
          <img src={Shield} alt="" />
          <h1>
            Secure Funds and <br />
            Instant Payouts
          </h1>
          <p>
            Your funds are safe with us. Enjoy Instant <br />
            Payouts with top-notch security.
          </p>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="landingpage__slide-four">
          <img src={Bitcoin} alt="" width={250} height={250} />
          <h1>
            Do More With <br />
            Crypto
          </h1>
          <p>
            Embark on a journey towards endless <br />
            possibilities with crypto.
          </p>
          {/* Add pagination dots */}
          <button>Get Started</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LandingPage;

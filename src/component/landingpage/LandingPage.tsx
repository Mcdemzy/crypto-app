// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";
// import Giftcard from "../../assets/giftcards.png";
import Shield from "../../assets/security.png";
import Bitcoin from "../../assets/bitcoin.png";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

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

            {/* <a href="">
              <FaArrowRightLong />
            </a> */}
          </div>
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
          <img src={Bitcoin} alt="" width={300} height={300} />
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

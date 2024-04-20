// import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Giftcard from "../../assets/giftcards.png";
import Shield from "../../assets/security.png";

const LandingPage = () => {
  return (
    <>
      {/* <section className="landingpage__container">
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
      </section> */}

      {/* Slide 2 */}

      {/* <section className="landingpage__slide-two">
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
      </section> */}

      {/* Slide 3 */}
      <section className="landingpage__slide-three">
        <img src={Shield} alt="" width={200} />
      </section>
    </>
  );
};

export default LandingPage;

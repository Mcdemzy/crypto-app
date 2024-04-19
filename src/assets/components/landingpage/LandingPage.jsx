import React from "react";
import Logo from "../../assets/coin-buddy.png";

const LandingPage = () => {
  return (
    <>
      <section className="page__container text-black">
        <div className="page__container-top">
          {/* <p>Skip</p> */}
          <img src={Logo} alt="" />
          {/* <h1>Coin Buddy</h1> */}
        </div>
        <div className="page__container-bottom">
          <h1>
            An All-in-One <br />
            Cryptocurrency App
          </h1>
          <p>
            Buy, store, trade, exchange, learn and <br /> earn crypto with a
            single tap
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;

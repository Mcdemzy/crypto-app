// import React from 'react'

const Banner = () => {
  return (
    <>
      <section className="banner__container">
        <h1>
          Do More With <br />
          crypto
        </h1>
        <p>
          Get the most out of your crypto investment with the (app) App. <br />
          Transact Bitcoin and other cryptocurency in two easy steps.
        </p>

        <div className="flex flex-col gap-4 mt-10 mb-10">
          <a href="" className="balance__signin">
            Sign in
          </a>
          <a href="" className="balance__signup">
            Sign up
          </a>
        </div>
        <p className="text-center">
          By continuing, you are agreeing to our{" "}
          <a href="" className="text-[#ffcc00]">
            Terms and Conditions <br />
          </a>
          and consent to our{" "}
          <a href="" className="text-[#ffcc00]">
            Privacy Policy
          </a>
        </p>
      </section>
    </>
  );
};

export default Banner;

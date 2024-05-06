import "./landingpage.css";
import { MdWorkspacePremium } from "react-icons/md";
import { PiGraphThin } from "react-icons/pi";
import { PiBrainBold } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { GiParachute } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";
import { BiSolidWallet } from "react-icons/bi";
import { SiPivotaltracker } from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <>
      <article className="landing__page">
        {/* Navbar Section */}
        <section className="navbar__section">Navbar</section>
        {/* Landing Page Banner */}
        <section className="banner__section">
          <h1>
            The time to{" "}
            <span>
              invest in <br /> crypto{" "}
            </span>
            is now.
          </h1>
          <p>Seize the moment before the giants do</p>

          {/* Timer Div */}
          <div></div>

          <a href="">Become a Winner</a>

          {/* Video Div */}
          <div className="video__section"></div>

          {/* Text Div */}
          <div className="text__section">
            <p>
              For the first time, we have a consistent flow of capital entering
              the crypto market. This will culminate in the biggest bull run in
              history. This is how you get ahead of the institutional curve...
            </p>

            <h3>Seize this rare opportunity</h3>
            <p>
              Cryptonary, founded in 2017, is a research and analysis firm
              designed for retail investors like you. Our members get on-demand
              access to a team of researchers and analysts who specialise in
              finding crypto tokens with the highest return possible.
            </p>
            <p>Your unfair advantage and 100X opportunities await…</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features__section">
          <div className="features__box">
            <MdWorkspacePremium className="features__icon" />
            <h3>Research</h3>
            {/* <p className=" hidden">
              Our team of researchers and analysts specialise in finding crypto
              tokens with the highest return possible.
            </p> */}
            <FaPlus className="features__icon" />
          </div>
        </section>
      </article>
    </>
  );
};

export default LandingPage;

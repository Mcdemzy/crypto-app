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
import { Link } from "react-router-dom";

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
          {/* <div className="features__box"> */}
          {/* <MdWorkspacePremium className="features__icon" /> */}
          {/* <h3>Research</h3> */}
          {/* <p className=" hidden">
              Our team of researchers and analysts specialise in finding crypto
              tokens with the highest return possible.
            </p> */}
          {/* <FaPlus className="features__icon" /> */}
          {/* </div> */}
          {/* accordian section here  */}
          <div className="w-[90%] m-auto">
            {/* Accordian */}
            <aside>
              <div className="mx-auto max-w-5xl mt-8 grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <details className="group rounded-md px-3" open>
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Premium Research</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Discover our top token picks for 2024. Capitalise on
                        winning crypto opportunities and optimise your portfolio
                        the simple way.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Altcoin opportunities</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Smary Money</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Uncover the secrets of crypto’s most successful
                        investors. Capitalise on opportunities early.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Cryptonary's Picks</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Airdrops Tool</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Community</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Market Updates</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Discover our top token picks for 2024. Capitalise on
                        winning crypto opportunities and optimise your portfolio
                        the simple way.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Portfolie Tracker</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Market Direction</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Discover our top token picks for 2024. Capitalise on
                        winning crypto opportunities and optimise your portfolio
                        the simple way.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Altcoin opportunities</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>Premium Research</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Discover our top token picks for 2024. Capitalise on
                        winning crypto opportunities and optimise your portfolio
                        the simple way.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 border-2 border-primary"></div>
                        <p>ETF Tracker</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
              </div>
            </aside>
          </div>
        </section>
        {/* Ride the crypto wave section */}
        <section className="mt-10 w-[90%] border-2 m-auto p-2">
          <h1 className=" m-auto mt-10 text-black font-bold text-4xl text-center">
            Ride the crypto wave to a <br />
            multi-million dollar portfolio
          </h1>
          <div className="mt-10 w-full flex flex-row">
            <div className="w-[50%]  space-y-4 p-6">
              <div className="h-[200px] border-2 border-primary"></div>
              <div className="h-[200px] border-2 border-primary"></div>
              <div className="h-[200px] border-2 border-primary"></div>
              <div className="h-[200px] border-2 border-primary"></div>
            </div>
            <div className="w-[50%] space-y-4 p-6">
              <div className="h-[200px]">
                <details className="group rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    <div className="flex flex-row justify-start gap-x-3 items-center">
                      <div className="w-6 h-6 border-2 border-primary"></div>
                      <p>Altcoin opportunities</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    <div className="flex flex-col">
                      Access potential altcoin trading setups, analysis, entry
                      zones, accumulation levels and risk information.
                      <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </details>
              </div>
              <div className="h-[200px]">
                <details className="group rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    <div className="flex flex-row justify-start gap-x-3 items-center">
                      <div className="w-6 h-6 border-2 border-primary"></div>
                      <p>Altcoin opportunities</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    <div className="flex flex-col">
                      Access potential altcoin trading setups, analysis, entry
                      zones, accumulation levels and risk information.
                      <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </details>
              </div>
              <div className="h-[200px]">
                <details className="group rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    <div className="flex flex-row justify-start gap-x-3 items-center">
                      <div className="w-6 h-6 border-2 border-primary"></div>
                      <p>Altcoin opportunities</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    <div className="flex flex-col">
                      Access potential altcoin trading setups, analysis, entry
                      zones, accumulation levels and risk information.
                      <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </details>
              </div>
              <div className="h-[200px]">
                <details className="group rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    <div className="flex flex-row justify-start gap-x-3 items-center">
                      <div className="w-6 h-6 border-2 border-primary"></div>
                      <p>Altcoin opportunities</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    <div className="flex flex-col">
                      Access potential altcoin trading setups, analysis, entry
                      zones, accumulation levels and risk information.
                      <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
        {/* Ride the crypto wave section */}
        <section className="mt-10 w-[90%] h-[650px] py-2 border-2 m-auto p-2 video__section">
          <h1 className=" m-auto mt-10 text-black font-bold text-4xl text-center">
            Escape the financial rat race & earn <br />
            generational wealth in the 2024 bull run
          </h1>
          {/* Text Div */}
          <div className="text__section ">
            <p>
              Making money in crypto is all about the information you consume.
            </p>

            <p>
              Good information equals positive returns. Bad information equals
              losses. The best information equals 100X explosive portfolio
              growth.
            </p>
            <p>
              By leveraging Cryptonary's research, analysis and community, this
              explosive growth is a foregone conclusion.
            </p>
            <p>
              But opportunity waits for no one. Seize this one while you still
              can. Don't let it pass you by only to watch others reap the gains.
            </p>

            <button className="flex w-[30%] text-xl rounded-md p-2 m-auto height-[3rem] justify-center items-center bg-primary text-[#fcfcfd]">
              Become a winner
            </button>
          </div>
        </section>
        {/* Section Subscription */}
        <section className="mt-10 w-[90%] py-2  m-auto p-2 ">
          <h2 className=" m-auto mt-10 text-black font-bold text-4xl text-center">
            Unlock instant access to crypto's hottest opportunities
          </h2>
          {/* title */}
          <div className="mt-8 flex flex-row w-[100%] justify-center space-x-5">
            <div className=" flex flex-row justify-center items-center">
              Pay with Card
            </div>
            <div className=" flex flex-row justify-center items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex flex-row justify-center items-center">
              Pay with Crypto
            </div>
          </div>
          {/* card body */}
          <aside className="w-full mt-8 flex flex-col m-auto justify-center items-center">
            <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
              <div className="p-4 ">
                {/* button tab */}
                <div className="flex flex-row justify-center items-center w-full">
                  <button className="bg-gray-200  px-2 rounded-md w-24">
                    Monthly
                  </button>
                  <button className="bg-primary px-2 rounded-md w-24">
                    Yearly
                  </button>
                </div>
                {/* amount */}
                <div className="flex flex-col justify-center items-center w-full">
                  {" "}
                  <h2 className="text-black mt-4 text-2xl">
                    Minimum Investment
                  </h2>
                  <h2 className="text-black mt-4 text-2xl">$250.00</h2>
                </div>
              </div>
              {/* <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Standard plan
              </h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  49
                </span>
                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div> */}
              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="w-full flex  flex-row justify-start items-center gap-x-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    <p className="text-black font-semibold">Research:</p>
                    <span className="text-black">
                      {" "}
                      Uncover a curated list of token picks and investments
                    </span>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="w-full flex  flex-row justify-start items-center gap-x-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    <p className="text-black font-semibold">Analysis:</p>
                    <span className="text-black">
                      {" "}
                      Discover trading setups and make informed decisions
                    </span>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="w-full flex  flex-row justify-start items-center gap-x-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    <p className="text-black font-semibold">Community:</p>
                    <span className="text-black">
                      {" "}
                      Get real-time feedback and join our live events
                    </span>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="w-full flex  flex-row justify-start items-center gap-x-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    <p className="text-black font-semibold">Tools:</p>
                    <span className="text-black">
                      {" "}
                      Optimise your portfolio & get data-driven insights
                    </span>
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Subscribe
              </button>
            </div>
          </aside>
        </section>
        {/* Section FAQ */}
        <section className="mt-10 w-[90%] py-2 m-auto p-2 ">
          <h2 className=" m-auto mt-10 text-black font-bold text-4xl text-center">
            Frequently Asked Questions
          </h2>
          {/* Accordian */}
          <aside>
            <div className="mx-auto max-w-3xl mt-8">
              <div className="divide-y divide-gray-100 space-y-4">
                <details className="group bg-yellow-200 rounded-md px-3" open>
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    What is Cryptonary Pro?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    Cryptonary Pro is your gateway to mastering the crypto
                    market. Discover cutting-edge research and analysis, that
                    will empower you with the insights to capitalise on the most
                    exciting opportunities in crypto.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    How do we research?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className=" pb-4 text-secondary-500">
                    Our research is grounded in a meticulous analysis of the
                    crypto market. We track trends and leverage a wide array of
                    data sources to spotlight winning investments.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    What about our analysis?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    Our strategy combines macro, technical, and on-chain
                    analysis to highlight market trends and trading
                    opportunities. This multi-faceted approach ensures a
                    well-rounded understanding of the market and its trajectory.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    Team experience?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    Boasting 30+ years of collective experience, our team is at
                    the forefront of crypto research.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    Is Cryptonary suitable for begineers?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    Absolutely. Cryptonary is designed for investors at all
                    levels, offering the insights and tools necessary for
                    everyone to navigate the crypto market successfully.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    What should i do if i misspeltor i am unsure about the email
                    i used when i signed up?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    If you entered your email incorrectly or are uncertain about
                    the email you provided when you signed up, please contact us
                    at support@cryptonary.com. If possible, please include the
                    email you used and the correct email you intended to use.
                    Our support team will help update your account with the
                    right information.
                  </div>
                </details>
              </div>
            </div>
          </aside>
        </section>
        {/*  footer */}
        <footer className="mt-10 w-[90%] py-2 m-auto p-2 ">
          <aside>
            <div className="mx-auto max-w-3xl mt-8">
              <div className="w-full bg-gray-200 p-3 rounded-md">
                <div className="mt-6 flex justify-evenly">
                  <a href="#" className="text-black">
                    Eductaion
                  </a>
                  <a href="#" className="text-black">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-black">
                    Terms & Conditions
                  </a>
                  <a href="#" className="text-black">
                    Contact Us
                  </a>
                  <a href="#" className="text-black">
                    Library
                  </a>
                </div>
                <div className=" justify-center items-center flex p-2">
                  <div className="mt-8 flex flex-row gap-x-5  m-auto">
                    <div className="w-4 h-4  cursor-pointer  flex flex-row justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-6 h-6 bi bi-twitter text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                      </svg>
                    </div>
                    {/*  */}
                    <div className="w-4 h-4  cursor-pointer flex flex-row justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-6 h-6 bi bi-facebook text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </div>
                    {/*  */}
                    <div className="w-4 h-4 cursor-pointer flex flex-row justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-6 h-6 bi bi-instagram text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* text */}
              <div className="text-center mt-6">
                <p>
                  Disclaimer: Not financial or investment advice. Any
                  capital-related decisions you make are your full
                  responsibility.
                </p>
                <p className="mt-6">© 2024 Cryptonary. All rights reserved.</p>
              </div>
            </div>
          </aside>
        </footer>
      </article>
    </>
  );
};

export default LandingPage;

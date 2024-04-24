// import React from "react";
import { BiBell } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSwap } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiShow } from "react-icons/bi";

import Cup from "../../assets/cup.png";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard__container">
        <div className="flex justify-between pt-[16px] p-[10px] bg-[#121A25]">
          <h1 className="text-[1.7rem] font-[700] text-white">
            Hello, Mcdemzy
          </h1>

          <div className="flex  mt-[10px] gap-2 justify-center">
            <a href="">
              <BiBell className="bg-[#222A37] p-[6px] text-[2.5rem] rounded-full text-white" />
            </a>
            <a href="">
              <BsThreeDotsVertical className="text-[2rem] text-white" />
            </a>
          </div>
        </div>

        <div className="text-center mt-6">
          <h3>Total Balance</h3>
          <p className="text-[2.5rem] font-[700]">$0.00</p>
        </div>

        <div className="mt-6 dashboard__feature flex justify-around items-center w-[90vw] h-[16vh] m-auto bg-[#060d17] p-[10px] rounded-xl">
          <a href="">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <BsBoxArrowInRight className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Buy Crypto</span>
            </div>
          </a>
          <a href="">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <BsBoxArrowInLeft className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Sell Crypto</span>
            </div>
          </a>
          <a href="">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <AiOutlineSwap className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Swap</span>
            </div>
          </a>
          <a href="">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <BsBoxArrowInDownLeft className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Deposit</span>
            </div>
          </a>
          <a href="">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <BsBoxArrowUpRight className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Withdraw</span>
            </div>
          </a>
        </div>
      </section>

      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        className="mySwiper dashboard__banner"
      >
        <div className=" dashboard__banner">
          <SwiperSlide className="dashboard__leader">
            <h3>Leaderboard</h3>
            <p>
              You can be a winner by <br />
              just trading.{" "}
              <a href="">
                Click here <br /> to view more
              </a>
            </p>
            <img src={Cup} alt="" width={80} height={80} />
          </SwiperSlide>

          <SwiperSlide className="dashboard__kyc">
            <h3>
              Complete <br />
              KYC Setup
            </h3>
          </SwiperSlide>
        </div>
      </Swiper>

      <section className="crypto__assets-container h-[100vh]">
        <div className="crypto__assets">
          <h3>All Crypto Assets</h3>
          <div className="flex justify-center items-center gap-2">
            <span>Show</span>
            <BiShow className="crypto__assets-icon" />
          </div>
        </div>

        <div className="crypto__container">
          <div className="left__crypto-container">
            <div></div>
            <div></div>
          </div>
          <div className="right__crypto-container"></div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

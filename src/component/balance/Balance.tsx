// import React from "react";
import { IoIosSend } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";
import { IoSwapHorizontalOutline } from "react-icons/io5";

import { FaBitcoin } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { BsCoin } from "react-icons/bs";

const Balance = () => {
  return (
    <>
      <section className="balance__container">
        <div className="balance__container-top">
          <h1>$150,000,000.00</h1>
          <p>Fiat Balance</p>

          {/* Balance Icons */}

          <div className="balance__icons-container flex justify-evenly">
            <a href="" className="flex flex-col justify-center items-center">
              <IoIosSend className="balance__icons" />
              Send
            </a>
            <a href="" className="flex flex-col justify-center items-center">
              <FaMoneyBillTransfer className="balance__icons" />
              Receive
            </a>
            <a href="" className="flex flex-col justify-center items-center">
              <AiOutlineRise className="balance__icons" />
              Buy
            </a>
            <a href="" className="flex flex-col justify-center items-center">
              <IoSwapHorizontalOutline className="balance__icons" />
              Swap
            </a>
          </div>
        </div>

        {/* balance__container-bottom */}
        <div className="balance__container-bottom">
          <div className="text-black mt-10 flex justify-center items-center gap-5">
            <button className="balance__container-deposit">
              Deposit Funds
            </button>
            <button className="balance__container-withdraw">
              Withdraw Funds
            </button>
          </div>

          {/* Coins */}

          <div>
            <FaBitcoin className="text-black" />
            <p>
              Bitcoin <br />
              BTC
            </p>

            <div>
              $28962 <br /> <span>-4.28%</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Balance;

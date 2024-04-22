import React from "react";
import { BiBell } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard__container">
        <div className="flex justify-between pt-[16px] p-[10px] bg-[#121A25]">
          <h1 className="text-[1.7rem] font-[700] text-white">
            Hello, Mcdemzy
          </h1>

          <div className="flex  mt-[10px] gap-2">
            <BiBell className="bg-[#222A37] p-[6px] text-[2rem] rounded-full text-white" />
            <BsThreeDotsVertical className="text-[2rem] text-white" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

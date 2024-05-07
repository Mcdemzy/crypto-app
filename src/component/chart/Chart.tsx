import "./chart.css";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoStarOutline } from "react-icons/io5";
import CryptoIcon3 from "../../assets/crypto3.png";

const Chart = () => {
  return (
    <>
      <article className="chart__page">
        {/* Sample Nav */}

        <div className="chart__bitcoin">
          <p>BITCOIN (BTC)</p>
        </div>

        {/*  Main Chart Container*/}
        <div className="main__chart-container">
          <img src={CryptoIcon3} alt="" width={64} />
          <h1>
            $63,695.<span>50</span>
          </h1>
          <h3>
            Change <span>+0.86%</span>
          </h3>
          {/* Chart Change */}
          {/* <div className="flex justify-center items-center">
            <div className="chart__price">Price</div>
            <div className="chart__balance">Balance</div>
          </div> */}
          {/* Main Chart */}
          <div className="main__chart-display"></div>
        </div>
      </article>
    </>
  );
};

export default Chart;

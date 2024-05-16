import "./etf.css";
import EtfImg1 from "../../assets/etfImg1.png";
import EtfImg2 from "../../assets/etfImg2.png";

const Etf = () => {
  return (
    <>
      <article className="etf__page">
        <section className="etf__main-container">
          <h1>Invest</h1>
          <div>
            <a href="">US Stocks</a>
            <a href="">Fixed Returns</a>
          </div>

          <div></div>
        </section>

        {/* ETF main display */}
        <section>
          <p className="etf__featured">Featured Stocks</p>
          {/*  */}
          <section>
            <div className="etf__main-display">
              <img src={EtfImg1} alt="" width={60} height={60} />
              <p className="etf__main-text">
                Valkyrie Bitcoin Fund <br />
                <span>Brrr</span>
              </p>
              <p className="text-[1rem]">$62.50</p>
            </div>
            <div className="etf__main-display">
              <img src={EtfImg2} alt="" width={60} />
              <p className="etf__main-text">
                Valkyrie Bitcoin Fund <br />
                <span>Bitb</span>
              </p>
              <p className="text-[1rem]">$62.50</p>
            </div>
          </section>
        </section>
      </article>
    </>
  );
};

export default Etf;

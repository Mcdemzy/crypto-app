// import React from "react";
import Rocket from "../../assets/rocket.png";

const Coming = () => {
  return (
    <>
      <section>
        <div className="coming-soon">
          <img src={Rocket} alt="" width={300} />
          <p>Coming Soon</p>
        </div>
        <div className="coming-home">
          <a href="">Back Home</a>
        </div>
      </section>
    </>
  );
};

export default Coming;

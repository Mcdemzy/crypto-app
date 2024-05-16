// import { Routes, Route } from "react-router-dom";
// import Create from "./component/create/Create";
// import Dashboard from "./component/dashboard/Dashboard";
// import LandingPage from "./component/landingpage/LandingPage";
import Signup from "./component/signup/Signup";
// import Signin from "./component/signin/Signin";
// import Banner from "./component/banner/Banner";
// import Navbar from "./component/navbar/Navbar";
// import Coming from "./component/coming/Coming";
import MyChart from "./component/chart/TradingViewWidget";
import Dashboard from "./component/dashboard/Dashboard";
import EtfFinancials from "./component/etf/EtfFinancials";
import LandingPage from "./component/landingpage/LandingPage";
import Wallet from "./component/wallet/Wallet";
import Modal from "./component/modal/Modal";
import Chart from "./component/chart/TradingViewWidget";
import TradingViewWidget from "./component/chart/TradingViewWidget";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LandingPage />} />
    //   <Route path="/signup" element={<Signup />} />
    //   <Route path="/signin" element={<Signin />} />
    //   <Route path="/create" element={<Create />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    //   <Route path="/banner" element={<Banner />} />
    //   <Route path="/navbar" element={<Navbar />} />
    //   <Route path="/wallet" element={<Wallet />} />
    //   <Route path="/coming" element={<Coming />} />
    //   {/* Add more routes for other components if needed */}
    // </Routes>
    // <Wallet />
    <Chart />
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Create from "./component/create/Create";
import Dashboard from "./component/dashboard/Dashboard";
import LandingPage from "./component/landingpage/LandingPage";
import Signup from "./component/signup/Signup";
import Signin from "./component/signin/Signin"; // Corrected import
import Banner from "./component/banner/Banner";
import Navbar from "./component/navbar/Navbar";
import Wallet from "./wallet/Wallet";
import Coming from "./component/coming/Coming";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LandingPage />} />
    //   <Route path="/signup" element={<Signup />} />
    //   <Route path="/signin" element={<Signin />} />
    //   <Route path="/create" element={<Create />} />
    // </Routes>
    <>
      {/* <Dashboard /> */}
      {/* <Navbar /> */}
      {/* <Coming /> */}
      {/* <Wallet /> */}

      <Signin />
    </>
  );
}

export default App;

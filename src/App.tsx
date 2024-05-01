import { Routes, Route } from "react-router-dom";
import Create from "./component/create/Create";
import Dashboard from "./component/dashboard/Dashboard";
import LandingPage from "./component/landingpage/LandingPage";
import Signup from "./component/signup/Signup";
import Signin from "./component/signin/Signin";
import Banner from "./component/banner/Banner";
import Navbar from "./component/navbar/Navbar";
import Wallet from "./wallet/Wallet";
import Coming from "./component/coming/Coming";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/create" element={<Create />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/banner" element={<Banner />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/coming" element={<Coming />} />
      {/* Add more routes for other components if needed */}
    </Routes>
  );
}

export default App;

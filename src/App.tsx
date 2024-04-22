import { Routes, Route } from "react-router-dom";
import Forgot from "./component/forgot/Forgot.tsx";
import LandingPage from "./component/landingpage/LandingPage.tsx";
import Banner from "./component/banner/Banner.tsx";
import Signin from "./component/signin/Signin.tsx";
// import Signin from "./component/signin/Signin.tsx";

import Create from "./component/create/Create.tsx";
import Email from "./component/email/Email.tsx";
import Signup from "./component/signup/Signup.tsx";

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      {/* <Signin /> */}
      {/* <Create /> */}
      <Signup />
      {/* <Routes>
        <Route path="/banner" element={<Banner />} />
        <Banner />
      </Routes> */}
    </>
  );
}

export default App;

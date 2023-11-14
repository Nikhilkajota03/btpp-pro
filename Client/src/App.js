import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Trading from "./components/Trading";
import Solution from "./components/Solution";
import Login from "./page/Login";
import Signin from "./page/Signin";
import Marketplace from "./page/Marketplace";
import Auction from "./page/Auction";
import Contact from "./page/Contact";
import Form from "../src/components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReduxUser from "./redux/reduxUser";

const App = () => {
  return (
    <>
      {/* <Form/> */}
      {/* <Herosection/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Herosection />
                <Solution />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        
          <Route path="/signin" element={<Signin />} />
          <Route path="/auction" element={ <ReduxUser> <Auction /> </ReduxUser>} />
          <Route path="/market" element={<ReduxUser> <Marketplace /> </ReduxUser>} />
          <Route path="/contact" element={<Contact />} />

          {/* <Solution/> */}
          {/* <Login/>
      <Signin/>
      <Marketplace/>
      <Auction/>
      <Contact/> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

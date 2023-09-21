import React ,{useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/LandingPage/Dashboard";
import "./App.css"
// import HomePage from "./components/LandingPage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./routes/ProtectedRoute";
// import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";

import {
  LoginPage,
  SignupPage,
  ActivationPage,
  FAQPage,
  ProfilePage,
} from "./routes/Routes.js";

import { Home,About,Contact } from "./components/LandingPage/Routes";

// import axios from "axios";
// import { server } from "./server";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";



const App=()=> {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Dashboard /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />}/> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

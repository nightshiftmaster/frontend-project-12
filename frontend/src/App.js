import "./App.css";
import React from "react";
import { Login } from "./pages/Loginpage";
import { Main } from "./pages/Mainpage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notfound } from "./pages/Notfoundpage";
import RequireAuth from "./hooks/RequireAuth";
import { AuthorizeProvider } from "./hooks/AuthorizeProvider";
import { SignUp } from "./pages/Signuppage";

const App = () => {
  return (
    <AuthorizeProvider>
      <BrowserRouter>
        <div className="d-flex flex-column h-100">
          <Navbar />

          <Route path="*" element={<Notfound />} />
        </div>
      </BrowserRouter>
    </AuthorizeProvider>
  );
};

export default App;

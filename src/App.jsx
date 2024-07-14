import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupLogin from "./pages/SignupLogin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Admin from "./pages/admin/Admin";

import AdminDeleteInformation from "./components/admin/informations/AdminDeleteInformation";

import Testa from "../Testa";
import AdminProduct from "./pages/admin/products/AdminProduct";
import AdminAddProduct from "./pages/admin/products/AdminAddProduct";
import AdminModifyProduct from "./pages/admin/products/AdminModifyProduct";
import AdminInformation from "./pages/admin/informations/AdminInformation";
import AdminAddInformation from "./pages/admin/informations/AdminAddInformation";
import AdminInformationModify from "./pages/admin/informations/AdminInformationModify";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signupLogin" element={<SignupLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminProduct" element={<AdminProduct />} />
          <Route path="/adminAddProduct" element={<AdminAddProduct />} />
          <Route path="/adminModifyProduct/:productId" element={<AdminModifyProduct />} />
          <Route path="/adminInformation" element={<AdminInformation />} />
          <Route path="/adminAddInformation" element={<AdminAddInformation />} />
          <Route path="/adminInformationModify/:informationId" element={<AdminInformationModify />} />
          <Route path="/adminDeleteInformation/:informationId" element={<AdminDeleteInformation/>} />
          <Route path="/testa" element={<Testa/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

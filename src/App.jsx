import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupLogin from "./pages/SignupLogin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

import AdminDeleteInformation from "./components/admin/informations/AdminDeleteInformation";

import Testa from "../Testa";
import AdminProduct from "./pages/admin/products/AdminProduct";
import AdminAddProduct from "./pages/admin/products/AdminAddProduct";
import AdminModifyProduct from "./pages/admin/products/AdminModifyProduct";
import AdminInformation from "./pages/admin/informations/AdminInformation";
import AdminAddInformation from "./pages/admin/informations/AdminAddInformation";
import AdminInformationModify from "./pages/admin/informations/AdminInformationModify";
import EveningDresses from "./pages/EveningDresses";
import LatestCollection from "./pages/LatestCollection";
import Collection from "./pages/Collection";
import Navigation from "./components/Navigation";
import AdminNavigation from "./pages/admin/AdminNavigation";
import AboutMe from "./pages/AboutMe";
import AdminCategory from "./pages/admin/categories/AdminCategory";
import AdminAddCategory from "./pages/admin/categories/AdminAddCategory";
import AdminUpdateCategory from "./pages/admin/categories/AdminUpdateCategory";



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signupLogin" element={<SignupLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          
          <Route path="/admin" element={<AdminNavigation/>} />
          <Route path="/adminProduct" element={<AdminProduct />} />
          <Route path="/adminAddProduct" element={<AdminAddProduct />} />
          <Route path="/adminModifyProduct/:productId" element={<AdminModifyProduct />} />
          <Route path="/adminInformation" element={<AdminInformation />} />
          <Route path="/adminAddInformation" element={<AdminAddInformation />} />
          <Route path="/adminInformationModify/:informationId" element={<AdminInformationModify />} />
          <Route path="/adminDeleteInformation/:informationId" element={<AdminDeleteInformation/>} />
          <Route path="/testa" element={<Testa/>} />
          <Route path="/eveningDresses" element={<EveningDresses/>} />
          <Route path="/latestCollection" element={<LatestCollection/>} />
          <Route path="/aboutMe" element={<AboutMe/>} />
          <Route path="/adminCategory" element={<AdminCategory/>} />
          <Route path="/adminAddCategory" element={<AdminAddCategory/>} />
          <Route path="/adminUpdateCategory/:categoryId" element={<AdminUpdateCategory/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

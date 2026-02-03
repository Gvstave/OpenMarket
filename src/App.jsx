import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import SetBuyerProfile from './components/SetBuyerProfile';
import SetSellerProfile from './components/SetSellerProfile';
import Homepage from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { Routes, Route } from "react-router-dom";
import { TOASTER_DURATION } from './utils/toaster_duration';
import { Toaster } from 'react-hot-toast';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import HelpCenter from './pages/HelpCenter';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/setBuyerProfile" element={<SetBuyerProfile />} />
      <Route path="/setSellerProfile" element={<SetSellerProfile />}/>
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path='helpCenter' element={<HelpCenter />}/>
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: TOASTER_DURATION,
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "8px",
          },
        }}
      /> */}
    </Routes>
  );
}